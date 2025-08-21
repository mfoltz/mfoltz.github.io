---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ItemDataDropGroup
{
	static ItemDataDropGroup()
	{
		Il2CppClassPointerStore<ItemDataDropGroup>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ItemDataDropGroup");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ItemDataDropGroup>.NativeClassPtr);
		ItemDataDropGroup.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemDataDropGroup>.NativeClassPtr, "Entity");
		ItemDataDropGroup.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemDataDropGroup>.NativeClassPtr, "Guid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ItemDataDropGroup>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_Guid;

	public Entity Entity;

	public PrefabGUID Guid;
}
```

## Server Systems

- [GameDataSystem]({{% relref "systems/server/GameDataSystem.md" %}})

## Client Systems

- [GameDataSystem]({{% relref "systems/client/GameDataSystem.md" %}})
