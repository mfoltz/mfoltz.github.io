---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TileModel
{
	static TileModel()
	{
		Il2CppClassPointerStore<TileModel>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Tiles", "TileModel");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TileModel>.NativeClassPtr);
		TileModel.NativeFieldInfoPtr_DisabledTileTypesInt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TileModel>.NativeClassPtr, "DisabledTileTypesInt");
		TileModel.NativeMethodInfoPtr_get_DisabledTileTypes_Public_get_TileType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileModel>.NativeClassPtr, 100670961);
		TileModel.NativeMethodInfoPtr_SetDisabledFlag_Public_Void_Entity_TileType_ModificationsRegistry_EntityCommandBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileModel>.NativeClassPtr, 100670962);
		TileModel.NativeMethodInfoPtr_AddDisabledFlag_Public_Void_Entity_TileType_Entity_ModificationsRegistry_EntityCommandBuffer_byref_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileModel>.NativeClassPtr, 100670963);
		TileModel.NativeMethodInfoPtr_RemoveDisabledFlag_Public_Void_Entity_ModificationId_ModificationsRegistry_EntityCommandBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileModel>.NativeClassPtr, 100670964);
	}
	public unsafe TileType DisabledTileTypes
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileModel.NativeMethodInfoPtr_get_DisabledTileTypes_Public_get_TileType_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}

	public unsafe void SetDisabledFlag(Entity entity, TileType tileType, ModificationsRegistry modificationsRegistry, EntityCommandBuffer commandBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entity;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref tileType;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationsRegistry;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref commandBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileModel.NativeMethodInfoPtr_SetDisabledFlag_Public_Void_Entity_TileType_ModificationsRegistry_EntityCommandBuffer_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void AddDisabledFlag(Entity entity, TileType tileType, Entity source, ModificationsRegistry modificationsRegistry, EntityCommandBuffer commandBuffer, out ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entity;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref tileType;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref source;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationsRegistry;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref commandBuffer;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modificationId;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileModel.NativeMethodInfoPtr_AddDisabledFlag_Public_Void_Entity_TileType_Entity_ModificationsRegistry_EntityCommandBuffer_byref_ModificationId_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void RemoveDisabledFlag(Entity entity, ModificationId modificationId, ModificationsRegistry modificationsRegistry, EntityCommandBuffer commandBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entity;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationsRegistry;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref commandBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileModel.NativeMethodInfoPtr_RemoveDisabledFlag_Public_Void_Entity_ModificationId_ModificationsRegistry_EntityCommandBuffer_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TileModel>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DisabledTileTypesInt;
	private static readonly IntPtr NativeMethodInfoPtr_get_DisabledTileTypes_Public_get_TileType_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetDisabledFlag_Public_Void_Entity_TileType_ModificationsRegistry_EntityCommandBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddDisabledFlag_Public_Void_Entity_TileType_Entity_ModificationsRegistry_EntityCommandBuffer_byref_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveDisabledFlag_Public_Void_Entity_ModificationId_ModificationsRegistry_EntityCommandBuffer_0;

	public ModifiableInt DisabledTileTypesInt;
}
```
