---
nav_exclude: true
search_exclude: true
---

```csharp
public struct OngoingModification
{
	static OngoingModification()
	{
		Il2CppClassPointerStore<OngoingModification>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "OngoingModification");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OngoingModification>.NativeClassPtr);
		OngoingModification.NativeFieldInfoPtr_Modifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OngoingModification>.NativeClassPtr, "Modifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OngoingModification>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Modifier;

	public Entity Modifier;
}
```
