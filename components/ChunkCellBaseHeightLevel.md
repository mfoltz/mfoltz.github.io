---
nav_exclude: true
search_exclude: true
---

# ChunkCellBaseHeightLevel

```csharp
public struct ChunkCellBaseHeightLevel
{
	static ChunkCellBaseHeightLevel()
	{
		Il2CppClassPointerStore<ChunkCellBaseHeightLevel>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "ChunkCellBaseHeightLevel");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkCellBaseHeightLevel>.NativeClassPtr);
		ChunkCellBaseHeightLevel.NativeFieldInfoPtr_BaseHeightLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkCellBaseHeightLevel>.NativeClassPtr, "BaseHeightLevel");
		ChunkCellBaseHeightLevel.NativeFieldInfoPtr_MaxHeightLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkCellBaseHeightLevel>.NativeClassPtr, "MaxHeightLevel");
		ChunkCellBaseHeightLevel.NativeMethodInfoPtr_get_HeightLevelCount_Public_get_Byte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChunkCellBaseHeightLevel>.NativeClassPtr, 100668697);
	}
	public unsafe byte HeightLevelCount
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChunkCellBaseHeightLevel.NativeMethodInfoPtr_get_HeightLevelCount_Public_get_Byte_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkCellBaseHeightLevel>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BaseHeightLevel;
	private static readonly IntPtr NativeFieldInfoPtr_MaxHeightLevel;
	private static readonly IntPtr NativeMethodInfoPtr_get_HeightLevelCount_Public_get_Byte_0;

	public byte BaseHeightLevel;

	public byte MaxHeightLevel;
}
```
