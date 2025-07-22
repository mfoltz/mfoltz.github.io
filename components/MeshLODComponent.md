---
nav_exclude: true
search_exclude: false
---

# MeshLODComponent

```csharp
public struct MeshLODComponent
{
	static MeshLODComponent()
	{
		Il2CppClassPointerStore<MeshLODComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "MeshLODComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MeshLODComponent>.NativeClassPtr);
		MeshLODComponent.NativeFieldInfoPtr_Group = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MeshLODComponent>.NativeClassPtr, "Group");
		MeshLODComponent.NativeFieldInfoPtr_ParentGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MeshLODComponent>.NativeClassPtr, "ParentGroup");
		MeshLODComponent.NativeFieldInfoPtr_LODMask = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MeshLODComponent>.NativeClassPtr, "LODMask");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MeshLODComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Group;
	private static readonly IntPtr NativeFieldInfoPtr_ParentGroup;
	private static readonly IntPtr NativeFieldInfoPtr_LODMask;

	public Entity Group;

	public Entity ParentGroup;

	public int LODMask;
}
```

## Client Systems

- [AddLODRequirementComponents](/systems/client/AddLODRequirementComponents)
- [LODRequirementsUpdateSystem](/systems/client/LODRequirementsUpdateSystem)
