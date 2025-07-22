---
nav_exclude: true
search_exclude: false
---

# FluffEditorSpawnData

```csharp
public struct FluffEditorSpawnData
{
	static FluffEditorSpawnData()
	{
		Il2CppClassPointerStore<FluffEditorSpawnData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "FluffEditorSpawnData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FluffEditorSpawnData>.NativeClassPtr);
		FluffEditorSpawnData.NativeFieldInfoPtr_Spawn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FluffEditorSpawnData>.NativeClassPtr, "Spawn");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FluffEditorSpawnData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Spawn;

	public float4x4 Spawn;
}
```
