---
nav_exclude: true
search_exclude: true
---

# Buff_HealAttackerOnPrimaryAttack_DataShared

```csharp
[StructLayout(2)]
public struct Buff_HealAttackerOnPrimaryAttack_DataShared
{
	static Buff_HealAttackerOnPrimaryAttack_DataShared()
	{
		Il2CppClassPointerStore<Buff_HealAttackerOnPrimaryAttack_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Buff_HealAttackerOnPrimaryAttack_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Buff_HealAttackerOnPrimaryAttack_DataShared>.NativeClassPtr);
		Buff_HealAttackerOnPrimaryAttack_DataShared.NativeFieldInfoPtr_LeechFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_HealAttackerOnPrimaryAttack_DataShared>.NativeClassPtr, "LeechFactor");
		Buff_HealAttackerOnPrimaryAttack_DataShared.NativeFieldInfoPtr_OnDamageTakenListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_HealAttackerOnPrimaryAttack_DataShared>.NativeClassPtr, "OnDamageTakenListener");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Buff_HealAttackerOnPrimaryAttack_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LeechFactor;
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageTakenListener;
	[FieldOffset(0)]
	public float LeechFactor;
	[FieldOffset(4)]
	public ListenerId OnDamageTakenListener;
}
