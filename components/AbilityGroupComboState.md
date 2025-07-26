# AbilityGroupComboState

```csharp
[StructLayout(2)]
public struct AbilityGroupComboState
{
	static AbilityGroupComboState()
	{
		Il2CppClassPointerStore<AbilityGroupComboState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityGroupComboState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityGroupComboState>.NativeClassPtr);
		AbilityGroupComboState.NativeFieldInfoPtr_ComboIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupComboState>.NativeClassPtr, "ComboIndex");
		AbilityGroupComboState.NativeFieldInfoPtr_ComboLength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupComboState>.NativeClassPtr, "ComboLength");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityGroupComboState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ComboIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ComboLength;
	[FieldOffset(0)]
	public int ComboIndex;
	[FieldOffset(4)]
	public int ComboLength;
}
