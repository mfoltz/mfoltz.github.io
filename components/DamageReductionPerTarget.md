# DamageReductionPerTarget

```csharp
[StructLayout(2)]
public struct DamageReductionPerTarget
{
	static DamageReductionPerTarget()
	{
		Il2CppClassPointerStore<DamageReductionPerTarget>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "DamageReductionPerTarget");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DamageReductionPerTarget>.NativeClassPtr);
		DamageReductionPerTarget.NativeFieldInfoPtr_HitResetTimer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageReductionPerTarget>.NativeClassPtr, "HitResetTimer");
		DamageReductionPerTarget.NativeFieldInfoPtr_ReductionModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageReductionPerTarget>.NativeClassPtr, "ReductionModifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DamageReductionPerTarget>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HitResetTimer;
	private static readonly IntPtr NativeFieldInfoPtr_ReductionModifier;
	[FieldOffset(0)]
	public float HitResetTimer;
	[FieldOffset(4)]
	public float ReductionModifier;
}
