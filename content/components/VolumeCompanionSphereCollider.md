---
nav_exclude: true
search_exclude: true
---

```csharp
public struct VolumeCompanionSphereCollider
{
	static VolumeCompanionSphereCollider()
	{
		Il2CppClassPointerStore<VolumeCompanionSphereCollider>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "VolumeCompanionSphereCollider");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VolumeCompanionSphereCollider>.NativeClassPtr);
		VolumeCompanionSphereCollider.NativeFieldInfoPtr_Center = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VolumeCompanionSphereCollider>.NativeClassPtr, "Center");
		VolumeCompanionSphereCollider.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VolumeCompanionSphereCollider>.NativeClassPtr, "Radius");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VolumeCompanionSphereCollider>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Center;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;

	public float3 Center;

	public float Radius;
}
```

## Client Systems

- [VolumeCompanionSystem]({{% relref "systems/client/VolumeCompanionSystem.md" %}})
