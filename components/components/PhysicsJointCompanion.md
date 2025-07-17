---
nav_exclude: true
search_exclude: true
---

# PhysicsJointCompanion

```csharp
[StructLayout(2)]
public struct PhysicsJointCompanion
{
	static PhysicsJointCompanion()
	{
		Il2CppClassPointerStore<PhysicsJointCompanion>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics", "PhysicsJointCompanion");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsJointCompanion>.NativeClassPtr);
		PhysicsJointCompanion.NativeFieldInfoPtr_JointEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsJointCompanion>.NativeClassPtr, "JointEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsJointCompanion>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_JointEntity;
	[FieldOffset(0)]
	public Entity JointEntity;
}
