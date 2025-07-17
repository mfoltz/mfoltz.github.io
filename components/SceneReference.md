---
nav_exclude: true
search_exclude: true
---

# SceneReference

```csharp
[StructLayout(2)]
public struct SceneReference
{
	static SceneReference()
	{
		Il2CppClassPointerStore<SceneReference>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "SceneReference");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SceneReference>.NativeClassPtr);
		SceneReference.NativeFieldInfoPtr_SceneGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneReference>.NativeClassPtr, "SceneGUID");
		SceneReference.NativeMethodInfoPtr__ctor_Public_Void_EntitySceneReference_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneReference>.NativeClassPtr, 100669388);
		SceneReference.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SceneReference_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneReference>.NativeClassPtr, 100669389);
		SceneReference.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneReference>.NativeClassPtr, 100669390);
	}
	[CallerCount(0)]
	public unsafe SceneReference(EntitySceneReference sceneReference)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref sceneReference;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneReference.NativeMethodInfoPtr__ctor_Public_Void_EntitySceneReference_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1353499, XrefRangeEnd = 1353502, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool Equals(SceneReference other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneReference.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SceneReference_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1353502, XrefRangeEnd = 1353505, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneReference.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SceneReference>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SceneGUID;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_EntitySceneReference_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SceneReference_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	[FieldOffset(0)]
	public Hash128 SceneGUID;
}
