# Dual-Lane Review Loop Playbook

This playbook codifies the repeatable Dual-Lane Review Loop for visual review work:
implement a focused pass, review the player-first report first, accept or revise, then record the outcome before moving on.

## Purpose

- Keep the player-first pack as the primary acceptance surface for detail-page quality.
- Use the developer-sanity pack as the secondary guardrail for shell, provenance, and reference drift.
- Make each accepted pass leave behind both refreshed baselines and a short checkpoint note under `docs/checkpoints/`.
- Keep render checks milestone-gated so compare reports stay useful instead of becoming routine noise.

## Repeatable Loop

1. Pick one narrow target for the pass.
2. Implement the change with the player-first detail-page standard in mind.
3. For polish-heavy passes, write a short Polish Intent Card before reviewing screenshots.
4. Run `npm run verify`.
5. Run `npm run visual:compare`.
   The latest report is written to `.codex-tmp/visual-review/latest/report.html`.
6. Review the generated report, starting with the player-first pack.
7. For human taste or design notes that need to survive across threads, run `npm run visual:feedback` and fill in only the relevant items under `docs/design-feedback/`.
8. If the diff is accepted, run `npm run visual:baseline`.
9. Write a checkpoint note after the review and baseline refresh are complete.

## Milestone-Gated Snapshot Rule

- Run `npm run visual:compare` at milestone or checkpoint boundaries, not after every data or copy cleanup.
- Use compare runs when the pass is expected to move tracked routes, shared shell framing, or top-fold presentation in a meaningful way.
- Skip compare runs for invisible data cleanups, provenance-only fixes, control-artifact selection changes, and other maintenance that should not visibly move the tracked routes.
- Keep `npm run verify` as the real pre-push or pre-merge gate even when no compare run is warranted.

## Review Order

- Review the player-first pack first for readability, intentional first screens, and empty-section suppression.
- Review the developer-sanity pack second for shell/header drift, reference-detail regressions, and provenance/source continuity.
- If a pass changes home, browse, or search only because shared player-facing copy shifted, treat that as acceptable spillover only when it is explicitly called out in the checkpoint note.

## Acceptance Rubric

- The first screen should feel intentional and readable without needing the provenance block.
- At least one player-meaningful explanation, craft/use cue, or encounter cue should appear above the fold on each targeted detail route.
- Empty or low-signal sections should be hidden rather than preserved out of habit.
- Developer metadata must still exist, but it should read as secondary and lower on the page.
- The developer-sanity pack should stay stable unless the pass deliberately changes shared shell or reference behavior.

## Polish Intent Card

Use this overlay for typography, spacing, layout hierarchy, top-fold composition, shell framing, or other taste-heavy presentation refinements.

Write these fields before reviewing `npm run visual:compare`:

- `Target Feel`
- `Primary Surface`
- `Expected Movement`
- `Acceptable Spillover`
- `Red Flags`
- `Non-Goals`

Skip the card for invisible data cleanups, provenance-only fixes, control-artifact selection changes, and other non-visual maintenance.

## Baseline Rule

- `npm run visual:compare` is the review surface.
- `npm run visual:baseline` is only for accepted changes.
- Do not refresh baselines while the player-first pack still contains unreviewed or disputed diffs.
- Baselines are only refreshed when the diff matches the declared `Target Feel` and avoids the declared `Red Flags` for polish-heavy passes.

## Light-Edit Guardrail

- Small human edits are allowed to stay exploratory for a while; the visual loop should not punish normal copy or presentation iteration.
- Keep `npm run verify` as the real pre-push or pre-merge gate.
- Treat `npm run visual:compare` as a review snapshot, not a demand to refresh baselines immediately.
- Refresh baselines only when the visual change is intentionally accepted and worth preserving as the new standard.
- Use `docs/design-feedback/` packets for open human notes; use `docs/checkpoints/` only after accepted visual changes.

## Checkpoint Note Structure

Each checkpoint note should include these sections:

- `Goal`
- `What changed`
- `What visibly improved`
- `What still feels weak`
- `What the compare pack caught`
- `Next swing`

For polish-heavy passes, add these two short lines as well:

- `Why This Was Accepted`
- `What Was Intentionally Left Alone`

An optional `Throughline` section is allowed only if a real pattern has become stable enough to guide the next pass. If it still feels forced or premature, leave it out.

## Developer-Facing Follow-On

- Do not start the dedicated developer-facing pass until the current player-first pass is accepted, baselines are refreshed, and a checkpoint note exists.
- Reuse the same loop for the developer pass, but shift the rubric toward provenance clarity, shell consistency, and reference-detail usefulness.
