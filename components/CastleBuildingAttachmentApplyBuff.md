---
nav_exclude: true
search_exclude: true
---

# CastleBuildingAttachmentApplyBuff

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public CastleBuildingAttachmentBuffApplyOn ApplyOn;
	[FieldOffset(4)]
	public PrefabGUID BuffPrefab;
	[FieldOffset(8)]
	public PlacementTypeData WhenMatchesTypes;
}
