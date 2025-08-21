---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DealDamageToPrisoner
{
	static DealDamageToPrisoner()
	{
		Il2CppClassPointerStore<DealDamageToPrisoner>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DealDamageToPrisoner");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DealDamageToPrisoner>.NativeClassPtr);
		DealDamageToPrisoner.NativeFieldInfoPtr_DealPercentualDamage_Min = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageToPrisoner>.NativeClassPtr, "DealPercentualDamage_Min");
		DealDamageToPrisoner.NativeFieldInfoPtr_DealPercentualDamage_Max = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageToPrisoner>.NativeClassPtr, "DealPercentualDamage_Max");
		DealDamageToPrisoner.NativeFieldInfoPtr_DealPercentualTorture_Min = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageToPrisoner>.NativeClassPtr, "DealPercentualTorture_Min");
		DealDamageToPrisoner.NativeFieldInfoPtr_DealPercentualTorture_Max = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageToPrisoner>.NativeClassPtr, "DealPercentualTorture_Max");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DealDamageToPrisoner>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DealPercentualDamage_Min;
	private static readonly IntPtr NativeFieldInfoPtr_DealPercentualDamage_Max;
	private static readonly IntPtr NativeFieldInfoPtr_DealPercentualTorture_Min;
	private static readonly IntPtr NativeFieldInfoPtr_DealPercentualTorture_Max;

	public float DealPercentualDamage_Min;

	public float DealPercentualDamage_Max;

	public float DealPercentualTorture_Min;

	public float DealPercentualTorture_Max;
}
```
