---
nav_exclude: true
search_exclude: false
---

# ChunkBaseGameplayHeights

```csharp
public struct ChunkBaseGameplayHeights
{
	static ChunkBaseGameplayHeights()
	{
		Il2CppClassPointerStore<ChunkBaseGameplayHeights>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "ChunkBaseGameplayHeights");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkBaseGameplayHeights>.NativeClassPtr);
		ChunkBaseGameplayHeights.NativeFieldInfoPtr_CompressedHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkBaseGameplayHeights>.NativeClassPtr, "CompressedHeight");
		ChunkBaseGameplayHeights.NativeMethodInfoPtr_get_Height_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChunkBaseGameplayHeights>.NativeClassPtr, 100668700);
		ChunkBaseGameplayHeights.NativeMethodInfoPtr__ctor_Public_Void_UInt16_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChunkBaseGameplayHeights>.NativeClassPtr, 100668701);
	}
	public unsafe float Height
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChunkBaseGameplayHeights.NativeMethodInfoPtr_get_Height_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}

	public unsafe ChunkBaseGameplayHeights(ushort value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChunkBaseGameplayHeights.NativeMethodInfoPtr__ctor_Public_Void_UInt16_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkBaseGameplayHeights>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CompressedHeight;
	private static readonly IntPtr NativeMethodInfoPtr_get_Height_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_UInt16_0;

	public ushort CompressedHeight;
}
```
