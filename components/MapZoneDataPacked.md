---
nav_exclude: true
search_exclude: true
---

# MapZoneDataPacked

```csharp
[StructLayout(2)]
public struct MapZoneDataPacked
{
	static MapZoneDataPacked()
	{
		Il2CppClassPointerStore<MapZoneDataPacked>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "MapZoneDataPacked");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MapZoneDataPacked>.NativeClassPtr);
		MapZoneDataPacked.NativeFieldInfoPtr_LengthBits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneDataPacked>.NativeClassPtr, "LengthBits");
		MapZoneDataPacked.NativeFieldInfoPtr_Bytes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneDataPacked>.NativeClassPtr, "Bytes");
		MapZoneDataPacked.NativeMethodInfoPtr_get_MaxPackSizeBytes_Public_Static_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MapZoneDataPacked>.NativeClassPtr, 100668643);
	}
	public unsafe static int MaxPackSizeBytes
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1109929, XrefRangeEnd = 1109936, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MapZoneDataPacked.NativeMethodInfoPtr_get_MaxPackSizeBytes_Public_Static_get_Int32_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MapZoneDataPacked>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LengthBits;
	private static readonly IntPtr NativeFieldInfoPtr_Bytes;
	private static readonly IntPtr NativeMethodInfoPtr_get_MaxPackSizeBytes_Public_Static_get_Int32_0;
	[FieldOffset(0)]
	public int LengthBits;
	[FieldOffset(8)]
	public FixedList4096Bytes<byte> Bytes;
}
