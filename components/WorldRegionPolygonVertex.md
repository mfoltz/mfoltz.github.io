# WorldRegionPolygonVertex

```csharp
[StructLayout(2)]
public struct WorldRegionPolygonVertex
{
	static WorldRegionPolygonVertex()
	{
		Il2CppClassPointerStore<WorldRegionPolygonVertex>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "WorldRegionPolygonVertex");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorldRegionPolygonVertex>.NativeClassPtr);
		WorldRegionPolygonVertex.NativeFieldInfoPtr_VertexPos = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldRegionPolygonVertex>.NativeClassPtr, "VertexPos");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorldRegionPolygonVertex>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VertexPos;
	[FieldOffset(0)]
	public float2 VertexPos;
}
