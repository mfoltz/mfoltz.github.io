---
nav_exclude: true
search_exclude: true
---

```csharp
public struct KillAllMinionsEvent
{
	static KillAllMinionsEvent()
	{
		Il2CppClassPointerStore<KillAllMinionsEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "KillAllMinionsEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<KillAllMinionsEvent>.NativeClassPtr);
		KillAllMinionsEvent.NativeFieldInfoPtr_MasterEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<KillAllMinionsEvent>.NativeClassPtr, "MasterEntity");
		KillAllMinionsEvent.NativeFieldInfoPtr_IsDowned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<KillAllMinionsEvent>.NativeClassPtr, "IsDowned");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<KillAllMinionsEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MasterEntity;
	private static readonly IntPtr NativeFieldInfoPtr_IsDowned;

	public Entity MasterEntity;

	public bool IsDowned;
}
```

## Server Systems

- [KillAllMinionsEventSystem]({{% relref "systems/server/KillAllMinionsEventSystem.md" %}})
