---
nav_exclude: true
search_exclude: true
---

# DoorChildren

```csharp
public struct DoorChildren
{
	static DoorChildren()
	{
		Il2CppClassPointerStore<DoorChildren>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DoorChildren");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DoorChildren>.NativeClassPtr);
		DoorChildren.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DoorChildren>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DoorChildren>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;

	public Entity Entity;
}
```
