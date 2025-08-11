---
nav_exclude: true
search_exclude: true
---

# FluffInstanceEnabled

```csharp
public struct FluffInstanceEnabled
{
	static FluffInstanceEnabled()
	{
		Il2CppClassPointerStore<FluffInstanceEnabled>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "FluffInstanceEnabled");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FluffInstanceEnabled>.NativeClassPtr);
		FluffInstanceEnabled.NativeFieldInfoPtr_Enabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FluffInstanceEnabled>.NativeClassPtr, "Enabled");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FluffInstanceEnabled>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Enabled;

	public bool Enabled;
}
```
