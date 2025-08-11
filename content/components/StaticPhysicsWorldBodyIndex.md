---
nav_exclude: true
search_exclude: true
---

# StaticPhysicsWorldBodyIndex

```csharp
public struct StaticPhysicsWorldBodyIndex
{
	static StaticPhysicsWorldBodyIndex()
	{
		Il2CppClassPointerStore<StaticPhysicsWorldBodyIndex>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics.Systems", "StaticPhysicsWorldBodyIndex");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StaticPhysicsWorldBodyIndex>.NativeClassPtr);
		StaticPhysicsWorldBodyIndex.NativeFieldInfoPtr_WorldBodyIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticPhysicsWorldBodyIndex>.NativeClassPtr, "WorldBodyIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StaticPhysicsWorldBodyIndex>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WorldBodyIndex;

	public int WorldBodyIndex;
}
```
