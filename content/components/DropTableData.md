---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DropTableData
{
	static DropTableData()
	{
		Il2CppClassPointerStore<DropTableData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DropTableData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DropTableData>.NativeClassPtr);
		DropTableData.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableData>.NativeClassPtr, "Guid");
		DropTableData.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableData>.NativeClassPtr, "Entity");
		DropTableData.NativeFieldInfoPtr_DropTableLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableData>.NativeClassPtr, "DropTableLevel");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DropTableData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_DropTableLevel;

	public PrefabGUID Guid;

	public Entity Entity;

	public int DropTableLevel;
}
```

## Server Systems

- [GameDataSystem]({{% relref "systems/server/GameDataSystem.md" %}})

## Client Systems

- [GameDataSystem]({{% relref "systems/client/GameDataSystem.md" %}})
