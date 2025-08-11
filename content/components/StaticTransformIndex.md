---
nav_exclude: true
search_exclude: true
---

# StaticTransformIndex

```csharp
public struct StaticTransformIndex
{
	static StaticTransformIndex()
	{
		Il2CppClassPointerStore<StaticTransformIndex>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StaticTransformIndex");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StaticTransformIndex>.NativeClassPtr);
		StaticTransformIndex.NativeFieldInfoPtr_ChunkCoordinate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticTransformIndex>.NativeClassPtr, "ChunkCoordinate");
		StaticTransformIndex.NativeFieldInfoPtr_TransformIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticTransformIndex>.NativeClassPtr, "TransformIndex");
		StaticTransformIndex.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_StaticTransformIndex_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StaticTransformIndex>.NativeClassPtr, 100668050);
		StaticTransformIndex.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StaticTransformIndex>.NativeClassPtr, 100668051);
	}

	public unsafe bool Equals(StaticTransformIndex other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StaticTransformIndex.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_StaticTransformIndex_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StaticTransformIndex.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StaticTransformIndex>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ChunkCoordinate;
	private static readonly IntPtr NativeFieldInfoPtr_TransformIndex;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_StaticTransformIndex_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;

	public TerrainChunk ChunkCoordinate;

	public short TransformIndex;
}
```

## Server Systems

- [RandomizedSpawnChainUpdateSystem](/systems/server/RandomizedSpawnChainUpdateSystem)
- [TagDraculaSpawnChainsSystem](/systems/server/TagDraculaSpawnChainsSystem)
