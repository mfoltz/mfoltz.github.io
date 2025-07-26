---
nav_exclude: true
search_exclude: true
---

# DamageCategoryStats

```csharp
public struct DamageCategoryStats
{
	static DamageCategoryStats()
	{
		Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DamageCategoryStats");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr);
		DamageCategoryStats.NativeFieldInfoPtr_DamageVsUndeads = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr, "DamageVsUndeads");
		DamageCategoryStats.NativeFieldInfoPtr_DamageVsHumans = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr, "DamageVsHumans");
		DamageCategoryStats.NativeFieldInfoPtr_DamageVsDemons = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr, "DamageVsDemons");
		DamageCategoryStats.NativeFieldInfoPtr_DamageVsMechanical = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr, "DamageVsMechanical");
		DamageCategoryStats.NativeFieldInfoPtr_DamageVsBeasts = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr, "DamageVsBeasts");
		DamageCategoryStats.NativeFieldInfoPtr_DamageVsCastleObjects = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr, "DamageVsCastleObjects");
		DamageCategoryStats.NativeFieldInfoPtr_DamageVsVampires = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr, "DamageVsVampires");
		DamageCategoryStats.NativeFieldInfoPtr_DamageVsWood = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr, "DamageVsWood");
		DamageCategoryStats.NativeFieldInfoPtr_DamageVsMineral = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr, "DamageVsMineral");
		DamageCategoryStats.NativeFieldInfoPtr_DamageVsVegetation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr, "DamageVsVegetation");
		DamageCategoryStats.NativeFieldInfoPtr_DamageVsLightArmor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr, "DamageVsLightArmor");
		DamageCategoryStats.NativeFieldInfoPtr_DamageVsVBloods = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr, "DamageVsVBloods");
		DamageCategoryStats.NativeFieldInfoPtr_DamageVsMagic = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr, "DamageVsMagic");
		DamageCategoryStats.NativeMethodInfoPtr_Default_Public_Static_DamageCategoryStats_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr, 100668088);
	}

	public unsafe static DamageCategoryStats Default()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DamageCategoryStats.NativeMethodInfoPtr_Default_Public_Static_DamageCategoryStats_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DamageCategoryStats>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DamageVsUndeads;
	private static readonly IntPtr NativeFieldInfoPtr_DamageVsHumans;
	private static readonly IntPtr NativeFieldInfoPtr_DamageVsDemons;
	private static readonly IntPtr NativeFieldInfoPtr_DamageVsMechanical;
	private static readonly IntPtr NativeFieldInfoPtr_DamageVsBeasts;
	private static readonly IntPtr NativeFieldInfoPtr_DamageVsCastleObjects;
	private static readonly IntPtr NativeFieldInfoPtr_DamageVsVampires;
	private static readonly IntPtr NativeFieldInfoPtr_DamageVsWood;
	private static readonly IntPtr NativeFieldInfoPtr_DamageVsMineral;
	private static readonly IntPtr NativeFieldInfoPtr_DamageVsVegetation;
	private static readonly IntPtr NativeFieldInfoPtr_DamageVsLightArmor;
	private static readonly IntPtr NativeFieldInfoPtr_DamageVsVBloods;
	private static readonly IntPtr NativeFieldInfoPtr_DamageVsMagic;
	private static readonly IntPtr NativeMethodInfoPtr_Default_Public_Static_DamageCategoryStats_0;

	public ModifiableFloat DamageVsUndeads;

	public ModifiableFloat DamageVsHumans;

	public ModifiableFloat DamageVsDemons;

	public ModifiableFloat DamageVsMechanical;

	public ModifiableFloat DamageVsBeasts;

	public ModifiableFloat DamageVsCastleObjects;

	public ModifiableFloat DamageVsVampires;

	public ModifiableFloat DamageVsWood;

	public ModifiableFloat DamageVsMineral;

	public ModifiableFloat DamageVsVegetation;

	public ModifiableFloat DamageVsLightArmor;

	public ModifiableFloat DamageVsVBloods;

	public ModifiableFloat DamageVsMagic;
}
```
