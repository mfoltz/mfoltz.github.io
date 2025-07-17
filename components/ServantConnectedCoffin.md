---
nav_exclude: true
search_exclude: true
---

# ServantConnectedCoffin

```csharp
public struct ServantConnectedCoffin
{
	static ServantConnectedCoffin()
	{
		Il2CppClassPointerStore<ServantConnectedCoffin>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServantConnectedCoffin");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantConnectedCoffin>.NativeClassPtr);
		ServantConnectedCoffin.NativeFieldInfoPtr_CoffinEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantConnectedCoffin>.NativeClassPtr, "CoffinEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantConnectedCoffin>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CoffinEntity;

	public NetworkedEntity CoffinEntity;
}
```

## Server Systems

- [ProjectM.ServantSpawnSetupSystem](/systems/ProjectM.ServantSpawnSetupSystem)
