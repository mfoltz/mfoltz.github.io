---
nav_exclude: true
search_exclude: true
---

# VolumeCompanionBoxCollider

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public float3 Center;
	[FieldOffset(12)]
	public float3 Size;
}
