---
nav_exclude: true
search_exclude: true
---

# PhysicsColliderBakedData

```csharp
public struct PhysicsColliderBakedData
{
	static PhysicsColliderBakedData()
	{
		Il2CppClassPointerStore<PhysicsColliderBakedData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.Hybrid.dll", "Unity.Physics.Authoring", "PhysicsColliderBakedData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsColliderBakedData>.NativeClassPtr);
		PhysicsColliderBakedData.NativeFieldInfoPtr_Hash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsColliderBakedData>.NativeClassPtr, "Hash");
		PhysicsColliderBakedData.NativeFieldInfoPtr_BodyEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsColliderBakedData>.NativeClassPtr, "BodyEntity");
		PhysicsColliderBakedData.NativeFieldInfoPtr_ChildEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsColliderBakedData>.NativeClassPtr, "ChildEntity");
		PhysicsColliderBakedData.NativeFieldInfoPtr_BodyFromShape = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsColliderBakedData>.NativeClassPtr, "BodyFromShape");
		PhysicsColliderBakedData.NativeFieldInfoPtr_Transform = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsColliderBakedData>.NativeClassPtr, "Transform");
		PhysicsColliderBakedData.NativeFieldInfoPtr_IsLeafEntityBody = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsColliderBakedData>.NativeClassPtr, "IsLeafEntityBody");
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsColliderBakedData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Hash;
	private static readonly IntPtr NativeFieldInfoPtr_BodyEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ChildEntity;
	private static readonly IntPtr NativeFieldInfoPtr_BodyFromShape;
	private static readonly IntPtr NativeFieldInfoPtr_Transform;
	private static readonly IntPtr NativeFieldInfoPtr_IsLeafEntityBody;

	public Unity.Entities.Hash128 Hash;

	public Entity BodyEntity;

	public Entity ChildEntity;

	public RigidTransform BodyFromShape;

	public UnityObjectRef<Transform> Transform;

	public bool IsLeafEntityBody;
}
```
