# HealthConstants

```csharp
[StructLayout(2)]
public struct HealthConstants
{
	static HealthConstants()
	{
		Il2CppClassPointerStore<HealthConstants>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "HealthConstants");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HealthConstants>.NativeClassPtr);
		HealthConstants.NativeFieldInfoPtr_LowHealthFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealthConstants>.NativeClassPtr, "LowHealthFactor");
		HealthConstants.NativeFieldInfoPtr_DestroyOnDeath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealthConstants>.NativeClassPtr, "DestroyOnDeath");
		HealthConstants.NativeFieldInfoPtr_DestroyAfterDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealthConstants>.NativeClassPtr, "DestroyAfterDuration");
		HealthConstants.NativeFieldInfoPtr_DisableDamageSCT = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealthConstants>.NativeClassPtr, "DisableDamageSCT");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HealthConstants>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LowHealthFactor;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyOnDeath;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyAfterDuration;
	private static readonly IntPtr NativeFieldInfoPtr_DisableDamageSCT;
	[FieldOffset(0)]
	public float LowHealthFactor;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool DestroyOnDeath;
	[FieldOffset(8)]
	public float DestroyAfterDuration;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool DisableDamageSCT;
}
