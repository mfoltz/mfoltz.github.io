---
nav_exclude: true
search_exclude: true
---

# SnappingPointCollider

```csharp
public struct SnappingPointCollider
{
	static SnappingPointCollider()
	{
		Il2CppClassPointerStore<SnappingPointCollider>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Tiles", "SnappingPointCollider");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SnappingPointCollider>.NativeClassPtr);
		SnappingPointCollider.NativeFieldInfoPtr_SnappingPointIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SnappingPointCollider>.NativeClassPtr, "SnappingPointIndex");
		SnappingPointCollider.NativeFieldInfoPtr_Collider = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SnappingPointCollider>.NativeClassPtr, "Collider");
		SnappingPointCollider.NativeFieldInfoPtr_ColliderLocalTranslation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SnappingPointCollider>.NativeClassPtr, "ColliderLocalTranslation");
		SnappingPointCollider.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SnappingPointCollider>.NativeClassPtr, "Priority");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SnappingPointCollider>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SnappingPointIndex;
	private static readonly IntPtr NativeFieldInfoPtr_Collider;
	private static readonly IntPtr NativeFieldInfoPtr_ColliderLocalTranslation;
	private static readonly IntPtr NativeFieldInfoPtr_Priority;

	public int SnappingPointIndex;

	public BlobAssetReference<Collider> Collider;

	public Translation ColliderLocalTranslation;

	public int Priority;
}
```
