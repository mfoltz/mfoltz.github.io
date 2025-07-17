---
nav_exclude: true
search_exclude: true
---

# TerrainEditorPrefabToken

```csharp
[StructLayout(2)]
public struct TerrainEditorPrefabToken
{
	static TerrainEditorPrefabToken()
	{
		Il2CppClassPointerStore<TerrainEditorPrefabToken>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain.Editor", "TerrainEditorPrefabToken");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainEditorPrefabToken>.NativeClassPtr);
		TerrainEditorPrefabToken.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainEditorPrefabToken>.NativeClassPtr, "Guid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainEditorPrefabToken>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	[FieldOffset(0)]
	public Guid Guid;
}
