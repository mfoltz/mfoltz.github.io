# DeathEvent

```csharp
[StructLayout(2)]
public struct DeathEvent
{
	static DeathEvent()
	{
		Il2CppClassPointerStore<DeathEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DeathEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DeathEvent>.NativeClassPtr);
		DeathEvent.NativeFieldInfoPtr_Died = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeathEvent>.NativeClassPtr, "Died");
		DeathEvent.NativeFieldInfoPtr_Killer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeathEvent>.NativeClassPtr, "Killer");
		DeathEvent.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeathEvent>.NativeClassPtr, "Source");
		DeathEvent.NativeFieldInfoPtr_StatChangeReason = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeathEvent>.NativeClassPtr, "StatChangeReason");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DeathEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Died;
	private static readonly IntPtr NativeFieldInfoPtr_Killer;
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_StatChangeReason;
	[FieldOffset(0)]
	public Entity Died;
	[FieldOffset(8)]
	public Entity Killer;
	[FieldOffset(16)]
	public Entity Source;
	[FieldOffset(24)]
	public StatChangeReason StatChangeReason;
}
