---
nav_exclude: true
search_exclude: true
---

# TileBounds

```csharp
public struct TileBounds
{
	static TileBounds()
	{
		Il2CppClassPointerStore<TileBounds>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TileBounds");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TileBounds>.NativeClassPtr);
		TileBounds.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TileBounds>.NativeClassPtr, "Value");
		TileBounds.NativeMethodInfoPtr_LocalToWorldBounds_Public_Static_BoundsMinMax_TilePosition_BoundsMinMax_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileBounds>.NativeClassPtr, 100665019);
		TileBounds.NativeMethodInfoPtr_LocalToWorldBounds_Public_Static_BoundsMinMax_int2_TileRotation_BoundsMinMax_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileBounds>.NativeClassPtr, 100665020);
		TileBounds.NativeMethodInfoPtr_WorldToLocalBounds_Public_Static_BoundsMinMax_TilePosition_BoundsMinMax_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileBounds>.NativeClassPtr, 100665021);
		TileBounds.NativeMethodInfoPtr_WorldToLocalBounds_Public_Static_BoundsMinMax_int2_TileRotation_BoundsMinMax_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileBounds>.NativeClassPtr, 100665022);
	}

	public unsafe static BoundsMinMax LocalToWorldBounds(TilePosition tilePosition, BoundsMinMax localBounds)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref tilePosition;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref localBounds;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileBounds.NativeMethodInfoPtr_LocalToWorldBounds_Public_Static_BoundsMinMax_TilePosition_BoundsMinMax_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static BoundsMinMax LocalToWorldBounds(int2 tile, TileRotation tileRotation, BoundsMinMax localBounds)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref tile;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref tileRotation;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref localBounds;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileBounds.NativeMethodInfoPtr_LocalToWorldBounds_Public_Static_BoundsMinMax_int2_TileRotation_BoundsMinMax_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static BoundsMinMax WorldToLocalBounds(TilePosition tilePosition, BoundsMinMax worldBounds)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref tilePosition;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref worldBounds;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileBounds.NativeMethodInfoPtr_WorldToLocalBounds_Public_Static_BoundsMinMax_TilePosition_BoundsMinMax_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static BoundsMinMax WorldToLocalBounds(int2 tile, TileRotation tileRotation, BoundsMinMax worldBounds)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref tile;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref tileRotation;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref worldBounds;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileBounds.NativeMethodInfoPtr_WorldToLocalBounds_Public_Static_BoundsMinMax_int2_TileRotation_BoundsMinMax_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TileBounds>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_LocalToWorldBounds_Public_Static_BoundsMinMax_TilePosition_BoundsMinMax_0;
	private static readonly IntPtr NativeMethodInfoPtr_LocalToWorldBounds_Public_Static_BoundsMinMax_int2_TileRotation_BoundsMinMax_0;
	private static readonly IntPtr NativeMethodInfoPtr_WorldToLocalBounds_Public_Static_BoundsMinMax_TilePosition_BoundsMinMax_0;
	private static readonly IntPtr NativeMethodInfoPtr_WorldToLocalBounds_Public_Static_BoundsMinMax_int2_TileRotation_BoundsMinMax_0;

	public BoundsMinMax Value;
}
```
