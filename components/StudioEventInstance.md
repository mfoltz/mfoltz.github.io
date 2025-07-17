---
nav_exclude: true
search_exclude: true
---

# StudioEventInstance

```csharp
public struct StudioEventInstance
{
	static StudioEventInstance()
	{
		Il2CppClassPointerStore<StudioEventInstance>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Audio", "StudioEventInstance");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StudioEventInstance>.NativeClassPtr);
		StudioEventInstance.NativeFieldInfoPtr_Master = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StudioEventInstance>.NativeClassPtr, "Master");
		StudioEventInstance.NativeFieldInfoPtr_Controller = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StudioEventInstance>.NativeClassPtr, "Controller");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StudioEventInstance>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Master;
	private static readonly IntPtr NativeFieldInfoPtr_Controller;

	public EventInstanceParams Master;

	public EventInstanceParams Controller;
}
```
