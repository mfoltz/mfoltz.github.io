# Contributing

Thank you for helping improve the V Rising Modding Wiki!

Please review [AGENTS.md](AGENTS.md) for commit limits, binary file restrictions, and required checks before submitting changes.

## Style guide

- Use Hugo's `relref` shortcode for internal links:
  
  ```md
  [link text]({{< relref "path/to/page.md" >}})
  ```
- During reviews, search for root-relative links like `[text](/path/)` and replace them with `relref`:
  
  ```bash
  rg '\]\(/'
  ```
