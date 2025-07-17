---
nav_exclude: true
search_exclude: true
---

# StudioListener

```csharp
public struct StudioListener
{
	static StudioListener()
	{
		Il2CppClassPointerStore<StudioListener>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Audio", "StudioListener");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StudioListener>.NativeClassPtr);
		StudioListener.NativeFieldInfoPtr_EarPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StudioListener>.NativeClassPtr, "EarPosition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StudioListener>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EarPosition;

	public float3 EarPosition;
}
```
