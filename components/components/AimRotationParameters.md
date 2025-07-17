---
nav_exclude: true
search_exclude: true
---

# AimRotationParameters

```csharp
[StructLayout(2)]
public struct AimRotationParameters
{
	static AimRotationParameters()
	{
		Il2CppClassPointerStore<AimRotationParameters>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AimRotationParameters");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimRotationParameters>.NativeClassPtr);
		AimRotationParameters.NativeFieldInfoPtr_Constant = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimRotationParameters>.NativeClassPtr, "Constant");
		AimRotationParameters.NativeFieldInfoPtr_CoreModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimRotationParameters>.NativeClassPtr, "CoreModifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimRotationParameters>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Constant;
	private static readonly IntPtr NativeFieldInfoPtr_CoreModifier;
	[FieldOffset(0)]
	public float Constant;
	[FieldOffset(4)]
	public float CoreModifier;
}
