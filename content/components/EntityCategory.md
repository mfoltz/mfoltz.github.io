---
nav_exclude: true
search_exclude: true
---

```csharp
public struct EntityCategory
{
	static EntityCategory()
	{
		Il2CppClassPointerStore<EntityCategory>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EntityCategory");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr);
		EntityCategory.NativeFieldInfoPtr_MainCategoryInt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr, "MainCategoryInt");
		EntityCategory.NativeFieldInfoPtr_UnitCategoryInt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr, "UnitCategoryInt");
		EntityCategory.NativeFieldInfoPtr_StructureCategoryInt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr, "StructureCategoryInt");
		EntityCategory.NativeFieldInfoPtr_MaterialCategoryInt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr, "MaterialCategoryInt");
		EntityCategory.NativeFieldInfoPtr_ResourceLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr, "ResourceLevel");
		EntityCategory.NativeMethodInfoPtr_get_MainCategory_Public_get_MainEntityCategory_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr, 100665654);
		EntityCategory.NativeMethodInfoPtr_set_MainCategory_Public_set_Void_MainEntityCategory_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr, 100665655);
		EntityCategory.NativeMethodInfoPtr_get_UnitCategory_Public_get_UnitCategory_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr, 100665656);
		EntityCategory.NativeMethodInfoPtr_set_UnitCategory_Public_set_Void_UnitCategory_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr, 100665657);
		EntityCategory.NativeMethodInfoPtr_get_StructureCategory_Public_get_StructureCategory_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr, 100665658);
		EntityCategory.NativeMethodInfoPtr_set_StructureCategory_Public_set_Void_StructureCategory_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr, 100665659);
		EntityCategory.NativeMethodInfoPtr_get_MaterialCategory_Public_get_MaterialCategory_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr, 100665660);
		EntityCategory.NativeMethodInfoPtr_set_MaterialCategory_Public_set_Void_MaterialCategory_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr, 100665661);
		EntityCategory.NativeMethodInfoPtr_IsSame_Public_Boolean_EntityCategory_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr, 100665662);
		EntityCategory.NativeMethodInfoPtr_IsSameMaterial_Public_Boolean_EntityCategory_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr, 100665663);
	}
	public unsafe MainEntityCategory MainCategory
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityCategory.NativeMethodInfoPtr_get_MainCategory_Public_get_MainEntityCategory_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityCategory.NativeMethodInfoPtr_set_MainCategory_Public_set_Void_MainEntityCategory_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe UnitCategory UnitCategory
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityCategory.NativeMethodInfoPtr_get_UnitCategory_Public_get_UnitCategory_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityCategory.NativeMethodInfoPtr_set_UnitCategory_Public_set_Void_UnitCategory_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe StructureCategory StructureCategory
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityCategory.NativeMethodInfoPtr_get_StructureCategory_Public_get_StructureCategory_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityCategory.NativeMethodInfoPtr_set_StructureCategory_Public_set_Void_StructureCategory_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe MaterialCategory MaterialCategory
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityCategory.NativeMethodInfoPtr_get_MaterialCategory_Public_get_MaterialCategory_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityCategory.NativeMethodInfoPtr_set_MaterialCategory_Public_set_Void_MaterialCategory_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}

	public unsafe bool IsSame(EntityCategory other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityCategory.NativeMethodInfoPtr_IsSame_Public_Boolean_EntityCategory_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool IsSameMaterial(EntityCategory other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityCategory.NativeMethodInfoPtr_IsSameMaterial_Public_Boolean_EntityCategory_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EntityCategory>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MainCategoryInt;
	private static readonly IntPtr NativeFieldInfoPtr_UnitCategoryInt;
	private static readonly IntPtr NativeFieldInfoPtr_StructureCategoryInt;
	private static readonly IntPtr NativeFieldInfoPtr_MaterialCategoryInt;
	private static readonly IntPtr NativeFieldInfoPtr_ResourceLevel;
	private static readonly IntPtr NativeMethodInfoPtr_get_MainCategory_Public_get_MainEntityCategory_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_MainCategory_Public_set_Void_MainEntityCategory_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_UnitCategory_Public_get_UnitCategory_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_UnitCategory_Public_set_Void_UnitCategory_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_StructureCategory_Public_get_StructureCategory_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_StructureCategory_Public_set_Void_StructureCategory_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_MaterialCategory_Public_get_MaterialCategory_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_MaterialCategory_Public_set_Void_MaterialCategory_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsSame_Public_Boolean_EntityCategory_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsSameMaterial_Public_Boolean_EntityCategory_0;

	public ModifiableInt MainCategoryInt;

	public ModifiableInt UnitCategoryInt;

	public ModifiableInt StructureCategoryInt;

	public ModifiableInt MaterialCategoryInt;

	public ModifiableInt ResourceLevel;
}
```
