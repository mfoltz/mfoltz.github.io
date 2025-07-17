---
nav_exclude: true
search_exclude: true
---

# NavigateToViewEvent

```csharp
public struct NavigateToViewEvent
{
	static NavigateToViewEvent()
	{
		Il2CppClassPointerStore<NavigateToViewEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.UI", "NavigateToViewEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NavigateToViewEvent>.NativeClassPtr);
		NavigateToViewEvent.NativeFieldInfoPtr_Location = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NavigateToViewEvent>.NativeClassPtr, "Location");
		NavigateToViewEvent.NativeFieldInfoPtr_InitDataEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NavigateToViewEvent>.NativeClassPtr, "InitDataEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NavigateToViewEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Location;
	private static readonly IntPtr NativeFieldInfoPtr_InitDataEntity;

	public ViewLocation Location;

	public Entity InitDataEntity;
}
```
