---
nav_exclude: true
search_exclude: true
---

```csharp
public struct MeshLODGroupComponent
{
	static MeshLODGroupComponent()
	{
		Il2CppClassPointerStore<MeshLODGroupComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "MeshLODGroupComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MeshLODGroupComponent>.NativeClassPtr);
		MeshLODGroupComponent.NativeFieldInfoPtr_ParentGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MeshLODGroupComponent>.NativeClassPtr, "ParentGroup");
		MeshLODGroupComponent.NativeFieldInfoPtr_ParentMask = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MeshLODGroupComponent>.NativeClassPtr, "ParentMask");
		MeshLODGroupComponent.NativeFieldInfoPtr_LODDistances0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MeshLODGroupComponent>.NativeClassPtr, "LODDistances0");
		MeshLODGroupComponent.NativeFieldInfoPtr_LODDistances1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MeshLODGroupComponent>.NativeClassPtr, "LODDistances1");
		MeshLODGroupComponent.NativeFieldInfoPtr_LocalReferencePoint = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MeshLODGroupComponent>.NativeClassPtr, "LocalReferencePoint");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MeshLODGroupComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ParentGroup;
	private static readonly IntPtr NativeFieldInfoPtr_ParentMask;
	private static readonly IntPtr NativeFieldInfoPtr_LODDistances0;
	private static readonly IntPtr NativeFieldInfoPtr_LODDistances1;
	private static readonly IntPtr NativeFieldInfoPtr_LocalReferencePoint;

	public Entity ParentGroup;

	public int ParentMask;

	public float4 LODDistances0;

	public float4 LODDistances1;

	public float3 LocalReferencePoint;
}
```

## Client Systems

- [AddLODRequirementComponents]({{% relref "systems/client/AddLODRequirementComponents.md" %}})
- [LODRequirementsUpdateSystem]({{% relref "systems/client/LODRequirementsUpdateSystem.md" %}})
