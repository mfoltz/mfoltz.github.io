---
title: Wiki Editing 🤔
---

## How to create and edit files
The live hub now ships as a structured React + Vite app. Source material still lives in the `content/` directory as Markdown, but those files are treated as extraction input rather than direct page templates.

To add a new page:

1. Create a Markdown file under the appropriate folder in `content/`.
2. Add simple front matter at the top of the file, for example:

   ```yaml
   ---
   title: My Page Title
   weight: 10   # lower numbers appear first in navigation
   ---
   ```
3. Rebuild the generated data and app locally:

   ```bash
   npm run build
   ```

   For a lighter validation pass while editing source markdown, run:

   ```bash
   bash scripts/check_shortcode_syntax.sh content
   npm run generate:data
   ```

4. Commit your changes and start a pull request 😊

__If you see something that can be contributed, please don't let worry about format or correctness stop you,__ know there's a review process and everything can be undone. If you've never used GitHub before, this is a good chance to acclimate.


## Including Screenshots
You can just paste images while inside the GitHub markdown editor and it will upload them and create the markup. These images work on the deployed wiki. Please only use images cropped to the subject area (e.g. Windows: `alt+print screen` - capture window, `Win+Shift+s` - Snipping Tool). 

## Linking pages
When linking between source markdown pages, keep relref-style links:

```md
[link text]({{% relref "path/to/page.md" %}})
```

Avoid root-relative links like `[text](/path/)`; the extractor and legacy alias mapping both behave better when source links stay relref-style.
