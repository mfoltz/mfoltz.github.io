---
nav_exclude: true
search_exclude: true
---

```csharp
public struct RegisterBehaviourTreeStateBuff
{
	static RegisterBehaviourTreeStateBuff()
	{
		Il2CppClassPointerStore<RegisterBehaviourTreeStateBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Behaviours", "RegisterBehaviourTreeStateBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RegisterBehaviourTreeStateBuff>.NativeClassPtr);
		RegisterBehaviourTreeStateBuff.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterBehaviourTreeStateBuff>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RegisterBehaviourTreeStateBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;

	public Entity Entity;
}
```

## Server Systems

- [BehaviourTreeStateBuffsSystem_RegisterAndDestroy]({{% relref "systems/server/BehaviourTreeStateBuffsSystem_RegisterAndDestroy.md" %}})
