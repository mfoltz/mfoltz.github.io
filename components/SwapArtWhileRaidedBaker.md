---
nav_exclude: true
search_exclude: false
---

# SwapArtWhileRaidedBaker

```csharp
public struct SwapArtWhileRaidedBaker
{
	static SwapArtWhileRaidedBaker()
	{
		Il2CppClassPointerStore<SwapArtWhileRaidedBaker>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "SwapArtWhileRaidedBaker");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SwapArtWhileRaidedBaker>.NativeClassPtr);
		SwapArtWhileRaidedBaker.NativeFieldInfoPtr_OriginalEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SwapArtWhileRaidedBaker>.NativeClassPtr, "OriginalEntity");
		SwapArtWhileRaidedBaker.NativeFieldInfoPtr_OverrideEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SwapArtWhileRaidedBaker>.NativeClassPtr, "OverrideEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SwapArtWhileRaidedBaker>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OriginalEntity;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideEntity;

	public Entity OriginalEntity;

	public Entity OverrideEntity;
}
```
