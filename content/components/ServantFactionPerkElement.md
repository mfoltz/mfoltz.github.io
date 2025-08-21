---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ServantFactionPerkElement
{
	static ServantFactionPerkElement()
	{
		Il2CppClassPointerStore<ServantFactionPerkElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServantFactionPerkElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantFactionPerkElement>.NativeClassPtr);
		ServantFactionPerkElement.NativeFieldInfoPtr_Perk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantFactionPerkElement>.NativeClassPtr, "Perk");
		ServantFactionPerkElement.NativeFieldInfoPtr_Faction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantFactionPerkElement>.NativeClassPtr, "Faction");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantFactionPerkElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Perk;
	private static readonly IntPtr NativeFieldInfoPtr_Faction;

	public PrefabGUID Perk;

	public FactionEnum Faction;
}
```
