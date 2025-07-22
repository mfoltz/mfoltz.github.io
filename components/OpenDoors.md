---
nav_exclude: true
search_exclude: false
---

# OpenDoors

```csharp
public struct OpenDoors
{
	static OpenDoors()
	{
		Il2CppClassPointerStore<OpenDoors>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "OpenDoors");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OpenDoors>.NativeClassPtr);
		OpenDoors.NativeFieldInfoPtr_Range = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OpenDoors>.NativeClassPtr, "Range");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OpenDoors>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Range;

	public float Range;
}
```
