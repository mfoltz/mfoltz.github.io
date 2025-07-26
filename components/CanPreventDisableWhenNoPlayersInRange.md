# CanPreventDisableWhenNoPlayersInRange

```csharp
[StructLayout(2)]
public struct CanPreventDisableWhenNoPlayersInRange
{
	static CanPreventDisableWhenNoPlayersInRange()
	{
		Il2CppClassPointerStore<CanPreventDisableWhenNoPlayersInRange>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CanPreventDisableWhenNoPlayersInRange");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CanPreventDisableWhenNoPlayersInRange>.NativeClassPtr);
		CanPreventDisableWhenNoPlayersInRange.NativeFieldInfoPtr_CanDisable = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CanPreventDisableWhenNoPlayersInRange>.NativeClassPtr, "CanDisable");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CanPreventDisableWhenNoPlayersInRange>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CanDisable;
	[FieldOffset(0)]
	public ModifiableBool CanDisable;
}
