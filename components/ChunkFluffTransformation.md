---
nav_exclude: true
search_exclude: false
---

# ChunkFluffTransformation

```csharp
public struct ChunkFluffTransformation
{
	static ChunkFluffTransformation()
	{
		Il2CppClassPointerStore<ChunkFluffTransformation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "ChunkFluffTransformation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkFluffTransformation>.NativeClassPtr);
		ChunkFluffTransformation.NativeFieldInfoPtr_ChunkTransformationMatrix = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkFluffTransformation>.NativeClassPtr, "ChunkTransformationMatrix");
		ChunkFluffTransformation.NativeFieldInfoPtr_ChunkSpaceBoundsMin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkFluffTransformation>.NativeClassPtr, "ChunkSpaceBoundsMin");
		ChunkFluffTransformation.NativeFieldInfoPtr_ChunkSpaceBoundsMax = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkFluffTransformation>.NativeClassPtr, "ChunkSpaceBoundsMax");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkFluffTransformation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ChunkTransformationMatrix;
	private static readonly IntPtr NativeFieldInfoPtr_ChunkSpaceBoundsMin;
	private static readonly IntPtr NativeFieldInfoPtr_ChunkSpaceBoundsMax;

	public float4x4 ChunkTransformationMatrix;

	public float3 ChunkSpaceBoundsMin;

	public float3 ChunkSpaceBoundsMax;
}
```
