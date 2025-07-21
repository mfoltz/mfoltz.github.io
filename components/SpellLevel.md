---
nav_exclude: true
search_exclude: false
---

# SpellLevel

```csharp
public struct SpellLevel
{
	static SpellLevel()
	{
		Il2CppClassPointerStore<SpellLevel>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpellLevel");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellLevel>.NativeClassPtr);
		SpellLevel.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellLevel>.NativeClassPtr, "Level");
		SpellLevel.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellLevel>.NativeClassPtr, "ModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellLevel>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Level;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;

	public float Level;

	public ModificationId ModificationId;
}
```
