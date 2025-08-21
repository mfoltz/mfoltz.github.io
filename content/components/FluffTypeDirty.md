---
nav_exclude: true
search_exclude: true
---

```csharp
public struct FluffTypeDirty
{
	static FluffTypeDirty()
	{
		Il2CppClassPointerStore<FluffTypeDirty>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "FluffTypeDirty");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FluffTypeDirty>.NativeClassPtr);
		FluffTypeDirty.NativeFieldInfoPtr_Dirty = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FluffTypeDirty>.NativeClassPtr, "Dirty");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FluffTypeDirty>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Dirty;

	public bool Dirty;
}
```
