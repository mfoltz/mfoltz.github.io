---
nav_exclude: true
search_exclude: true
---

```csharp
public struct WarEvent_NetworkedPortal
{
	static WarEvent_NetworkedPortal()
	{
		Il2CppClassPointerStore<WarEvent_NetworkedPortal>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WarEvents", "WarEvent_NetworkedPortal");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WarEvent_NetworkedPortal>.NativeClassPtr);
		WarEvent_NetworkedPortal.NativeFieldInfoPtr_Progress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedPortal>.NativeClassPtr, "Progress");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WarEvent_NetworkedPortal>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Progress;

	public float Progress;
}
```
