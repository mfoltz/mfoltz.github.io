# Picker

```csharp
[StructLayout(2)]
public struct Picker
{
	static Picker()
	{
		Il2CppClassPointerStore<Picker>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Picker");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Picker>.NativeClassPtr);
		Picker.NativeFieldInfoPtr_UnitHoverPick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Picker>.NativeClassPtr, "UnitHoverPick");
		Picker.NativeFieldInfoPtr_HoverPick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Picker>.NativeClassPtr, "HoverPick");
		Picker.NativeFieldInfoPtr_HasHoverPick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Picker>.NativeClassPtr, "HasHoverPick");
		Picker.NativeFieldInfoPtr_HasUnitHoverPick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Picker>.NativeClassPtr, "HasUnitHoverPick");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Picker>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnitHoverPick;
	private static readonly IntPtr NativeFieldInfoPtr_HoverPick;
	private static readonly IntPtr NativeFieldInfoPtr_HasHoverPick;
	private static readonly IntPtr NativeFieldInfoPtr_HasUnitHoverPick;
	[FieldOffset(0)]
	public Pick UnitHoverPick;
	[FieldOffset(36)]
	public Pick HoverPick;
	[FieldOffset(72)]
	[MarshalAs(4)]
	public bool HasHoverPick;
	[FieldOffset(73)]
	[MarshalAs(4)]
	public bool HasUnitHoverPick;
}
