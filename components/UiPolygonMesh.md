---
nav_exclude: true
search_exclude: true
---

# UiPolygonMesh

```csharp
public struct UiPolygonMesh
{
	static UiPolygonMesh()
	{
		Il2CppClassPointerStore<UiPolygonMesh>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.UI", "UiPolygonMesh");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UiPolygonMesh>.NativeClassPtr);
		UiPolygonMesh.NativeFieldInfoPtr_Aabb = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UiPolygonMesh>.NativeClassPtr, "Aabb");
		UiPolygonMesh.NativeFieldInfoPtr_MeshIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UiPolygonMesh>.NativeClassPtr, "MeshIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UiPolygonMesh>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Aabb;
	private static readonly IntPtr NativeFieldInfoPtr_MeshIndex;

	public Aabb Aabb;

	public int MeshIndex;
}
```
