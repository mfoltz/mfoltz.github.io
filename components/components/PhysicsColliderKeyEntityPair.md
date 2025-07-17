---
nav_exclude: true
search_exclude: true
---

# PhysicsColliderKeyEntityPair

```csharp
[StructLayout(2)]
public struct PhysicsColliderKeyEntityPair
{
	static PhysicsColliderKeyEntityPair()
	{
		Il2CppClassPointerStore<PhysicsColliderKeyEntityPair>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics", "PhysicsColliderKeyEntityPair");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsColliderKeyEntityPair>.NativeClassPtr);
		PhysicsColliderKeyEntityPair.NativeFieldInfoPtr_Key = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsColliderKeyEntityPair>.NativeClassPtr, "Key");
		PhysicsColliderKeyEntityPair.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsColliderKeyEntityPair>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsColliderKeyEntityPair>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Key;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public ColliderKey Key;
	[FieldOffset(4)]
	public Entity Entity;
}
