---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CastleBuildingAttachmentApplyBuff
{
	static CastleBuildingAttachmentApplyBuff()
	{
		Il2CppClassPointerStore<CastleBuildingAttachmentApplyBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleBuildingAttachmentApplyBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleBuildingAttachmentApplyBuff>.NativeClassPtr);
		CastleBuildingAttachmentApplyBuff.NativeFieldInfoPtr_ApplyOn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachmentApplyBuff>.NativeClassPtr, "ApplyOn");
		CastleBuildingAttachmentApplyBuff.NativeFieldInfoPtr_BuffPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachmentApplyBuff>.NativeClassPtr, "BuffPrefab");
		CastleBuildingAttachmentApplyBuff.NativeFieldInfoPtr_WhenMatchesTypes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachmentApplyBuff>.NativeClassPtr, "WhenMatchesTypes");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleBuildingAttachmentApplyBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ApplyOn;
	private static readonly IntPtr NativeFieldInfoPtr_BuffPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_WhenMatchesTypes;

	public CastleBuildingAttachmentBuffApplyOn ApplyOn;

	public PrefabGUID BuffPrefab;

	public PlacementTypeData WhenMatchesTypes;
}
```
