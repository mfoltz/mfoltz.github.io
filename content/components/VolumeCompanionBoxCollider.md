---
nav_exclude: true
search_exclude: true
---

```csharp
public struct VolumeCompanionBoxCollider
{
	static VolumeCompanionBoxCollider()
	{
		Il2CppClassPointerStore<VolumeCompanionBoxCollider>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "VolumeCompanionBoxCollider");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VolumeCompanionBoxCollider>.NativeClassPtr);
		VolumeCompanionBoxCollider.NativeFieldInfoPtr_Center = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VolumeCompanionBoxCollider>.NativeClassPtr, "Center");
		VolumeCompanionBoxCollider.NativeFieldInfoPtr_Size = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VolumeCompanionBoxCollider>.NativeClassPtr, "Size");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VolumeCompanionBoxCollider>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Center;
	private static readonly IntPtr NativeFieldInfoPtr_Size;

	public float3 Center;

	public float3 Size;
}
```

## Client Systems

- [VolumeCompanionSystem]({{% relref "systems/client/VolumeCompanionSystem.md" %}})
