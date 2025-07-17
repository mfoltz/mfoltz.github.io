---
nav_exclude: true
search_exclude: true
---

# SwapArtWhileRaidedNew

```csharp
[StructLayout(2)]
public struct SwapArtWhileRaidedNew
{
	static SwapArtWhileRaidedNew()
	{
		Il2CppClassPointerStore<SwapArtWhileRaidedNew>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "SwapArtWhileRaidedNew");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SwapArtWhileRaidedNew>.NativeClassPtr);
		SwapArtWhileRaidedNew.NativeFieldInfoPtr_OriginalIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SwapArtWhileRaidedNew>.NativeClassPtr, "OriginalIndex");
		SwapArtWhileRaidedNew.NativeFieldInfoPtr_OverrideIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SwapArtWhileRaidedNew>.NativeClassPtr, "OverrideIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SwapArtWhileRaidedNew>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OriginalIndex;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideIndex;
	[FieldOffset(0)]
	public int OriginalIndex;
	[FieldOffset(4)]
	public int OverrideIndex;
}
