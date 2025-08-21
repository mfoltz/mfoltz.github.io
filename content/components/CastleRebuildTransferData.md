---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CastleRebuildTransferData
{
	static CastleRebuildTransferData()
	{
		Il2CppClassPointerStore<CastleRebuildTransferData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding.Rebuilding", "CastleRebuildTransferData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildTransferData>.NativeClassPtr);
		CastleRebuildTransferData.NativeFieldInfoPtr_StartTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildTransferData>.NativeClassPtr, "StartTime");
		CastleRebuildTransferData.NativeFieldInfoPtr_EndTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildTransferData>.NativeClassPtr, "EndTime");
		CastleRebuildTransferData.NativeFieldInfoPtr_SourceCastleHeart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildTransferData>.NativeClassPtr, "SourceCastleHeart");
		CastleRebuildTransferData.NativeFieldInfoPtr_TargetCastleHeart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildTransferData>.NativeClassPtr, "TargetCastleHeart");
		CastleRebuildTransferData.NativeFieldInfoPtr_TargetContainer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildTransferData>.NativeClassPtr, "TargetContainer");
		CastleRebuildTransferData.NativeFieldInfoPtr_CurrentSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildTransferData>.NativeClassPtr, "CurrentSequence");
		CastleRebuildTransferData.NativeFieldInfoPtr_SourceTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildTransferData>.NativeClassPtr, "SourceTerritory");
		CastleRebuildTransferData.NativeFieldInfoPtr_TargetTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildTransferData>.NativeClassPtr, "TargetTerritory");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildTransferData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StartTime;
	private static readonly IntPtr NativeFieldInfoPtr_EndTime;
	private static readonly IntPtr NativeFieldInfoPtr_SourceCastleHeart;
	private static readonly IntPtr NativeFieldInfoPtr_TargetCastleHeart;
	private static readonly IntPtr NativeFieldInfoPtr_TargetContainer;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentSequence;
	private static readonly IntPtr NativeFieldInfoPtr_SourceTerritory;
	private static readonly IntPtr NativeFieldInfoPtr_TargetTerritory;

	public double StartTime;

	public double EndTime;

	public Entity SourceCastleHeart;

	public Entity TargetCastleHeart;

	public Entity TargetContainer;

	public Entity CurrentSequence;

	public MapZoneId SourceTerritory;

	public MapZoneId TargetTerritory;
}
```
