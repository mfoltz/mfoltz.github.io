---
nav_exclude: true
search_exclude: true
---

# BehaviourTreeBinding

```csharp
public struct BehaviourTreeBinding
{
	static BehaviourTreeBinding()
	{
		Il2CppClassPointerStore<BehaviourTreeBinding>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Behaviours", "BehaviourTreeBinding");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BehaviourTreeBinding>.NativeClassPtr);
		BehaviourTreeBinding.NativeFieldInfoPtr_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeBinding>.NativeClassPtr, "PrefabGUID");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BehaviourTreeBinding>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGUID;

	public PrefabGUID PrefabGUID;
}
```

## Server Systems

- [BehaviourTreeBindingSystem_Spawn](/systems/server/BehaviourTreeBindingSystem_Spawn)
