---
nav_exclude: true
search_exclude: false
---

# ChunkBaseTerrainHeights

```csharp
public struct ChunkBaseTerrainHeights
{
	static ChunkBaseTerrainHeights()
	{
		Il2CppClassPointerStore<ChunkBaseTerrainHeights>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "ChunkBaseTerrainHeights");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkBaseTerrainHeights>.NativeClassPtr);
		ChunkBaseTerrainHeights.NativeFieldInfoPtr_CompressedHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkBaseTerrainHeights>.NativeClassPtr, "CompressedHeight");
		ChunkBaseTerrainHeights.NativeMethodInfoPtr_get_Height_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChunkBaseTerrainHeights>.NativeClassPtr, 100668696);
	}
	public unsafe float Height
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChunkBaseTerrainHeights.NativeMethodInfoPtr_get_Height_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkBaseTerrainHeights>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CompressedHeight;
	private static readonly IntPtr NativeMethodInfoPtr_get_Height_Public_get_Single_0;

	public ushort CompressedHeight;
}
```
