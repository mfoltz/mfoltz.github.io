---
nav_exclude: true
search_exclude: true
---

```csharp
public struct OccluderVertex
{
	static OccluderVertex()
	{
		Il2CppClassPointerStore<OccluderVertex>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "OccluderVertex");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OccluderVertex>.NativeClassPtr);
		OccluderVertex.NativeFieldInfoPtr_Vertex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OccluderVertex>.NativeClassPtr, "Vertex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OccluderVertex>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Vertex;

	public float3 Vertex;
}
```
