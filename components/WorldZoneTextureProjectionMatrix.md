---
nav_exclude: true
search_exclude: false
---

# WorldZoneTextureProjectionMatrix

```csharp
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

	public float4x4 ProjectionMatrix;
}
```
