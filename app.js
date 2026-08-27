(function () {
  "use strict";

  // ---------- Config ----------
  var WORD_INTERVAL_MS = 210;     // pace of the word-by-word read
  var ANSWER_SECONDS = 10;        // buzz-in and post-read answer window
  var TIMER_CIRCUMFERENCE = 194.78; // 2 * PI * r(31), matches style.css
  var FADE_MS = 250;              // must match .fade-el transition duration in style.css

  // ---------- Elements ----------
  var screenStart = document.getElementById("screen-start");
  var screenGame = document.getElementById("screen-game");
  var screenQR = document.getElementById("screen-qr");
  var btnPlay = document.getElementById("btn-play");
  var btnShowQR = document.getElementById("btn-show-qr");
  var btnQRBack = document.getElementById("btn-qr-back");

  var categoryLabel = document.getElementById("category-label");
  var questionTextEl = document.getElementById("question-text");
  var cursorEl = document.getElementById("cursor");

  var feedbackEl = document.getElementById("feedback");
  var feedbackTextEl = document.getElementById("feedback-text");
  var revealBlock = document.getElementById("reveal-block");
  var answerTextEl = document.getElementById("answer-text");

  var buzzZone = document.getElementById("buzz-zone");
  var btnBuzz = document.getElementById("btn-buzz");

  var answerZone = document.getElementById("answer-zone");
  var answerForm = document.getElementById("answer-form");
  var answerInput = document.getElementById("answer-input");
  var timerProgress = document.getElementById("timer-progress");
  var timerNum = document.getElementById("timer-num");

  var btnNext = document.getElementById("btn-next");

  // ---------- State ----------
  var bag = [];            // shuffled queue of question indices
  var bagPointer = 0;
  var askedCount = 0;
  var current = null;      // current question object
  var words = [];
  var wordIndex = 0;
  var wordTimerId = null;
  var answerTimeoutId = null;
  var answerIntervalId = null;
  var hasBuzzed = false;
  var revealFinished = false;

  // ---------- Bag shuffling (no repeats until exhausted) ----------
  // Uses crypto's RNG when available (some browsers reduce Math.random's
  // entropy for fingerprinting resistance) so shuffles stay unpredictable.
  function randomFloat() {
    if (window.crypto && window.crypto.getRandomValues) {
      var buf = new Uint32Array(1);
      window.crypto.getRandomValues(buf);
      return buf[0] / 4294967296; // 2^32
    }
    return Math.random();
  }

  function shuffledIndices(n) {
    var arr = [];
    for (var i = 0; i < n; i++) arr.push(i);
    for (var j = arr.length - 1; j > 0; j--) {
      var k = Math.floor(randomFloat() * (j + 1));
      var tmp = arr[j]; arr[j] = arr[k]; arr[k] = tmp;
    }
    return arr;
  }

  function refillBag() {
    var lastIndex = bag.length ? bag[bag.length - 1] : -1;
    bag = shuffledIndices(QUESTIONS.length);
    // avoid an immediate repeat across a reshuffle boundary
    if (bag.length > 1 && bag[0] === lastIndex) {
      var swapWith = 1 + Math.floor(randomFloat() * (bag.length - 1));
      var tmp = bag[0]; bag[0] = bag[swapWith]; bag[swapWith] = tmp;
    }
    bagPointer = 0;
  }

  function nextQuestion() {
    if (bagPointer >= bag.length) refillBag();
    var idx = bag[bagPointer++];
    return QUESTIONS[idx];
  }

  // ---------- Screen transitions ----------
  function showScreen(el) {
    [screenStart, screenGame, screenQR].forEach(function (s) {
      s.classList.toggle("is-active", s === el);
    });
  }

  btnShowQR.addEventListener("click", function () { showScreen(screenQR); });
  btnQRBack.addEventListener("click", function () { showScreen(screenStart); });

  // ---------- Control-zone crossfades ----------
  // Exactly one of buzz-zone / answer-zone / btn-next is visible at a time.
  var controlEls = [buzzZone, answerZone, btnNext];

  function currentlyVisibleControl() {
    for (var i = 0; i < controlEls.length; i++) {
      if (controlEls[i].classList.contains("is-visible")) return controlEls[i];
    }
    return null;
  }

  function fadeInControl(el) {
    el.hidden = false;
    void el.getBoundingClientRect(); // force reflow so the transition runs
    requestAnimationFrame(function () { el.classList.add("is-visible"); });
  }

  function crossfadeControl(hideEl, showEl) {
    if (hideEl) {
      hideEl.classList.remove("is-visible");
      setTimeout(function () {
        hideEl.hidden = true;
        fadeInControl(showEl);
      }, FADE_MS);
    } else {
      fadeInControl(showEl);
    }
  }

  function resetControlsToBuzzer() {
    var visible = currentlyVisibleControl();
    controlEls.forEach(function (el) {
      if (el !== visible) { el.hidden = true; el.classList.remove("is-visible"); }
    });
    if (visible === buzzZone) return;
    crossfadeControl(visible, buzzZone);
  }

  // ---------- Word-by-word reveal ----------
  function startReveal(question) {
    words = question.text.split(/\s+/);
    wordIndex = 0;
    revealFinished = false;
    hasBuzzed = false;
    questionTextEl.textContent = "";
    questionTextEl.appendChild(cursorEl);

    clearInterval(wordTimerId);
    wordTimerId = setInterval(function () {
      if (wordIndex >= words.length) {
        clearInterval(wordTimerId);
        finishReveal();
        return;
      }
      var wordNode = document.createTextNode(
        (wordIndex === 0 ? "" : " ") + words[wordIndex]
      );
      questionTextEl.insertBefore(wordNode, cursorEl);
      wordIndex++;
    }, WORD_INTERVAL_MS);
  }

  function finishReveal() {
    revealFinished = true;
    if (cursorEl.parentNode) cursorEl.parentNode.removeChild(cursorEl);
    // If the player never buzzed, the clock now starts automatically.
    if (!hasBuzzed) {
      startAnswerWindow({ auto: true });
    }
  }

  function showRestOfQuestionInstantly() {
    clearInterval(wordTimerId);
    if (wordIndex < words.length) {
      var rest = words.slice(wordIndex).join(" ");
      var node = document.createTextNode((wordIndex === 0 ? "" : " ") + rest);
      if (cursorEl.parentNode) {
        questionTextEl.insertBefore(node, cursorEl);
      } else {
        questionTextEl.appendChild(node);
      }
      wordIndex = words.length;
    }
    if (cursorEl.parentNode) cursorEl.parentNode.removeChild(cursorEl);
  }

  // ---------- Buzzing ----------
  btnBuzz.addEventListener("click", function () {
    if (hasBuzzed || revealFinished) return;
    hasBuzzed = true;
    btnBuzz.classList.add("is-pressed");
    clearInterval(wordTimerId);
    if (cursorEl.parentNode) cursorEl.parentNode.removeChild(cursorEl);
    startAnswerWindow({ auto: false });
  });

  // ---------- Answer window ----------
  function startAnswerWindow() {
    crossfadeControl(buzzZone, answerZone);
    answerInput.value = "";
    answerInput.disabled = false;
    setTimeout(function () { answerInput.focus(); }, 30);

    var secondsLeft = ANSWER_SECONDS;
    timerNum.textContent = String(secondsLeft);

    // Reset ring instantly, then animate it down over the full window.
    timerProgress.style.transition = "none";
    timerProgress.style.strokeDashoffset = "0";
    // force reflow so the transition below actually animates
    void timerProgress.getBoundingClientRect();
    timerProgress.style.transition = "stroke-dashoffset " + ANSWER_SECONDS + "s linear";
    timerProgress.style.strokeDashoffset = String(TIMER_CIRCUMFERENCE);

    clearInterval(answerIntervalId);
    answerIntervalId = setInterval(function () {
      secondsLeft -= 1;
      timerNum.textContent = String(Math.max(secondsLeft, 0));
    }, 1000);

    clearTimeout(answerTimeoutId);
    answerTimeoutId = setTimeout(handleTimeout, ANSWER_SECONDS * 1000);
  }

  function stopAnswerWindow() {
    clearTimeout(answerTimeoutId);
    clearInterval(answerIntervalId);
    answerInput.disabled = true;
  }

  answerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (answerInput.disabled) return;
    var userAnswer = answerInput.value;
    stopAnswerWindow();
    var correct = checkAnswer(userAnswer, current);
    showFeedback(correct ? "correct" : "incorrect");
    wrapUpQuestion();
  });

  function handleTimeout() {
    stopAnswerWindow();
    showFeedback("timeout");
    wrapUpQuestion();
  }

  function wrapUpQuestion() {
    showRestOfQuestionInstantly();
    revealBlock.hidden = false;
    answerTextEl.textContent = current.answer;
    crossfadeControl(answerZone, btnNext);
  }

  // ---------- Answer checking ----------
  // Deliberately forgiving: case, punctuation, and leading articles never
  // matter, a trailing/leading qualifier ("New York" for "New York State")
  // is accepted, and a bare surname is accepted for a multi-word name.
  function normalize(str) {
    return str
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // strip accents
      .replace(/["“”'’.,!?;:()]/g, "")
      .replace(/\b(the|a|an)\b/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function matchesOne(user, candidate) {
    if (!candidate) return false;
    if (user === candidate) return true;
    // substring either direction, e.g. "kite runner" vs "the kite runner"
    if (candidate.length >= 4 && (user.indexOf(candidate) !== -1 || candidate.indexOf(user) !== -1)) {
      return true;
    }
    // bare last word of a multi-word answer, e.g. "Whitman" for "Walt Whitman"
    var words = candidate.split(" ");
    if (words.length > 1) {
      var lastWord = words[words.length - 1];
      if (lastWord.length >= 3 && user === lastWord) return true;
    }
    return false;
  }

  function checkAnswer(userRaw, question) {
    var user = normalize(userRaw);
    if (!user) return false;
    var candidates = [question.answer].concat(question.alt || []).map(normalize);
    for (var i = 0; i < candidates.length; i++) {
      if (matchesOne(user, candidates[i])) return true;
    }
    return false;
  }

  function showFeedback(kind) {
    feedbackEl.hidden = false;
    feedbackEl.classList.remove("is-correct", "is-incorrect", "is-timeout");
    if (kind === "correct") {
      feedbackEl.classList.add("is-correct");
      feedbackTextEl.textContent = "Good job — that's correct!";
    } else if (kind === "incorrect") {
      feedbackEl.classList.add("is-incorrect");
      feedbackTextEl.textContent = "Not quite. Here's the correct answer:";
    } else {
      feedbackEl.classList.add("is-timeout");
      feedbackTextEl.textContent = "Time's up! Here's the correct answer:";
    }
  }

  // ---------- Question lifecycle ----------
  function loadQuestion() {
    current = nextQuestion();
    askedCount++;

    categoryLabel.textContent = current.category;

    feedbackEl.hidden = true;
    revealBlock.hidden = true;
    answerTextEl.textContent = "";
    answerInput.value = "";

    btnBuzz.classList.remove("is-pressed");
    resetControlsToBuzzer();

    startReveal(current);
  }

  btnNext.addEventListener("click", loadQuestion);

  // ---------- Boot ----------
  btnPlay.addEventListener("click", function () {
    showScreen(screenGame);
    refillBag();
    askedCount = 0;
    loadQuestion();
  });

})();
