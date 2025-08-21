---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TheMonsterGeneratorActiveBuff
{
	static TheMonsterGeneratorActiveBuff()
	{
		Il2CppClassPointerStore<TheMonsterGeneratorActiveBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TheMonsterGeneratorActiveBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TheMonsterGeneratorActiveBuff>.NativeClassPtr);
		TheMonsterGeneratorActiveBuff.NativeFieldInfoPtr_GeneratorEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TheMonsterGeneratorActiveBuff>.NativeClassPtr, "GeneratorEntity");
		TheMonsterGeneratorActiveBuff.NativeFieldInfoPtr_HasInitializedGenerator = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TheMonsterGeneratorActiveBuff>.NativeClassPtr, "HasInitializedGenerator");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TheMonsterGeneratorActiveBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GeneratorEntity;
	private static readonly IntPtr NativeFieldInfoPtr_HasInitializedGenerator;

	public Entity GeneratorEntity;

	public bool HasInitializedGenerator;
}
```

## Server Systems

- [TheMonsterGeneratorBuffSystem_Spawn]({{% relref "systems/server/TheMonsterGeneratorBuffSystem_Spawn.md" %}})
- [TheMonsterGeneratorBuffSystem_Update]({{% relref "systems/server/TheMonsterGeneratorBuffSystem_Update.md" %}})
