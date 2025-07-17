---
nav_exclude: true
search_exclude: true
---

# OnSpawnedCallback

```csharp
public struct OnSpawnedCallback
{
	static OnSpawnedCallback()
	{
		Il2CppClassPointerStore<OnSpawnedCallback>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Scripting", "OnSpawnedCallback");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OnSpawnedCallback>.NativeClassPtr);
		OnSpawnedCallback.NativeFieldInfoPtr_CallerEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OnSpawnedCallback>.NativeClassPtr, "CallerEntity");
		OnSpawnedCallback.NativeFieldInfoPtr_SpawnedEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OnSpawnedCallback>.NativeClassPtr, "SpawnedEntity");
		OnSpawnedCallback.NativeFieldInfoPtr_FunctionHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OnSpawnedCallback>.NativeClassPtr, "FunctionHash");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OnSpawnedCallback>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CallerEntity;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnedEntity;
	private static readonly IntPtr NativeFieldInfoPtr_FunctionHash;

	public Entity CallerEntity;

	public Entity SpawnedEntity;

	public int FunctionHash;
}
```
