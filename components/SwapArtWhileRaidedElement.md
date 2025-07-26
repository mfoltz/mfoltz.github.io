---
nav_exclude: true
search_exclude: true
---

# SwapArtWhileRaidedElement

```csharp
public struct SwapArtWhileRaidedElement
{
	static SwapArtWhileRaidedElement()
	{
		Il2CppClassPointerStore<SwapArtWhileRaidedElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "SwapArtWhileRaidedElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SwapArtWhileRaidedElement>.NativeClassPtr);
		SwapArtWhileRaidedElement.NativeFieldInfoPtr_ArtEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SwapArtWhileRaidedElement>.NativeClassPtr, "ArtEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SwapArtWhileRaidedElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ArtEntity;

	public Entity ArtEntity;
}
```

## Client Systems

- [SwapArtWhileRaidedSystem](/systems/client/SwapArtWhileRaidedSystem)
