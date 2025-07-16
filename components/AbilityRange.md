# AbilityRange

```csharp
[StructLayout(2)]
public struct AbilityRange
{
	static AbilityRange()
	{
		Il2CppClassPointerStore<AbilityRange>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Behaviours", "AbilityRange");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityRange>.NativeClassPtr);
		AbilityRange.NativeFieldInfoPtr_Min = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityRange>.NativeClassPtr, "Min");
		AbilityRange.NativeFieldInfoPtr_Max = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityRange>.NativeClassPtr, "Max");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityRange>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Min;
	private static readonly IntPtr NativeFieldInfoPtr_Max;
	[FieldOffset(0)]
	public float Min;
	[FieldOffset(4)]
	public float Max;
}
