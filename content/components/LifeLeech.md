---
nav_exclude: true
search_exclude: true
---

```csharp
public struct LifeLeech
{
	static LifeLeech()
	{
		Il2CppClassPointerStore<LifeLeech>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "LifeLeech");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LifeLeech>.NativeClassPtr);
		LifeLeech.NativeFieldInfoPtr_PrimaryLeechFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LifeLeech>.NativeClassPtr, "PrimaryLeechFactor");
		LifeLeech.NativeFieldInfoPtr_PhysicalLifeLeechFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LifeLeech>.NativeClassPtr, "PhysicalLifeLeechFactor");
		LifeLeech.NativeFieldInfoPtr_SpellLifeLeechFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LifeLeech>.NativeClassPtr, "SpellLifeLeechFactor");
		LifeLeech.NativeFieldInfoPtr_AffectRecovery = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LifeLeech>.NativeClassPtr, "AffectRecovery");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LifeLeech>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrimaryLeechFactor;
	private static readonly IntPtr NativeFieldInfoPtr_PhysicalLifeLeechFactor;
	private static readonly IntPtr NativeFieldInfoPtr_SpellLifeLeechFactor;
	private static readonly IntPtr NativeFieldInfoPtr_AffectRecovery;

	public ModifiableFloat PrimaryLeechFactor;

	public ModifiableFloat PhysicalLifeLeechFactor;

	public ModifiableFloat SpellLifeLeechFactor;

	public bool AffectRecovery;
}
```
