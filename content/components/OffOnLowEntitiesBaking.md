---
nav_exclude: true
search_exclude: true
---

```csharp
public struct OffOnLowEntitiesBaking
{
	static OffOnLowEntitiesBaking()
	{
		Il2CppClassPointerStore<OffOnLowEntitiesBaking>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "", "OffOnLowEntitiesBaking");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OffOnLowEntitiesBaking>.NativeClassPtr);
		OffOnLowEntitiesBaking.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OffOnLowEntitiesBaking>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OffOnLowEntitiesBaking>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;

	public Entity Entity;
}
```
