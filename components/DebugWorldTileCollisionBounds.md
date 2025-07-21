---
nav_exclude: true
search_exclude: false
---

# DebugWorldTileCollisionBounds

```csharp
public struct DebugWorldTileCollisionBounds
{
	static DebugWorldTileCollisionBounds()
	{
		Il2CppClassPointerStore<DebugWorldTileCollisionBounds>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.CastleBuilding.Systems.dll", "ProjectM", "DebugWorldTileCollisionBounds");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DebugWorldTileCollisionBounds>.NativeClassPtr);
		DebugWorldTileCollisionBounds.NativeFieldInfoPtr_TileRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DebugWorldTileCollisionBounds>.NativeClassPtr, "TileRange");
		DebugWorldTileCollisionBounds.NativeMethodInfoPtr_get_TileRangeProperty_Public_Virtual_Final_New_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DebugWorldTileCollisionBounds>.NativeClassPtr, 100663418);
		DebugWorldTileCollisionBounds.NativeMethodInfoPtr_set_TileRangeProperty_Public_Virtual_Final_New_set_Void_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DebugWorldTileCollisionBounds>.NativeClassPtr, 100663419);
	}
	public unsafe int TileRangeProperty
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DebugWorldTileCollisionBounds.NativeMethodInfoPtr_get_TileRangeProperty_Public_Virtual_Final_New_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DebugWorldTileCollisionBounds.NativeMethodInfoPtr_set_TileRangeProperty_Public_Virtual_Final_New_set_Void_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DebugWorldTileCollisionBounds>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TileRange;
	private static readonly IntPtr NativeMethodInfoPtr_get_TileRangeProperty_Public_Virtual_Final_New_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_TileRangeProperty_Public_Virtual_Final_New_set_Void_Int32_0;

	public int TileRange;
}
```

## Client Systems

- [DebugWorldTileCollisionBoundsSystem](/systems/client/DebugWorldTileCollisionBoundsSystem)
