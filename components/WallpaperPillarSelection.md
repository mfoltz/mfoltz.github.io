---
nav_exclude: true
search_exclude: false
---

# WallpaperPillarSelection

```csharp
public struct WallpaperPillarSelection
{
	static WallpaperPillarSelection()
	{
		Il2CppClassPointerStore<WallpaperPillarSelection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.UI", "WallpaperPillarSelection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WallpaperPillarSelection>.NativeClassPtr);
		WallpaperPillarSelection.NativeFieldInfoPtr_Block = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WallpaperPillarSelection>.NativeClassPtr, "Block");
		WallpaperPillarSelection.NativeFieldInfoPtr_Direction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WallpaperPillarSelection>.NativeClassPtr, "Direction");
		WallpaperPillarSelection.NativeMethodInfoPtr__ctor_Public_Void_CastlePillarBlock_InterCardinalDirection_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WallpaperPillarSelection>.NativeClassPtr, 100665740);
		WallpaperPillarSelection.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_WallpaperPillarSelection_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WallpaperPillarSelection>.NativeClassPtr, 100665741);
		WallpaperPillarSelection.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WallpaperPillarSelection>.NativeClassPtr, 100665742);
		WallpaperPillarSelection.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WallpaperPillarSelection>.NativeClassPtr, 100665743);
	}

	public unsafe WallpaperPillarSelection(CastlePillarBlock block, InterCardinalDirection direction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref block;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WallpaperPillarSelection.NativeMethodInfoPtr__ctor_Public_Void_CastlePillarBlock_InterCardinalDirection_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe bool Equals(WallpaperPillarSelection other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WallpaperPillarSelection.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_WallpaperPillarSelection_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WallpaperPillarSelection.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WallpaperPillarSelection.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WallpaperPillarSelection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Block;
	private static readonly IntPtr NativeFieldInfoPtr_Direction;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_CastlePillarBlock_InterCardinalDirection_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_WallpaperPillarSelection_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;

	public CastlePillarBlock Block;

	public InterCardinalDirection Direction;
}
```

## Client Systems

- [BuildMenuWallpaperOperationSystem_Destroy](/systems/client/BuildMenuWallpaperOperationSystem_Destroy)
