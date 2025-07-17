---
nav_exclude: true
search_exclude: true
---

# SwapArtWhileRaidedRoot

```csharp
[StructLayout(2)]
public struct SwapArtWhileRaidedRoot
{
	static SwapArtWhileRaidedRoot()
	{
		Il2CppClassPointerStore<SwapArtWhileRaidedRoot>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "SwapArtWhileRaidedRoot");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SwapArtWhileRaidedRoot>.NativeClassPtr);
		SwapArtWhileRaidedRoot.NativeFieldInfoPtr_IsRaided = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SwapArtWhileRaidedRoot>.NativeClassPtr, "IsRaided");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SwapArtWhileRaidedRoot>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IsRaided;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool IsRaided;
}
