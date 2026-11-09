# Sigma English

The source code and data of the Sigma English learning site (formerly Lantern English), exported on 9/11/2026.

- **Live version:** https://claude.ai/artifact/YUua91BCVXr6LY4WMG2XJk
- **Version exported:** `1794209448-8df4`
- **sha256 of index.html:** `f1745eb624f50cbf5874c57fc14f1551a0c4ba3445fc3e558a0ffab3b60d4b59`

## Contents

```
index.html                         The whole app: HTML + CSS + JS in a single file (no build step). This is the source of truth.
assets/_blob/<id>.jpg              Pictures uploaded through Parent → Pictures (5 files)
database/db-export.json            Every database document in one file (data + updatedAt + version)
database/app/settings.json         Settings: parent PIN, workload, links…
database/app/media.json            Shared data: flashcard pictures, glosses, readings, answer fixes, imported practice, CAT4 changes
database/app/tasks.json            Tasks assigned by a parent
database/learners/<id>.json        Each student's progress (ben, shin, c1, c2)
database/students/<id>.json        Student list (name, last opened)
database/data/users/<uid>/diary-*.json   Private diary (one user per folder)
tools/cat4/                        The original CAT4 word lists (C/D) and the script that builds the data
tools/*.module.js                  Copy of the "Parent → Answers / Import" module (already inside index.html)
```

## Running locally

Open `index.html` directly in a browser, or serve it statically (for example `npx serve .`).
Outside claude.ai, `window.claude` does not exist, so the app automatically runs in **local mode**:

- Data is stored in the browser's `localStorage`. The keys are `lantern-english-v*` (main data), `lantern-student` (the current student) and `lantern-diary-*`.
- Uploading pictures, cloud sync between devices and AI features (diary replies, writing marking) are switched off.

## Architecture

- A single-page app with no framework, using hash routing (`#vocabulary-v-cat4`, `#parent-answers`…). The `render()` function rebuilds `#main` from the state.
- The `Store` object (search for `const Store=`) is the storage layer. It **always writes to localStorage**. When it is running on claude.ai it also syncs to the cloud through `window.claude.use(...)`:

| Capability | Used for | What to replace it with when you deploy yourself |
|---|---|---|
| `db` | Firestore-like documents: `doc(path).get/set/onSnapshot`, `collection(...)` | Firebase Firestore (compatible API), Supabase, or your own REST backend |
| `assets` | `upload(file)` returns `{url}` | S3 / Cloudinary / Firebase Storage |
| `sample` | Calls an AI model (diary replies, writing marking, reading worksheets) | Anthropic API called **from your own server** (never put an API key in the frontend) |
| `user` | Identifies the user (owner / viewer) | Your own sign-in system |
| `downloads` | Downloading files | A normal `<a download>` |

- Document paths used: `app/settings`, `app/media`, `app/tasks`, `learners/<studentId>`, `students/<studentId>`, `data/users/<uid>/diary-<studentId>`.
- When the data loads, each document goes through a `mig*` function (`migMedia`, `migRec`…) to fill in missing fields. If you add a new field to `app/media`, update `migMedia` too, otherwise the field is dropped.

### Main areas of the code

| Area | How to find it |
|---|---|
| Built-in lesson content | `BOARDS`, `GRAMMAR`, `TENSES`, `READINGS`, `RD_PAPERS`, `MC_TESTS`, `CLASS_TESTS` |
| Navigation menu | `NAV`, `NAV_SECS`, `navHtml` |
| Quiz engine | `startQuiz`, `viewQuiz`, `check` (item kinds: `mc`, `gap`, `order`, `pairs`) |
| CAT4 (Vocabulary → CAT4) | `C4BASE`, `c4Plan`, `c4View`, `pCat4`. The plan runs from 9/11 to 20/12/2026 (`C4_START`, `C4_END`) |
| Parent → Answers | `fxWalk`, `fixSync`, `pAnswers`. Fixes are stored in `app/media.fix` keyed by `ROOT/path` and applied in place on every `render()` |
| Parent → Import | `impParse`, `pImport`, `impBlock`, `impStart`. Imported sets are stored in `app/media.imports` |
| Parent → CAT4 | Changes to built-in words: `app/media.cat4.edits`. Imported words: `app/media.cat4.extra` |

## Importing the data into a new backend

`database/db-export.json` has the form `{documents: {"<path>": {data, updatedAt, version}}}`. Write each `data` object to the document at that `path`. The picture URLs in `app/media.images` point to `/_blob/<id>`. Upload the files in `assets/_blob/` and replace those URLs with the new ones.

## Notes

- **Parent PIN:** `1111`, stored in `app/settings.pin` with no encryption. Change it and move the parent check to the server before going public.
- **Pictures in `app/media.images`:** the 5 pictures attached to the flashcards in the "Collocations" lesson (gentle/bleak/familiar landscape, surrounding countryside, panoramic view) are **phone screenshots of a TikTok page**, not pictures that illustrate the words. They were probably uploaded by mistake. Check them and replace them.
- **What is not in the export:**
  - Progress that was only saved on a device in local mode (localStorage), with no cloud sync.
  - Diaries of other users (`data/users/<other uid>`). The database only lets each user read their own folder.
- **Not in the data yet:** at export time nobody had fixed answers, imported practice or edited CAT4 words, so `app/media` does not have the `fix`, `imports` or `cat4` fields yet. The app creates them the first time they are saved.
