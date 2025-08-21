---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CastleRebuildTransferInitializeEvent
{
	static CastleRebuildTransferInitializeEvent()
	{
		Il2CppClassPointerStore<CastleRebuildTransferInitializeEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding.Rebuilding", "CastleRebuildTransferInitializeEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildTransferInitializeEvent>.NativeClassPtr);
		CastleRebuildTransferInitializeEvent.NativeFieldInfoPtr_SourceTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildTransferInitializeEvent>.NativeClassPtr, "SourceTerritory");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildTransferInitializeEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SourceTerritory;

	public MapZoneId SourceTerritory;
}
```
