---
nav_exclude: true
search_exclude: true
---

```csharp
public struct HapticVibration
{
	static HapticVibration()
	{
		Il2CppClassPointerStore<HapticVibration>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Haptics", "HapticVibration");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HapticVibration>.NativeClassPtr);
		HapticVibration.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HapticVibration>.NativeClassPtr, "Type");
		HapticVibration.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HapticVibration>.NativeClassPtr, "Duration");
		HapticVibration.NativeFieldInfoPtr_AmplitudeFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HapticVibration>.NativeClassPtr, "AmplitudeFactor");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HapticVibration>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_AmplitudeFactor;

	public VibrationType Type;

	public float Duration;

	public float AmplitudeFactor;
}
```
