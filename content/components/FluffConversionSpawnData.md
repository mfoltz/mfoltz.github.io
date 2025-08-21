---
nav_exclude: true
search_exclude: true
---

```csharp
public struct FluffConversionSpawnData
{
	static FluffConversionSpawnData()
	{
		Il2CppClassPointerStore<FluffConversionSpawnData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "FluffConversionSpawnData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FluffConversionSpawnData>.NativeClassPtr);
		FluffConversionSpawnData.NativeFieldInfoPtr_Spawn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FluffConversionSpawnData>.NativeClassPtr, "Spawn");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FluffConversionSpawnData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Spawn;

	public float4x4 Spawn;
}
```
