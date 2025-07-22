---
nav_exclude: true
search_exclude: false
---

# Vision

```csharp
public struct Vision
{
	static Vision()
	{
		Il2CppClassPointerStore<Vision>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Vision");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Vision>.NativeClassPtr);
		Vision.NativeFieldInfoPtr_Range = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Vision>.NativeClassPtr, "Range");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Vision>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Range;

	public ModifiableFloat Range;
}
```
