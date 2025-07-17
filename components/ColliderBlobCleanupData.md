---
nav_exclude: true
search_exclude: true
---

# ColliderBlobCleanupData

```csharp
[StructLayout(2)]
public struct ColliderBlobCleanupData
{
	static ColliderBlobCleanupData()
	{
		Il2CppClassPointerStore<ColliderBlobCleanupData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics", "ColliderBlobCleanupData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ColliderBlobCleanupData>.NativeClassPtr);
		ColliderBlobCleanupData.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ColliderBlobCleanupData>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ColliderBlobCleanupData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public BlobAssetReference<Collider> Value;
}
