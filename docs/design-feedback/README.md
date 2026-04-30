# Design Feedback Packets

Design feedback packets are repo-local handoff notes for human visual review.
They sit between a visual-review report and an implementation pass: capture what
felt right or wrong, then let a later thread implement only the marked feedback.

## Workflow

1. Run or fetch a visual review report.
2. Generate a packet:

   ```bash
   npm run visual:feedback
   ```

   By default this reads `.codex-tmp/visual-review/latest/report.json`. To point
   at a downloaded artifact or CI report, pass the report path:

   ```bash
   npm run visual:feedback -- path/to/report.json
   ```

   Set `VISUAL_REVIEW_ARTIFACT_URL` when the screenshots live in a GitHub
   Actions artifact, and `VISUAL_REVIEW_COMMAND` when the report came from a
   non-default visual command.

3. Fill in only the captures where you have design feedback.
4. Future implementation threads start from the newest open packet, implement
   marked items only, then run visual review.
5. After accepted visual changes, write a checkpoint under `docs/checkpoints/`.

## Rules

- Do not add current or diff screenshots to this folder.
- Reference capture IDs, routes, baseline filenames, and visual artifacts instead.
- Keep feedback focused on player-first review first and developer-sanity review second.
- Keep original human notes even when an item is later accepted, revised, or deferred.
- Treat packets as implementation inputs, not accepted-change checkpoints.

## Packet Status

Use one of these values per feedback item:

- `open`
- `accepted`
- `revised`
- `deferred`
