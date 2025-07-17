---
nav_exclude: true
search_exclude: true
---

# SubSceneStaticRootCollider

```csharp
[StructLayout(2)]
public struct SubSceneStaticRootCollider
{
	static SubSceneStaticRootCollider()
	{
		Il2CppClassPointerStore<SubSceneStaticRootCollider>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.Hybrid.dll", "Unity.Physics.Authoring", "SubSceneStaticRootCollider");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SubSceneStaticRootCollider>.NativeClassPtr);
		SubSceneStaticRootCollider.NativeFieldInfoPtr_Transform = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SubSceneStaticRootCollider>.NativeClassPtr, "Transform");
		SubSceneStaticRootCollider.NativeMethodInfoPtr_MakeSubSceneStaticRootCollider_Public_Static_Void_IBaker_GameObject_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SubSceneStaticRootCollider>.NativeClassPtr, 100663502);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 2148776, RefRangeEnd = 2148777, XrefRangeStart = 2148747, XrefRangeEnd = 2148776, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void MakeSubSceneStaticRootCollider(IBaker baker, GameObject authoring)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(baker);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.Il2CppObjectBaseToPtr(authoring);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SubSceneStaticRootCollider.NativeMethodInfoPtr_MakeSubSceneStaticRootCollider_Public_Static_Void_IBaker_GameObject_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SubSceneStaticRootCollider>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Transform;
	private static readonly IntPtr NativeMethodInfoPtr_MakeSubSceneStaticRootCollider_Public_Static_Void_IBaker_GameObject_0;
	[FieldOffset(0)]
	public UnityObjectRef<Transform> Transform;
}
