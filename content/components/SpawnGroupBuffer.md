---
nav_exclude: true
search_exclude: true
---

# SpawnGroupBuffer

```csharp
public struct SpawnGroupBuffer
{
	static SpawnGroupBuffer()
	{
		Il2CppClassPointerStore<SpawnGroupBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM", "SpawnGroupBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnGroupBuffer>.NativeClassPtr);
		SpawnGroupBuffer.NativeFieldInfoPtr_SpawnGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnGroupBuffer>.NativeClassPtr, "SpawnGroup");
		SpawnGroupBuffer.NativeFieldInfoPtr_Ratio = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnGroupBuffer>.NativeClassPtr, "Ratio");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnGroupBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnGroup;
	private static readonly IntPtr NativeFieldInfoPtr_Ratio;

	public Entity SpawnGroup;

	public float Ratio;
}
```
