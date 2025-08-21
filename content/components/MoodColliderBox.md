---
nav_exclude: true
search_exclude: true
---

```csharp
public struct MoodColliderBox
{
	static MoodColliderBox()
	{
		Il2CppClassPointerStore<MoodColliderBox>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "MoodColliderBox");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MoodColliderBox>.NativeClassPtr);
		MoodColliderBox.NativeFieldInfoPtr_Size = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoodColliderBox>.NativeClassPtr, "Size");
		MoodColliderBox.NativeFieldInfoPtr_FadeDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoodColliderBox>.NativeClassPtr, "FadeDistance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MoodColliderBox>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Size;
	private static readonly IntPtr NativeFieldInfoPtr_FadeDistance;

	public float3 Size;

	public float FadeDistance;
}
```
