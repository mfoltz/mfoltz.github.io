---
nav_exclude: true
search_exclude: false
---

# PhysicsColliderAuthoringData

```csharp
public struct PhysicsColliderAuthoringData
{
	static PhysicsColliderAuthoringData()
	{
		Il2CppClassPointerStore<PhysicsColliderAuthoringData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.Hybrid.dll", "Unity.Physics.Authoring", "PhysicsColliderAuthoringData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsColliderAuthoringData>.NativeClassPtr);
		PhysicsColliderAuthoringData.NativeFieldInfoPtr_ShapeComputationalData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsColliderAuthoringData>.NativeClassPtr, "ShapeComputationalData");
		PhysicsColliderAuthoringData.NativeFieldInfoPtr_BlobIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsColliderAuthoringData>.NativeClassPtr, "BlobIndex");
		PhysicsColliderAuthoringData.NativeFieldInfoPtr_RecalculateBlob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsColliderAuthoringData>.NativeClassPtr, "RecalculateBlob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsColliderAuthoringData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ShapeComputationalData;
	private static readonly IntPtr NativeFieldInfoPtr_BlobIndex;
	private static readonly IntPtr NativeFieldInfoPtr_RecalculateBlob;

	public ShapeComputationDataBaking ShapeComputationalData;

	public int BlobIndex;

	public bool RecalculateBlob;
}
```
