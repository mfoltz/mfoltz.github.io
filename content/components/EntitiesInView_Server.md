---
nav_exclude: true
search_exclude: true
---

```csharp
public struct EntitiesInView_Server
{
	static EntitiesInView_Server()
	{
		Il2CppClassPointerStore<EntitiesInView_Server>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EntitiesInView_Server");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EntitiesInView_Server>.NativeClassPtr);
		EntitiesInView_Server.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntitiesInView_Server>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EntitiesInView_Server>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;

	public Entity Entity;
}
```
