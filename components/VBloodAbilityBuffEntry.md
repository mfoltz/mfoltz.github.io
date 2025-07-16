# VBloodAbilityBuffEntry

```csharp
[StructLayout(2)]
public struct VBloodAbilityBuffEntry
{
	static VBloodAbilityBuffEntry()
	{
		Il2CppClassPointerStore<VBloodAbilityBuffEntry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "VBloodAbilityBuffEntry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VBloodAbilityBuffEntry>.NativeClassPtr);
		VBloodAbilityBuffEntry.NativeFieldInfoPtr_SlotId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodAbilityBuffEntry>.NativeClassPtr, "SlotId");
		VBloodAbilityBuffEntry.NativeFieldInfoPtr_ActiveBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodAbilityBuffEntry>.NativeClassPtr, "ActiveBuff");
		VBloodAbilityBuffEntry.NativeFieldInfoPtr_ActiveAbility = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodAbilityBuffEntry>.NativeClassPtr, "ActiveAbility");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VBloodAbilityBuffEntry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SlotId;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveBuff;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveAbility;
	[FieldOffset(0)]
	public int SlotId;
	[FieldOffset(4)]
	public Entity ActiveBuff;
	[FieldOffset(12)]
	public PrefabGUID ActiveAbility;
}
