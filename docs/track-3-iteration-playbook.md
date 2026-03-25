# Dual-Lane Review Loop Playbook

This playbook codifies the repeatable Dual-Lane Review Loop for visual review work:
implement a focused pass, review the player-first report first, accept or revise, then record the outcome before moving on.

## Purpose

- Keep the player-first pack as the primary acceptance surface for detail-page quality.
- Use the developer-sanity pack as the secondary guardrail for shell, provenance, and reference drift.
- Make each accepted pass leave behind both refreshed baselines and a short checkpoint note under `docs/checkpoints/`.

## Repeatable Loop

1. Pick one narrow target for the pass.
2. Implement the change with the player-first detail-page standard in mind.
3. Run `npm run verify`.
4. Run `npm run visual:compare`.
5. Review the generated report, starting with the player-first pack.
6. If the diff is accepted, run `npm run visual:baseline`.
7. Write a checkpoint note after the review and baseline refresh are complete.

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

## Baseline Rule

- `npm run visual:compare` is the review surface.
- `npm run visual:baseline` is only for accepted changes.
- Do not refresh baselines while the player-first pack still contains unreviewed or disputed diffs.

## Light-Edit Guardrail

- Small human edits are allowed to stay exploratory for a while; the visual loop should not punish normal copy or presentation iteration.
- Keep `npm run verify` as the real pre-push or pre-merge gate.
- Treat `npm run visual:compare` as a review snapshot, not a demand to refresh baselines immediately.
- Refresh baselines only when the visual change is intentionally accepted and worth preserving as the new standard.

## Checkpoint Note Structure

Each checkpoint note should include these sections:

- `Goal`
- `What changed`
- `What visibly improved`
- `What still feels weak`
- `What the compare pack caught`
- `Next swing`

An optional `Throughline` section is allowed only if a real pattern has become stable enough to guide the next pass. If it still feels forced or premature, leave it out.

## Developer-Facing Follow-On

- Do not start the dedicated developer-facing pass until the current player-first pass is accepted, baselines are refreshed, and a checkpoint note exists.
- Reuse the same loop for the developer pass, but shift the rubric toward provenance clarity, shell consistency, and reference-detail usefulness.
