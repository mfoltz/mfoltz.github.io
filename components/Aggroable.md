# Aggroable

```csharp
[StructLayout(2)]
public struct Aggroable
{
	static Aggroable()
	{
		Il2CppClassPointerStore<Aggroable>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Aggroable");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Aggroable>.NativeClassPtr);
		Aggroable.NativeFieldInfoPtr_DistanceFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Aggroable>.NativeClassPtr, "DistanceFactor");
		Aggroable.NativeFieldInfoPtr_AggroFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Aggroable>.NativeClassPtr, "AggroFactor");
		Aggroable.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Aggroable>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Aggroable>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DistanceFactor;
	private static readonly IntPtr NativeFieldInfoPtr_AggroFactor;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public ModifiableFloat DistanceFactor;
	[FieldOffset(4)]
	public ModifiableFloat AggroFactor;
	[FieldOffset(8)]
	public ModifiableBool Value;
}
