---
title: Wiki Editing 🤔
---

## How to create and edit files
This wiki is generated with [Hugo \u2265 0.126.3](https://gohugo.io/installation/) and all content lives in the `content/` directory as Markdown files. The development scripts download Hugo automatically. Every page on the site has an **Edit this page on GitHub** link at the bottom.

To add a new page:

1. Create a Markdown file under the appropriate folder in `content/`.
2. Add [front matter](https://gohugo.io/content-management/front-matter/) at the top of the file, for example:

   ```yaml
   ---
   title: My Page Title
   weight: 10   # lower numbers appear first in navigation
   ---
   ```
3. Run `python scripts/build_prefab_files.py` and then `hugo server` to
   preview your changes locally.
4. Commit your changes and start a pull request 😊

__If you see something that can be contributed, please don't let worry about format or correctness stop you,__ know there's a review process and everything can be undone. If you've never used GitHub before, this is a good chance to acclimate.


## Including Screenshots
You can just paste images while inside the GitHub markdown editor and it will upload them and create the markup. These images work on the deployed wiki. Please only use images cropped to the subject area (e.g. Windows: `alt+print screen` - capture window, `Win+Shift+s` - Snipping Tool). 

## Linking pages
Use Hugo's `relref` shortcode to link between pages:

```md
[link text]({{% relref "dev/_index.md" %}})
```

Avoid root-relative links like `[text](/path/)`; `relref` keeps links working when pages move.
