# Buff

```csharp
[StructLayout(2)]
public struct Buff
{
	static Buff()
	{
		Il2CppClassPointerStore<Buff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Buff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Buff>.NativeClassPtr);
		Buff.NativeFieldInfoPtr_StartTimeUnmodified = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "StartTimeUnmodified");
		Buff.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "Target");
		Buff.NativeFieldInfoPtr_BuffType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "BuffType");
		Buff.NativeFieldInfoPtr_Stacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "Stacks");
		Buff.NativeFieldInfoPtr_MaxStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "MaxStacks");
		Buff.NativeFieldInfoPtr_ResetAge = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "ResetAge");
		Buff.NativeFieldInfoPtr_IncreaseStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "IncreaseStacks");
		Buff.NativeFieldInfoPtr_CorrectlyCreated = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "CorrectlyCreated");
		Buff.NativeFieldInfoPtr_OneInstancePerOwner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "OneInstancePerOwner");
		Buff.NativeFieldInfoPtr_BuffEffectType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff>.NativeClassPtr, "BuffEffectType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Buff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StartTimeUnmodified;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_BuffType;
	private static readonly IntPtr NativeFieldInfoPtr_Stacks;
	private static readonly IntPtr NativeFieldInfoPtr_MaxStacks;
	private static readonly IntPtr NativeFieldInfoPtr_ResetAge;
	private static readonly IntPtr NativeFieldInfoPtr_IncreaseStacks;
	private static readonly IntPtr NativeFieldInfoPtr_CorrectlyCreated;
	private static readonly IntPtr NativeFieldInfoPtr_OneInstancePerOwner;
	private static readonly IntPtr NativeFieldInfoPtr_BuffEffectType;
	[FieldOffset(0)]
	public double StartTimeUnmodified;
	[FieldOffset(8)]
	public Entity Target;
	[FieldOffset(16)]
	public BuffType BuffType;
	[FieldOffset(17)]
	public byte Stacks;
	[FieldOffset(18)]
	public byte MaxStacks;
	[FieldOffset(19)]
	[MarshalAs(4)]
	public bool ResetAge;
	[FieldOffset(20)]
	[MarshalAs(4)]
	public bool IncreaseStacks;
	[FieldOffset(21)]
	[MarshalAs(4)]
	public bool CorrectlyCreated;
	[FieldOffset(22)]
	[MarshalAs(4)]
	public bool OneInstancePerOwner;
	[FieldOffset(24)]
	public BuffEffectType BuffEffectType;
}
