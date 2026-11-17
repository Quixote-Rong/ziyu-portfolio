# Ziyu Wang — portfolio for GitHub Pages

A standalone, responsive, three-page static portfolio adapted from Ziyu Wang's supplied Cargo page source. No paid framework or build system required.

## Included
- `index.html`: Home; original patchwork name, pink outline stars, hover interaction, star-trail cursor, email, and page links.
- `about/index.html`: About, education card, and **original supplied transparent collage PNG** (`assets/about-collage.png`).
- `works/index.html`: Six project cards, original pastel styling, a three-film video carousel, and responsive two-column/one-column layouts.
- `style.css`, `about.css`, `works.css`: page design.
- `script.js`, `works.js`: interactive effects and video switching.
- CV: the public Google Drive link the site owner supplied.

## IMPORTANT: Original Cargo-linked media remain external

The six Works thumbnails, the Film Reel video files, three project PDF links, and a Forest Story image link still point to `https://freight.cargo.site/...` as supplied. **They are not packed in the ZIP** and may stop working if Cargo removes, changes, or restricts these files. The Works card still shows a pastel fallback if a remote thumbnail fails, but the exact image does not load offline. Replace these references with local assets before relying on the site long-term; for example:

1. Save your original image/video/PDF exports on your computer.
2. Put them in `assets/` (or `assets/videos/`, `assets/pdfs/`).
3. In `works.css`, replace the remote thumbnail `url(...)` references with `url('assets/...')` relative to the root CSS file.
4. In `works.js`, replace each `src` with `../assets/...` **when viewed from the Works page**.
5. In `works/index.html`, replace the external PDF/image hrefs and the initial video `source src` with `../assets/...` paths.

`Sketch Studies` is labelled **PDF coming soon** rather than linking to an empty `#` placeholder. No missing PDF has been invented.

## Check locally

Extract this ZIP and open `index.html`. Follow the `WORKS` and `ABOUT` links. Because media is currently hosted on Cargo, internet access is necessary for images, video and PDF links. Local HTML, CSS and JavaScript work offline.

## Publish to GitHub Pages (free public repository)

1. Create a public repository, e.g. `ziyu-portfolio`.
2. Upload **the files and folders from inside the extracted ZIP**, not the ZIP file alone, so `index.html` lives at repository root.
3. On GitHub, open `Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save`.
4. Visit `https://YOUR-USERNAME.github.io/ziyu-portfolio/` after GitHub finishes deploying.

The page navigation uses **relative `.html` paths**, so it works under either a project repository (`/ziyu-portfolio/`) or a user repository (`/`).

## Notes

The provided images are the site owner's content. Check permission to publish all portfolio works publicly. `works.js` intentionally fixes the original missing `filmTitle` element, keeps video, title, text and counter in sync, and removes the inline event handlers. JavaScript and CSS require no paid hosting.
