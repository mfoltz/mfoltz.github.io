---
nav_exclude: true
search_exclude: true
---

# ArmorLevel

```csharp
public struct ArmorLevel
{
	static ArmorLevel()
	{
		Il2CppClassPointerStore<ArmorLevel>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ArmorLevel");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ArmorLevel>.NativeClassPtr);
		ArmorLevel.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ArmorLevel>.NativeClassPtr, "Level");
		ArmorLevel.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ArmorLevel>.NativeClassPtr, "ModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ArmorLevel>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Level;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;

	public float Level;

	public ModificationId ModificationId;
}
```

## Server Systems

- [ProjectM.Gameplay.Systems.ArmorLevelSystem_Destroy](/systems/ProjectM.Gameplay.Systems.ArmorLevelSystem_Destroy)
- [ProjectM.Gameplay.Systems.ArmorLevelSystem_Spawn](/systems/ProjectM.Gameplay.Systems.ArmorLevelSystem_Spawn)
