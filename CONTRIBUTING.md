# Contributing

Thank you for helping improve the V Rising Modding Wiki!

Please review [AGENTS.md](AGENTS.md) for commit limits, binary file restrictions, and required checks before submitting changes.

## Style guide

- Treat `content/` as extractor input for the structured hub, not as the shipping site.
- Prefer editing the generator or React UI when the requested change affects the live app experience.
- When you are editing source markdown inside `content/`, keep relref-style internal links so extractor aliasing stays stable:
  
  ```md
  [link text]({{% relref "path/to/page.md" %}})
  ```
- During reviews, search for root-relative links like `[text](/path/)` and replace them with relref-style source links:
  
  ```bash
  rg '\]\(/'
  ```
