---
nav_exclude: true
search_exclude: false
---

# SceneTag

```csharp
public struct SceneTag
{
	static SceneTag()
	{
		Il2CppClassPointerStore<SceneTag>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "SceneTag");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SceneTag>.NativeClassPtr);
		SceneTag.NativeFieldInfoPtr_SceneEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneTag>.NativeClassPtr, "SceneEntity");
		SceneTag.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneTag>.NativeClassPtr, 100666824);
		SceneTag.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SceneTag_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneTag>.NativeClassPtr, 100666825);
		SceneTag.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneTag>.NativeClassPtr, 100666826);
		SceneTag.NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneTag>.NativeClassPtr, 100666827);
		SceneTag.NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneTag>.NativeClassPtr, 100666828);
	}

	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneTag.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool Equals(SceneTag other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneTag.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SceneTag_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneTag.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}

	public unsafe static bool __codegen__Equals(void* self, void* A_1)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = self;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = A_1;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneTag.NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static int __codegen__GetHashCode(void* self)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = self;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneTag.NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SceneTag>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SceneEntity;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SceneTag_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0;

	public Entity SceneEntity;
}
```

## Server Systems

- [GameDataSubSceneSystem](/systems/server/GameDataSubSceneSystem)
- [SceneSectionStreamingSystem](/systems/server/SceneSectionStreamingSystem)
- [SetupRetainBlobAssetsSystem](/systems/server/SetupRetainBlobAssetsSystem)

## Client Systems

- [EntityMetadataSystem](/systems/client/EntityMetadataSystem)
- [GameDataSubSceneSystem](/systems/client/GameDataSubSceneSystem)
- [SceneSectionStreamingSystem](/systems/client/SceneSectionStreamingSystem)
- [SetupRetainBlobAssetsSystem](/systems/client/SetupRetainBlobAssetsSystem)
