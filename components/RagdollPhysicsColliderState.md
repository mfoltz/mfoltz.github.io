---
nav_exclude: true
search_exclude: true
---

# RagdollPhysicsColliderState

```csharp
public struct RagdollPhysicsColliderState
{
	static RagdollPhysicsColliderState()
	{
		Il2CppClassPointerStore<RagdollPhysicsColliderState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RagdollPhysicsColliderState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RagdollPhysicsColliderState>.NativeClassPtr);
		RagdollPhysicsColliderState.NativeFieldInfoPtr_Collider = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollPhysicsColliderState>.NativeClassPtr, "Collider");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RagdollPhysicsColliderState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Collider;

	public BlobAssetReference<Collider> Collider;
}
```
