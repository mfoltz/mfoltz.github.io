# IgnoreHitsPerTargetElement

```csharp
[StructLayout(2)]
public struct IgnoreHitsPerTargetElement
{
	static IgnoreHitsPerTargetElement()
	{
		Il2CppClassPointerStore<IgnoreHitsPerTargetElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "IgnoreHitsPerTargetElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<IgnoreHitsPerTargetElement>.NativeClassPtr);
		IgnoreHitsPerTargetElement.NativeFieldInfoPtr_TimeHit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IgnoreHitsPerTargetElement>.NativeClassPtr, "TimeHit");
		IgnoreHitsPerTargetElement.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IgnoreHitsPerTargetElement>.NativeClassPtr, "Target");
		IgnoreHitsPerTargetElement.NativeFieldInfoPtr_ReductionGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IgnoreHitsPerTargetElement>.NativeClassPtr, "ReductionGroup");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<IgnoreHitsPerTargetElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TimeHit;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_ReductionGroup;
	[FieldOffset(0)]
	public double TimeHit;
	[FieldOffset(8)]
	public Entity Target;
	[FieldOffset(16)]
	public int ReductionGroup;
}
