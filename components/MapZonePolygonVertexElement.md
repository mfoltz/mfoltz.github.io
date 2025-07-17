---
nav_exclude: true
search_exclude: true
---

# MapZonePolygonVertexElement

```csharp
[StructLayout(2)]
public struct MapZonePolygonVertexElement
{
	static MapZonePolygonVertexElement()
	{
		Il2CppClassPointerStore<MapZonePolygonVertexElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "MapZonePolygonVertexElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MapZonePolygonVertexElement>.NativeClassPtr);
		MapZonePolygonVertexElement.NativeFieldInfoPtr_VertexPos = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZonePolygonVertexElement>.NativeClassPtr, "VertexPos");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MapZonePolygonVertexElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VertexPos;
	[FieldOffset(0)]
	public float2 VertexPos;
}
