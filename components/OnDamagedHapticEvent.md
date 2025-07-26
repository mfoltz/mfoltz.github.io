# OnDamagedHapticEvent

```csharp
[StructLayout(2)]
public struct OnDamagedHapticEvent
{
	static OnDamagedHapticEvent()
	{
		Il2CppClassPointerStore<OnDamagedHapticEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Haptics", "OnDamagedHapticEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OnDamagedHapticEvent>.NativeClassPtr);
		OnDamagedHapticEvent.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OnDamagedHapticEvent>.NativeClassPtr, "Position");
		OnDamagedHapticEvent.NativeFieldInfoPtr_DamageAmount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OnDamagedHapticEvent>.NativeClassPtr, "DamageAmount");
		OnDamagedHapticEvent.NativeFieldInfoPtr_DamageType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OnDamagedHapticEvent>.NativeClassPtr, "DamageType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OnDamagedHapticEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_DamageAmount;
	private static readonly IntPtr NativeFieldInfoPtr_DamageType;
	[FieldOffset(0)]
	public float3 Position;
	[FieldOffset(12)]
	public float DamageAmount;
	[FieldOffset(16)]
	public TakenDamageType DamageType;
}
