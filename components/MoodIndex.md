---
nav_exclude: true
search_exclude: false
---

# MoodIndex

```csharp
public struct MoodIndex
{
	static MoodIndex()
	{
		Il2CppClassPointerStore<MoodIndex>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Presentation.Systems.dll", "ProjectM.Presentation", "MoodIndex");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MoodIndex>.NativeClassPtr);
		MoodIndex.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoodIndex>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MoodIndex>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public int Value;
}
```
