---
nav_exclude: true
search_exclude: false
---

# PathRecorderEntry

```csharp
public struct PathRecorderEntry
{
	static PathRecorderEntry()
	{
		Il2CppClassPointerStore<PathRecorderEntry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PathRecorderEntry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PathRecorderEntry>.NativeClassPtr);
		PathRecorderEntry.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRecorderEntry>.NativeClassPtr, "Position");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PathRecorderEntry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;

	public float2 Position;
}
```
