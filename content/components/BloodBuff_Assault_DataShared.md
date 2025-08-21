---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BloodBuff_Assault_DataShared
{
	static BloodBuff_Assault_DataShared()
	{
		Il2CppClassPointerStore<BloodBuff_Assault_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "BloodBuff_Assault_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuff_Assault_DataShared>.NativeClassPtr);
		BloodBuff_Assault_DataShared.NativeFieldInfoPtr_DamageBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Assault_DataShared>.NativeClassPtr, "DamageBonus");
		BloodBuff_Assault_DataShared.NativeFieldInfoPtr_OnDamageDealtListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Assault_DataShared>.NativeClassPtr, "OnDamageDealtListener");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuff_Assault_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DamageBonus;
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageDealtListener;

	public float DamageBonus;

	public ListenerId OnDamageDealtListener;
}
```
