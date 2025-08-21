---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BuffResistances
{
	static BuffResistances()
	{
		Il2CppClassPointerStore<BuffResistances>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BuffResistances");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuffResistances>.NativeClassPtr);
		BuffResistances.NativeFieldInfoPtr_SettingsEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffResistances>.NativeClassPtr, "SettingsEntity");
		BuffResistances.NativeFieldInfoPtr_InitialSettingGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffResistances>.NativeClassPtr, "InitialSettingGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuffResistances>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SettingsEntity;
	private static readonly IntPtr NativeFieldInfoPtr_InitialSettingGuid;

	public ModifiableEntity SettingsEntity;

	public PrefabGUID InitialSettingGuid;
}
```

## Server Systems

- [BuffResistancesSpawnSystem]({{% relref "systems/server/BuffResistancesSpawnSystem.md" %}})
