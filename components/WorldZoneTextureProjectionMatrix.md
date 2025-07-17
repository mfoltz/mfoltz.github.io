---
nav_exclude: true
search_exclude: true
---

# WorldZoneTextureProjectionMatrix

```csharp
[StructLayout(2)]
public struct WorldZoneTextureProjectionMatrix
{
	static WorldZoneTextureProjectionMatrix()
	{
		Il2CppClassPointerStore<WorldZoneTextureProjectionMatrix>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "WorldZoneTextureProjectionMatrix");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorldZoneTextureProjectionMatrix>.NativeClassPtr);
		WorldZoneTextureProjectionMatrix.NativeFieldInfoPtr_ProjectionMatrix = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldZoneTextureProjectionMatrix>.NativeClassPtr, "ProjectionMatrix");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorldZoneTextureProjectionMatrix>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ProjectionMatrix;
	[FieldOffset(0)]
	public float4x4 ProjectionMatrix;
}
