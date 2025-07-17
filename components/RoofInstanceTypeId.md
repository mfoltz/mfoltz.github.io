---
nav_exclude: true
search_exclude: true
---

# RoofInstanceTypeId

```csharp
public struct RoofInstanceTypeId
{
	static RoofInstanceTypeId()
	{
		Il2CppClassPointerStore<RoofInstanceTypeId>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.CastleBuilding.Systems.dll", "ProjectM.Roofs", "RoofInstanceTypeId");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RoofInstanceTypeId>.NativeClassPtr);
		RoofInstanceTypeId.NativeFieldInfoPtr_NorthOrnament = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoofInstanceTypeId>.NativeClassPtr, "NorthOrnament");
		RoofInstanceTypeId.NativeFieldInfoPtr_SouthOrnament = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoofInstanceTypeId>.NativeClassPtr, "SouthOrnament");
		RoofInstanceTypeId.NativeFieldInfoPtr_EastOrnament = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoofInstanceTypeId>.NativeClassPtr, "EastOrnament");
		RoofInstanceTypeId.NativeFieldInfoPtr_WestOrnament = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoofInstanceTypeId>.NativeClassPtr, "WestOrnament");
		RoofInstanceTypeId.NativeFieldInfoPtr_BlobType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoofInstanceTypeId>.NativeClassPtr, "BlobType");
		RoofInstanceTypeId.NativeFieldInfoPtr_BlobTypeRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoofInstanceTypeId>.NativeClassPtr, "BlobTypeRotation");
		RoofInstanceTypeId.NativeFieldInfoPtr_RoofCategoryType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoofInstanceTypeId>.NativeClassPtr, "RoofCategoryType");
		RoofInstanceTypeId.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_RoofInstanceTypeId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RoofInstanceTypeId>.NativeClassPtr, 100663477);
		RoofInstanceTypeId.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RoofInstanceTypeId>.NativeClassPtr, 100663478);
		RoofInstanceTypeId.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RoofInstanceTypeId>.NativeClassPtr, 100663479);
	}

	public unsafe bool Equals(RoofInstanceTypeId other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RoofInstanceTypeId.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_RoofInstanceTypeId_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RoofInstanceTypeId.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RoofInstanceTypeId.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RoofInstanceTypeId>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NorthOrnament;
	private static readonly IntPtr NativeFieldInfoPtr_SouthOrnament;
	private static readonly IntPtr NativeFieldInfoPtr_EastOrnament;
	private static readonly IntPtr NativeFieldInfoPtr_WestOrnament;
	private static readonly IntPtr NativeFieldInfoPtr_BlobType;
	private static readonly IntPtr NativeFieldInfoPtr_BlobTypeRotation;
	private static readonly IntPtr NativeFieldInfoPtr_RoofCategoryType;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_RoofInstanceTypeId_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;

	public PrefabGUID NorthOrnament;

	public PrefabGUID SouthOrnament;

	public PrefabGUID EastOrnament;

	public PrefabGUID WestOrnament;

	public TileBlobRootType BlobType;

	public OrthogonalRotation BlobTypeRotation;

	public RoofCategoryType RoofCategoryType;
}
```
