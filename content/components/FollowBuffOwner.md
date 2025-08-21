---
nav_exclude: true
search_exclude: true
---

```csharp
public struct FollowBuffOwner
{
	static FollowBuffOwner()
	{
		Il2CppClassPointerStore<FollowBuffOwner>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "FollowBuffOwner");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FollowBuffOwner>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FollowBuffOwner>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [Apply_BuffModificationsSystem_Server]({{% relref "systems/server/Apply_BuffModificationsSystem_Server.md" %}})
- [Cleanup_BuffModificationsSystem_Server]({{% relref "systems/server/Cleanup_BuffModificationsSystem_Server.md" %}})
- [Destroy_BuffModificationsSystem_Server]({{% relref "systems/server/Destroy_BuffModificationsSystem_Server.md" %}})
