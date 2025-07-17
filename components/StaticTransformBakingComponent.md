---
nav_exclude: true
search_exclude: true
---

# StaticTransformBakingComponent

```csharp
public struct StaticTransformBakingComponent
{
	static StaticTransformBakingComponent()
	{
		Il2CppClassPointerStore<StaticTransformBakingComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StaticTransformBakingComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StaticTransformBakingComponent>.NativeClassPtr);
		StaticTransformBakingComponent.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticTransformBakingComponent>.NativeClassPtr, "Entity");
		StaticTransformBakingComponent.NativeFieldInfoPtr_TRS = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticTransformBakingComponent>.NativeClassPtr, "TRS");
		StaticTransformBakingComponent.NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_StaticTransformBakingComponent_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StaticTransformBakingComponent>.NativeClassPtr, 100668052);
		StaticTransformBakingComponent.NativeMethodInfoPtr_System_IEquatable_ProjectM_StaticTransformBakingComponent__Equals_Private_Virtual_Final_New_Boolean_StaticTransformBakingComponent_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StaticTransformBakingComponent>.NativeClassPtr, 100668053);
	}

	public unsafe int CompareTo(StaticTransformBakingComponent other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StaticTransformBakingComponent.NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_StaticTransformBakingComponent_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool System_IEquatable_ProjectM_StaticTransformBakingComponent__Equals(StaticTransformBakingComponent other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StaticTransformBakingComponent.NativeMethodInfoPtr_System_IEquatable_ProjectM_StaticTransformBakingComponent__Equals_Private_Virtual_Final_New_Boolean_StaticTransformBakingComponent_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StaticTransformBakingComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_TRS;
	private static readonly IntPtr NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_StaticTransformBakingComponent_0;
	private static readonly IntPtr NativeMethodInfoPtr_System_IEquatable_ProjectM_StaticTransformBakingComponent__Equals_Private_Virtual_Final_New_Boolean_StaticTransformBakingComponent_0;

	public Entity Entity;

	public float4x4 TRS;
}
```
