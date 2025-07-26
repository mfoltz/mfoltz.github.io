---
nav_exclude: true
search_exclude: true
---

# PhysicsRenderEntity

```csharp
public struct PhysicsRenderEntity
{
	static PhysicsRenderEntity()
	{
		Il2CppClassPointerStore<PhysicsRenderEntity>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics.GraphicsIntegration", "PhysicsRenderEntity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsRenderEntity>.NativeClassPtr);
		PhysicsRenderEntity.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsRenderEntity>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsRenderEntity>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;

	public Entity Entity;
}
```
