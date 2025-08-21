---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BuffBuffer
{
	static BuffBuffer()
	{
		Il2CppClassPointerStore<BuffBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BuffBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuffBuffer>.NativeClassPtr);
		BuffBuffer.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffBuffer>.NativeClassPtr, "Entity");
		BuffBuffer.NativeFieldInfoPtr_PrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffBuffer>.NativeClassPtr, "PrefabGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuffBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGuid;

	public Entity Entity;

	public PrefabGUID PrefabGuid;
}
```

## Server Systems

- [CheckInSunSystem]({{% relref "systems/server/CheckInSunSystem.md" %}})
