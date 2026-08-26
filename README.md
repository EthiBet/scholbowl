# Scholastic Bowl — Buzzer Practice

A single-page buzzer-practice site: a topic appears, the question reads in
word by word, and you can ring in any time. Miss the buzz and the clock
still gives you five seconds once the read finishes.

## Files

- `index.html` — page structure (start screen + game screen)
- `style.css` — all styling
- `app.js` — game logic (word reveal, buzzing, timer, answer checking, question cycling)
- `questions.js` — the 60 question/answer pairs, as a plain JS array
- `background.png` / `logo.png` — placeholder art (swap these for your own — same filenames, no folder, sitting next to `index.html`)

## How a round works

1. **Play** on the start screen begins the round.
2. The category shows up top, then the question appears word by word.
3. Tap **Buzz** any time — the read pauses and a 5-second answer clock starts.
4. If you never buzz, the clock starts automatically once the full question has been read.
5. Submit an answer (or run out of time) and the full question plus the correct answer are shown.
6. **Next Question** clears the board and loads a new question — the set is shuffled so nothing repeats until all 60 have been asked.

## Customizing

- **Swap the art**: replace `background.png` and `logo.png` in this folder with your own images of the same filenames.
- **Add or edit questions**: open `questions.js` — each entry is `{ category, text, answer }`. `text` is what gets read aloud word by word; `answer` is what the player's typed answer is checked against.
- **Reading speed / answer time**: at the top of `app.js`, adjust `WORD_INTERVAL_MS` (milliseconds between words) and `ANSWER_SECONDS` (the countdown length).
- **Answer checking**: matching is case/punctuation-insensitive and accepts an answer that contains (or is contained in) the accepted answer — so "the kite runner" and "kite runner" both work. Tighten or loosen this in the `checkAnswer` function in `app.js`.

## Deploying on GitHub Pages

1. Push this folder's contents to a repo (root, or a `/docs` folder).
2. In the repo's **Settings → Pages**, set the source to that branch/folder.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

No build step, no dependencies beyond two Google Fonts loaded via `<link>` in `index.html`.
