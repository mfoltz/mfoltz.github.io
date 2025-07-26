---
nav_exclude: true
search_exclude: true
---

# CollisionRadius

```csharp
public struct CollisionRadius
{
	static CollisionRadius()
	{
		Il2CppClassPointerStore<CollisionRadius>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CollisionRadius");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CollisionRadius>.NativeClassPtr);
		CollisionRadius.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CollisionRadius>.NativeClassPtr, "Radius");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CollisionRadius>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;

	public float Radius;
}
```
