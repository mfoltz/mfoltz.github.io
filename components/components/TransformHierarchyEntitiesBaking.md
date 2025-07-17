---
nav_exclude: true
search_exclude: true
---

# TransformHierarchyEntitiesBaking

```csharp
[StructLayout(2)]
public struct TransformHierarchyEntitiesBaking
{
	static TransformHierarchyEntitiesBaking()
	{
		Il2CppClassPointerStore<TransformHierarchyEntitiesBaking>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TransformHierarchyEntitiesBaking");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TransformHierarchyEntitiesBaking>.NativeClassPtr);
		TransformHierarchyEntitiesBaking.NativeFieldInfoPtr_RootWorldToLocal = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransformHierarchyEntitiesBaking>.NativeClassPtr, "RootWorldToLocal");
		TransformHierarchyEntitiesBaking.NativeFieldInfoPtr_TransformLocalToWorld = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransformHierarchyEntitiesBaking>.NativeClassPtr, "TransformLocalToWorld");
		TransformHierarchyEntitiesBaking.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransformHierarchyEntitiesBaking>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TransformHierarchyEntitiesBaking>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RootWorldToLocal;
	private static readonly IntPtr NativeFieldInfoPtr_TransformLocalToWorld;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public float4x4 RootWorldToLocal;
	[FieldOffset(64)]
	public float4x4 TransformLocalToWorld;
	[FieldOffset(128)]
	public Entity Entity;
}
