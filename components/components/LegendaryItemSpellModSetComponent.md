---
nav_exclude: true
search_exclude: true
---

# LegendaryItemSpellModSetComponent

```csharp
[StructLayout(2)]
public struct LegendaryItemSpellModSetComponent
{
	static LegendaryItemSpellModSetComponent()
	{
		Il2CppClassPointerStore<LegendaryItemSpellModSetComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "LegendaryItemSpellModSetComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LegendaryItemSpellModSetComponent>.NativeClassPtr);
		LegendaryItemSpellModSetComponent.NativeFieldInfoPtr_StatMods = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LegendaryItemSpellModSetComponent>.NativeClassPtr, "StatMods");
		LegendaryItemSpellModSetComponent.NativeFieldInfoPtr_AbilityMods0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LegendaryItemSpellModSetComponent>.NativeClassPtr, "AbilityMods0");
		LegendaryItemSpellModSetComponent.NativeFieldInfoPtr_AbilityMods1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LegendaryItemSpellModSetComponent>.NativeClassPtr, "AbilityMods1");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LegendaryItemSpellModSetComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StatMods;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityMods0;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityMods1;
	[FieldOffset(0)]
	public SpellModSet StatMods;
	[FieldOffset(72)]
	public SpellModSet AbilityMods0;
	[FieldOffset(144)]
	public SpellModSet AbilityMods1;
}
