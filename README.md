# Fukushima Sanriku Tour 2026 GitHub Pages

This repository contains a GitHub Pages site for publishing the Fukushima Sanriku Tour 2026 itinerary, destination notes, and photo gallery.

## Structure

```text
docs/
  index.md                 # Top page
  guidelines.md            # Publication policy
  _config.yml              # Jekyll configuration
  _data/itinerary.yml      # Itinerary data
  _data/spots.yml          # Destination link data
  _layouts/default.html    # Shared layout
  _layouts/author.html     # Destination page layout
  assets/css/site.css      # Design
  assets/images/logo.png   # Web logo
  assets/images/materials/ # Gallery images for the top page
  authors/*.md             # Destination page body content
```

## Publish with GitHub Pages

1. Create a new repository on GitHub.
2. Upload the contents of this repository to the repository root.
3. Open `Settings` -> `Pages` in GitHub.
4. Set `Build and deployment` -> `Source` to `Deploy from a branch`.
5. Set `Branch` to `main`, set the folder to `/docs`, and save.
6. Open the GitHub Pages URL shown by GitHub.

## Publication URL and `baseurl`

If publishing as a User/Organization site named `username.github.io`, keep `baseurl` blank in `docs/_config.yml`. If publishing as a project site at `https://username.github.io/repository-name/`, set `baseurl: "/repository-name"`.

## Editing

### Edit destination links on the top page

Edit `docs/_data/spots.yml`. Destination names, author names, focus points, and page URLs are managed there.

### Edit the itinerary

Edit `docs/_data/itinerary.yml`. Include only meeting points, dismissal points, destinations, and other information that can be published externally.

### Edit destination pages

Edit the Markdown files in `docs/authors/`. Public URLs are set to `/notes/.../` through each file's `permalink` in YAML front matter.

### Add a new page

1. Copy `docs/_templates/author.md`.
2. Rename the file using an alphanumeric slug.
3. Edit `title`, `spot`, `author`, and `permalink` in the YAML front matter.
4. To show the page on the top page, register it in `docs/_data/spots.yml`.

## Pre-publication Checklist

- Check for personal information, identifiable faces, vehicle license plates, and unpublished materials.
- Strip image metadata before publishing, especially GPS, device, author, and editing-history metadata.
- Publish web-ready image formats only. Keep source/vector/intermediate files such as `.ai` and `.emf` out of the generated site and public commits unless their release is intentional.
- Confirm citation conditions for images, figures, and text.
- Clearly list references and sources.
- Do not publish non-public information heard from local stakeholders as-is.
- Confirm that links from the top page to each destination page open correctly.
- Remember that a public GitHub repository exposes source files as well as the generated site. Do not commit drafts, raw interview notes, credentials, private source files, or other non-public materials.
- Run a final secret scan before publishing, for example `rg -n "(password|token|secret|api[_-]?key|private[_-]?key|BEGIN .*PRIVATE KEY)" . -S`.
