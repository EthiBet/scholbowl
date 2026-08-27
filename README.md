# SHS Scholastic Bowl — Buzzer Practice

A single-page buzzer-practice site: a topic appears, the question reads in
word by word, and you can ring in any time. Miss the buzz and the clock
still gives you ten seconds once the read finishes.

## Files

- `index.html` — page structure (start screen, game screen, QR screen)
- `style.css` — all styling
- `app.js` — game logic (word reveal, buzzing, timer, answer checking, question cycling)
- `questions.js` — 116 question/answer pairs, as a plain JS array
- `background.png` / `logo.png` / `qrcode.png` — placeholder art (swap these for your own — same filenames, no folder, sitting next to `index.html`). `logo.png` also doubles as the browser tab favicon.

## How a round works

1. **Play** on the start screen begins the round.
2. The category shows up top, then the question appears word by word, right under the category.
3. Only the **Buzz** button is shown below the question. Tap it any time and it fades out, replaced by the answer box, Enter button, and a 10-second countdown ring.
4. If you never buzz, that same swap happens automatically once the full question has been read.
5. Submit an answer (or run out of time) and the full question plus the correct answer are shown; the buzz/answer controls fade out and a **Next Question** button fades in.
6. **Next Question** fades that out and the **Buzz** button back in for a freshly-shuffled question — nothing repeats until all 116 have been asked.
7. **Show QR Code** on the start screen opens a QR screen with a **Back to Home** button.

## Customizing

- **Swap the art**: replace `background.png`, `logo.png`, and `qrcode.png` in this folder with your own images of the same filenames. Generate a real QR code (pointing at your deployed site URL, sign-up form, etc.) and save it as `qrcode.png`.
- **Add or edit questions**: open `questions.js` — each entry is `{ category, text, answer }`, with an optional `alt: [...]` array of other accepted answers. `text` is what gets read aloud word by word; `answer`/`alt` are what the player's typed answer is checked against.
- **Reading speed / answer time**: at the top of `app.js`, adjust `WORD_INTERVAL_MS` (milliseconds between words) and `ANSWER_SECONDS` (the countdown length, currently 10).
- **Answer checking**: matching is case/punctuation-insensitive, ignores leading articles ("the/a/an"), accepts an answer that contains (or is contained in) any accepted answer — so "New York" matches "New York State" and "Eliot" matches "T. S. Eliot" — and also accepts the bare last word of a multi-word answer. Tighten or loosen this in `checkAnswer`/`matchesOne` in `app.js`.

## Deploying on GitHub Pages

1. Push this folder's contents to a repo (root, or a `/docs` folder).
2. In the repo's **Settings → Pages**, set the source to that branch/folder.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

No build step, no dependencies beyond two Google Fonts loaded via `<link>` in `index.html`.
