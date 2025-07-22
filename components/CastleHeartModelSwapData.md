---
nav_exclude: true
search_exclude: false
---

# CastleHeartModelSwapData

```csharp
public struct CastleHeartModelSwapData
{
	static CastleHeartModelSwapData()
	{
		Il2CppClassPointerStore<CastleHeartModelSwapData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleHeartModelSwapData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleHeartModelSwapData>.NativeClassPtr);
		CastleHeartModelSwapData.NativeFieldInfoPtr_PreviousVisualHeartLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartModelSwapData>.NativeClassPtr, "PreviousVisualHeartLevel");
		CastleHeartModelSwapData.NativeFieldInfoPtr_PreviousFuelLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartModelSwapData>.NativeClassPtr, "PreviousFuelLevel");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleHeartModelSwapData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PreviousVisualHeartLevel;
	private static readonly IntPtr NativeFieldInfoPtr_PreviousFuelLevel;

	public byte PreviousVisualHeartLevel;

	public int PreviousFuelLevel;
}
```

## Client Systems

- [UpdateCastleHeartModelSystem](/systems/client/UpdateCastleHeartModelSystem)
