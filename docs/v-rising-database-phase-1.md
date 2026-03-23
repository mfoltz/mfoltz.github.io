# V Rising Mod Database Phase 1

## Good Enough Parity

- Keep the structured React/Vite/Pages architecture and generated JSON contracts intact.
- Treat the retiring database as the parity target for browse/detail expectations, not as a layout to clone.
- Promote player-facing database records first and keep technical prefab/source context immediately available.
- Make the shell read as `V Rising Mod Database`, with `Database` as the primary navigation layer and `Reference` as the secondary technical layer.

## Current Coverage

| Area | Phase 1 state |
| --- | --- |
| Naming | User-facing branding now reads `V Rising Mod Database` in the app shell, home page, metadata, and repo docs. |
| Browse | All existing DB sections remain available. Abilities now default to a player spell catalog view with school/tier filtering and an opt-in full technical record view. |
| Detail | Ability detail pages lead with icon, title, summary, key facts, spell jewels, and spawned prefabs before the technical source block. |
| Theme | Shared tokens now lean closer to the mod wiki: darker VitePress-style neutrals, Inter body copy, Cinzel brand treatment, and blood/brass/teal accents. |
| Icons | Curated ability icons are repo-owned under `public/icons/abilities/` and wired through `data/enrichment/ability-catalog.json`. |

## What The Retiring Database Still Does Better

- It exposes more fully specialized browse surfaces across adjacent DB sections, not just abilities.
- It still has richer itemized database affordances for high-volume browsing than the remaining generic sections in this repo.
- Its tooltip layer is more complete than the current static data pipeline can safely reproduce from the available dumps.

## Enrichment Inputs

- `data/enrichment/prefab-localization.json` is refreshed from `Bloodcraft/Resources/PrefabNames.cs` plus `Bloodcraft/Resources/Localization/English.json`.
- `data/enrichment/ability-catalog.json` snapshots the player spell catalog from the local prefab corpus and records school, tier, display name, and matched icon path.
- `data/enrichment/ability-icon-manifest.json` records which player spell prefabs have a committed icon and which still need a match.
- `public/icons/abilities/` contains the repo-owned curated PNG set used by the live app.

## Tooltip Status

- Localized display names are reliable from the Bloodcraft resources.
- Ability icon matching is reliable for the curated spell catalog, with a short explicit missing list in `data/enrichment/ability-icon-manifest.json`.
- Tooltip prose is still staged work. The current local dumps expose candidate `TooltipAbilityDataEntry` and related localization assets, but there is not yet a deterministic prefab-to-tooltip mapping clean enough to make `npm run verify` depend on it.
- Blood Fountain is the current proof point that the data exists locally: the retiring database tooltip text matches `Bloodcraft/Resources/Localization/English.json`, while `Bloodcraft/Resources/PrefabNames.cs` resolves a different localization GUID for the display name. That means tooltip text is available, but still needs a stable join layer.

## Known Missing Catalog Icons

- `AB_Blood_BloodRite_AbilityGroup`
- `AB_Illusion_WispDance_AbilityGroup`
- `AB_Storm_LightningTyphoon_AbilityGroup`
