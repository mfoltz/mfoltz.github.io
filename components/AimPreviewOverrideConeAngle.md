---
nav_exclude: true
search_exclude: true
---

# AimPreviewOverrideConeAngle

```csharp
[StructLayout(2)]
public struct AimPreviewOverrideConeAngle
{
	static AimPreviewOverrideConeAngle()
	{
		Il2CppClassPointerStore<AimPreviewOverrideConeAngle>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AimPreviewOverrideConeAngle");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewOverrideConeAngle>.NativeClassPtr);
		AimPreviewOverrideConeAngle.NativeFieldInfoPtr_ConeAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewOverrideConeAngle>.NativeClassPtr, "ConeAngle");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewOverrideConeAngle>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ConeAngle;
	[FieldOffset(0)]
	public float ConeAngle;
}
