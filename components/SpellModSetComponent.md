---
nav_exclude: true
search_exclude: true
---

# SpellModSetComponent

```csharp
public struct SpellModSetComponent
{
	static SpellModSetComponent()
	{
		Il2CppClassPointerStore<SpellModSetComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "SpellModSetComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellModSetComponent>.NativeClassPtr);
		SpellModSetComponent.NativeFieldInfoPtr_SpellMods = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModSetComponent>.NativeClassPtr, "SpellMods");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellModSetComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellMods;

	public SpellModSet SpellMods;
}
```

## Client Systems

- [DetectJewelChangedSystem_Client](/systems/client/DetectJewelChangedSystem_Client)
