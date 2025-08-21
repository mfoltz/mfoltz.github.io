---
nav_exclude: true
search_exclude: true
---

```csharp
public struct LODRange
{
	static LODRange()
	{
		Il2CppClassPointerStore<LODRange>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "LODRange");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LODRange>.NativeClassPtr);
		LODRange.NativeFieldInfoPtr_MinDist = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LODRange>.NativeClassPtr, "MinDist");
		LODRange.NativeFieldInfoPtr_MaxDist = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LODRange>.NativeClassPtr, "MaxDist");
		LODRange.NativeFieldInfoPtr_LODMask = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LODRange>.NativeClassPtr, "LODMask");
		LODRange.NativeMethodInfoPtr__ctor_Public_Void_MeshLODGroupComponent_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LODRange>.NativeClassPtr, 100664149);
	}

	public unsafe LODRange(MeshLODGroupComponent lodGroup, int lodMask)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref lodGroup;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref lodMask;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LODRange.NativeMethodInfoPtr__ctor_Public_Void_MeshLODGroupComponent_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LODRange>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinDist;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDist;
	private static readonly IntPtr NativeFieldInfoPtr_LODMask;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_MeshLODGroupComponent_Int32_0;

	public float MinDist;

	public float MaxDist;

	public int LODMask;
}
```

## Client Systems

- [AddLODRequirementComponents]({{% relref "systems/client/AddLODRequirementComponents.md" %}})
- [LODRequirementsUpdateSystem]({{% relref "systems/client/LODRequirementsUpdateSystem.md" %}})
