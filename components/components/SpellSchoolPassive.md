---
nav_exclude: true
search_exclude: true
---

# SpellSchoolPassive

```csharp
[StructLayout(2)]
public struct SpellSchoolPassive
{
	static SpellSchoolPassive()
	{
		Il2CppClassPointerStore<SpellSchoolPassive>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpellSchoolPassive");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellSchoolPassive>.NativeClassPtr);
		SpellSchoolPassive.NativeFieldInfoPtr_Passive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellSchoolPassive>.NativeClassPtr, "Passive");
		SpellSchoolPassive.NativeFieldInfoPtr_Tier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellSchoolPassive>.NativeClassPtr, "Tier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellSchoolPassive>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Passive;
	private static readonly IntPtr NativeFieldInfoPtr_Tier;
	[FieldOffset(0)]
	public PrefabGUID Passive;
	[FieldOffset(4)]
	public SpellSchoolProgressionTier Tier;
}
