# DeathPvPTimer

```csharp
[StructLayout(2)]
public struct DeathPvPTimer
{
	static DeathPvPTimer()
	{
		Il2CppClassPointerStore<DeathPvPTimer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DeathPvPTimer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DeathPvPTimer>.NativeClassPtr);
		DeathPvPTimer.NativeFieldInfoPtr_ExtraTime_FirstStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeathPvPTimer>.NativeClassPtr, "ExtraTime_FirstStack");
		DeathPvPTimer.NativeFieldInfoPtr_ExtraTime_AdditionalStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeathPvPTimer>.NativeClassPtr, "ExtraTime_AdditionalStacks");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DeathPvPTimer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ExtraTime_FirstStack;
	private static readonly IntPtr NativeFieldInfoPtr_ExtraTime_AdditionalStacks;
	[FieldOffset(0)]
	public float ExtraTime_FirstStack;
	[FieldOffset(4)]
	public float ExtraTime_AdditionalStacks;
}
