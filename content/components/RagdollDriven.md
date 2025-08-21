---
nav_exclude: true
search_exclude: true
---

```csharp
public struct RagdollDriven
{
	static RagdollDriven()
	{
		Il2CppClassPointerStore<RagdollDriven>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RagdollDriven");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RagdollDriven>.NativeClassPtr);
		RagdollDriven.NativeFieldInfoPtr_Initialized = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollDriven>.NativeClassPtr, "Initialized");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RagdollDriven>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Initialized;

	public bool Initialized;
}
```

## Client Systems

- [RagdollifySystem_Spawn]({{% relref "systems/client/RagdollifySystem_Spawn.md" %}})
