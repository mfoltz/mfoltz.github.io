---
nav_exclude: true
search_exclude: false
---

# LODGroupWorldReferencePoint

```csharp
public struct LODGroupWorldReferencePoint
{
	static LODGroupWorldReferencePoint()
	{
		Il2CppClassPointerStore<LODGroupWorldReferencePoint>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "LODGroupWorldReferencePoint");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LODGroupWorldReferencePoint>.NativeClassPtr);
		LODGroupWorldReferencePoint.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LODGroupWorldReferencePoint>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LODGroupWorldReferencePoint>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float3 Value;
}
```

## Client Systems

- [AddLODRequirementComponents](/systems/client/AddLODRequirementComponents)
- [LODRequirementsUpdateSystem](/systems/client/LODRequirementsUpdateSystem)
