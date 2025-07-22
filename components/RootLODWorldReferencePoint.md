---
nav_exclude: true
search_exclude: false
---

# RootLODWorldReferencePoint

```csharp
public struct RootLODWorldReferencePoint
{
	static RootLODWorldReferencePoint()
	{
		Il2CppClassPointerStore<RootLODWorldReferencePoint>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "RootLODWorldReferencePoint");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RootLODWorldReferencePoint>.NativeClassPtr);
		RootLODWorldReferencePoint.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RootLODWorldReferencePoint>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RootLODWorldReferencePoint>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float3 Value;
}
```

## Client Systems

- [AddLODRequirementComponents](/systems/client/AddLODRequirementComponents)
- [LODRequirementsUpdateSystem](/systems/client/LODRequirementsUpdateSystem)
