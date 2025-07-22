---
nav_exclude: true
search_exclude: false
---

# MinionMasterStats

```csharp
public struct MinionMasterStats
{
	static MinionMasterStats()
	{
		Il2CppClassPointerStore<MinionMasterStats>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MinionMasterStats");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MinionMasterStats>.NativeClassPtr);
		MinionMasterStats.NativeFieldInfoPtr_MinionDamageModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MinionMasterStats>.NativeClassPtr, "MinionDamageModifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MinionMasterStats>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinionDamageModifier;

	public ModifiableFloat MinionDamageModifier;
}
```
