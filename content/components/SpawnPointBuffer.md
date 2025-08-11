---
nav_exclude: true
search_exclude: true
---

# SpawnPointBuffer

```csharp
public struct SpawnPointBuffer
{
	static SpawnPointBuffer()
	{
		Il2CppClassPointerStore<SpawnPointBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM", "SpawnPointBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnPointBuffer>.NativeClassPtr);
		SpawnPointBuffer.NativeFieldInfoPtr_WorldPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnPointBuffer>.NativeClassPtr, "WorldPosition");
		SpawnPointBuffer.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnPointBuffer>.NativeClassPtr, "Rotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnPointBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WorldPosition;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;

	public float3 WorldPosition;

	public quaternion Rotation;
}
```
