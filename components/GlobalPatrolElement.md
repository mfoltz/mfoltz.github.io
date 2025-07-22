---
nav_exclude: true
search_exclude: false
---

# GlobalPatrolElement

```csharp
public struct GlobalPatrolElement
{
	static GlobalPatrolElement()
	{
		Il2CppClassPointerStore<GlobalPatrolElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "GlobalPatrolElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GlobalPatrolElement>.NativeClassPtr);
		GlobalPatrolElement.NativeFieldInfoPtr_GlobalPatrolEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalPatrolElement>.NativeClassPtr, "GlobalPatrolEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GlobalPatrolElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GlobalPatrolEntity;

	public Entity GlobalPatrolEntity;
}
```
