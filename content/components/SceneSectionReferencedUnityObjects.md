---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SceneSectionReferencedUnityObjects
{
	static SceneSectionReferencedUnityObjects()
	{
		Il2CppClassPointerStore<SceneSectionReferencedUnityObjects>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "SceneSectionReferencedUnityObjects");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SceneSectionReferencedUnityObjects>.NativeClassPtr);
		SceneSectionReferencedUnityObjects.NativeFieldInfoPtr__sceneBundleHandles = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSectionReferencedUnityObjects>.NativeClassPtr, "_sceneBundleHandles");
		SceneSectionReferencedUnityObjects.NativeMethodInfoPtr__ctor_Public_Void_UntypedWeakReferenceId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneSectionReferencedUnityObjects>.NativeClassPtr, 100663562);
		SceneSectionReferencedUnityObjects.NativeMethodInfoPtr_Release_Public_Virtual_Final_New_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneSectionReferencedUnityObjects>.NativeClassPtr, 100663563);
		SceneSectionReferencedUnityObjects.NativeMethodInfoPtr_Retain_Public_Virtual_Final_New_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneSectionReferencedUnityObjects>.NativeClassPtr, 100663564);
		SceneSectionReferencedUnityObjects.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SceneSectionReferencedUnityObjects_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneSectionReferencedUnityObjects>.NativeClassPtr, 100663565);
		SceneSectionReferencedUnityObjects.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneSectionReferencedUnityObjects>.NativeClassPtr, 100663566);
		SceneSectionReferencedUnityObjects.NativeMethodInfoPtr___codegen__Retain_Public_Static_Void_IntPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneSectionReferencedUnityObjects>.NativeClassPtr, 100663567);
		SceneSectionReferencedUnityObjects.NativeMethodInfoPtr___codegen__Release_Public_Static_Void_IntPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneSectionReferencedUnityObjects>.NativeClassPtr, 100663568);
		SceneSectionReferencedUnityObjects.NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneSectionReferencedUnityObjects>.NativeClassPtr, 100663569);
		SceneSectionReferencedUnityObjects.NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneSectionReferencedUnityObjects>.NativeClassPtr, 100663570);
	}

	public unsafe SceneSectionReferencedUnityObjects(UntypedWeakReferenceId bundles)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref bundles;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneSectionReferencedUnityObjects.NativeMethodInfoPtr__ctor_Public_Void_UntypedWeakReferenceId_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Release()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneSectionReferencedUnityObjects.NativeMethodInfoPtr_Release_Public_Virtual_Final_New_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Retain()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneSectionReferencedUnityObjects.NativeMethodInfoPtr_Retain_Public_Virtual_Final_New_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe bool Equals(SceneSectionReferencedUnityObjects other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneSectionReferencedUnityObjects.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SceneSectionReferencedUnityObjects_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneSectionReferencedUnityObjects.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static void __codegen__Retain(IntPtr self)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref self;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneSectionReferencedUnityObjects.NativeMethodInfoPtr___codegen__Retain_Public_Static_Void_IntPtr_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe static void __codegen__Release(IntPtr self)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref self;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneSectionReferencedUnityObjects.NativeMethodInfoPtr___codegen__Release_Public_Static_Void_IntPtr_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe static bool __codegen__Equals(void* self, void* A_1)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = self;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = A_1;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneSectionReferencedUnityObjects.NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static int __codegen__GetHashCode(void* self)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = self;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneSectionReferencedUnityObjects.NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SceneSectionReferencedUnityObjects>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr__sceneBundleHandles;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_UntypedWeakReferenceId_0;
	private static readonly IntPtr NativeMethodInfoPtr_Release_Public_Virtual_Final_New_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr_Retain_Public_Virtual_Final_New_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SceneSectionReferencedUnityObjects_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__Retain_Public_Static_Void_IntPtr_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__Release_Public_Static_Void_IntPtr_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0;

	public UntypedWeakReferenceId _sceneBundleHandles;
}
```
