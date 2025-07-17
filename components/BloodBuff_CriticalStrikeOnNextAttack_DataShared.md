---
nav_exclude: true
search_exclude: true
---

# BloodBuff_CriticalStrikeOnNextAttack_DataShared

```csharp
[StructLayout(2)]
public struct BloodBuff_CriticalStrikeOnNextAttack_DataShared
{
	static BloodBuff_CriticalStrikeOnNextAttack_DataShared()
	{
		Il2CppClassPointerStore<BloodBuff_CriticalStrikeOnNextAttack_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "BloodBuff_CriticalStrikeOnNextAttack_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuff_CriticalStrikeOnNextAttack_DataShared>.NativeClassPtr);
		BloodBuff_CriticalStrikeOnNextAttack_DataShared.NativeFieldInfoPtr_CriticalStrikeValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_CriticalStrikeOnNextAttack_DataShared>.NativeClassPtr, "CriticalStrikeValue");
		BloodBuff_CriticalStrikeOnNextAttack_DataShared.NativeFieldInfoPtr_PhysicalCriticalStrikeChanceModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_CriticalStrikeOnNextAttack_DataShared>.NativeClassPtr, "PhysicalCriticalStrikeChanceModificationId");
		BloodBuff_CriticalStrikeOnNextAttack_DataShared.NativeFieldInfoPtr_OnDamageDealtListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_CriticalStrikeOnNextAttack_DataShared>.NativeClassPtr, "OnDamageDealtListener");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuff_CriticalStrikeOnNextAttack_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CriticalStrikeValue;
	private static readonly IntPtr NativeFieldInfoPtr_PhysicalCriticalStrikeChanceModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageDealtListener;
	[FieldOffset(0)]
	public float CriticalStrikeValue;
	[FieldOffset(4)]
	public ModificationId PhysicalCriticalStrikeChanceModificationId;
	[FieldOffset(8)]
	public ListenerId OnDamageDealtListener;
}
