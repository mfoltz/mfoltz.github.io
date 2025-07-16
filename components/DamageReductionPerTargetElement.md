# DamageReductionPerTargetElement

```csharp
[StructLayout(2)]
public struct DamageReductionPerTargetElement
{
	static DamageReductionPerTargetElement()
	{
		Il2CppClassPointerStore<DamageReductionPerTargetElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "DamageReductionPerTargetElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DamageReductionPerTargetElement>.NativeClassPtr);
		DamageReductionPerTargetElement.NativeFieldInfoPtr_TimeHit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageReductionPerTargetElement>.NativeClassPtr, "TimeHit");
		DamageReductionPerTargetElement.NativeFieldInfoPtr_ReductionModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageReductionPerTargetElement>.NativeClassPtr, "ReductionModifier");
		DamageReductionPerTargetElement.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageReductionPerTargetElement>.NativeClassPtr, "Target");
		DamageReductionPerTargetElement.NativeFieldInfoPtr_ReductionGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageReductionPerTargetElement>.NativeClassPtr, "ReductionGroup");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DamageReductionPerTargetElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TimeHit;
	private static readonly IntPtr NativeFieldInfoPtr_ReductionModifier;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_ReductionGroup;
	[FieldOffset(0)]
	public double TimeHit;
	[FieldOffset(8)]
	public float ReductionModifier;
	[FieldOffset(12)]
	public Entity Target;
	[FieldOffset(20)]
	public int ReductionGroup;
}
