# Castle Blueprint sprite ownership scout

Date: September 30, 2026. Read-only scout in the approved Blueprint materials and
existing-artwork pass. Source root: `C:\Users\mitch\Local\Assets`.

## Result and stop gate

**Held at sprite identity.** The retained dump contains useful artwork, but the
complete prefab → managed Blueprint icon → exact sprite → PNG chain has not been
demonstrated for castle structures. No castle sprites or localized text are promoted.
No extraction or game/client capture was started.

The Sprite folder contains 255 canonical filenames matching
`Stunlock_Icon_(Structure|Building|Castle)_` and Wall/Floor/Door/Window/Stair, excluding
numbered duplicate suffixes. This is an inventory count, not Blueprint coverage.
The PNG directory has no sprite identity metadata. Filenames, build-group images,
and numbered duplicates cannot establish ownership by themselves.

## Demonstrated managed ownership

`MonoBehaviour/BlueprintDataComponent.json` and
`MonoBehaviour/PrefabGuidComponent #483258.json` share the exact GameObject reference:

```json
{"m_FileID": 0, "m_PathID": 2181103060728668321}
```

The latter records `_GuidHash: -218354895`, equal to the current catalog identity
for `TM_UnitStation_NetherGate`. The former records
`BlueprintIcon.AssetGuid: c3d51ac977208434d9e84129658ff7cd`.
Keep Unity path IDs as 64-bit integers; JavaScript Number would lose precision here.

| Retained file | SHA256 |
| --- | --- |
| BlueprintDataComponent.json | `4e3757dbd571f441acc84e4579f8ea0511df471a02189181e6113a4c7e2eb410` |
| PrefabGuidComponent #483258.json | `299527603df4c5eb6e2991f98e578606388c4965b3e69a8cfd08ff7513b29192` |

This proves the Nether Gate's authoring owner and icon reference. It does not
resolve that icon GUID to a PNG or establish wall/floor/door ownership.

## Retained-source leads inspected

- Targeted MonoBehaviour filename searches found the managed Blueprint authoring
  record, but no SpriteAsset/asset-GUID lookup or build-menu composition catalog.
- TextAsset searches for the known icon GUID, BlueprintIcon, and a representative
  castle wall sprite name found no identity bridge. `StunlockList.txt` is credits.
- The preceding read-only assessment found no resolved Blueprint/BuildMenu capture
  in the inspected sibling extractor run and persistent-data roots. This is scoped
  absence evidence, not a claim about every retained file on the machine.

The sibling `VRising.DataExtractor` has a plausible capture contract:
`MappedManagedBlueprintData` includes a Sprite icon; `GenericMapper` maps the
managed Blueprint fields; `Il2CppSerializer` serializes Sprite values by exact name;
`BlueprintModelBuilder` preserves prefab identity, localized name/description,
icon, and requirement rows. Those code paths are a source lead, not a demonstrated
capture or coverage guarantee.

## Condition for a later pass

Locate a retained resolved Blueprint capture or asset-GUID/sprite identity catalog.
Verify exact prefab/GUID ownership and exact asset identity before materializing
any PNG or promoting localized text. Reject ambiguous owners, mismatched GUIDs,
duplicate-suffix guesses, and category-art inheritance. If the bridge is absent,
stop; new client capture/extraction needs its own bounded instruction.

The 13 existing curated workstation images reused in this pass retain their
already-approved map identities and files. Their reuse does not prove this broader
castle sprite contract. See the [active roadmap](source-backed-next-thread-roadmap.md).
