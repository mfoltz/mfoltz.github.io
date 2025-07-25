---
nav_exclude: true
search_exclude: true
---

# Script_Spectral_Empower_DataServer

```csharp
public struct Script_Spectral_Empower_DataServer
{
	static Script_Spectral_Empower_DataServer()
	{
		Il2CppClassPointerStore<Script_Spectral_Empower_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Spectral_Empower_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Spectral_Empower_DataServer>.NativeClassPtr);
		Script_Spectral_Empower_DataServer.NativeFieldInfoPtr_KnockbackPower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Spectral_Empower_DataServer>.NativeClassPtr, "KnockbackPower");
		Script_Spectral_Empower_DataServer.NativeFieldInfoPtr_KnockbackDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Spectral_Empower_DataServer>.NativeClassPtr, "KnockbackDuration");
		Script_Spectral_Empower_DataServer.NativeFieldInfoPtr_KnockbackRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Spectral_Empower_DataServer>.NativeClassPtr, "KnockbackRange");
		Script_Spectral_Empower_DataServer.NativeFieldInfoPtr_DamageBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Spectral_Empower_DataServer>.NativeClassPtr, "DamageBonus");
		Script_Spectral_Empower_DataServer.NativeFieldInfoPtr_OnDamageDealtListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Spectral_Empower_DataServer>.NativeClassPtr, "OnDamageDealtListener");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Spectral_Empower_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_KnockbackPower;
	private static readonly IntPtr NativeFieldInfoPtr_KnockbackDuration;
	private static readonly IntPtr NativeFieldInfoPtr_KnockbackRange;
	private static readonly IntPtr NativeFieldInfoPtr_DamageBonus;
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageDealtListener;

	public KnockbackPower KnockbackPower;

	public float KnockbackDuration;

	public float KnockbackRange;

	public float DamageBonus;

	public ListenerId OnDamageDealtListener;
}
```
