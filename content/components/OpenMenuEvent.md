---
nav_exclude: true
search_exclude: true
---

```csharp
public struct OpenMenuEvent
{
	static OpenMenuEvent()
	{
		Il2CppClassPointerStore<OpenMenuEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.UI", "OpenMenuEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OpenMenuEvent>.NativeClassPtr);
		OpenMenuEvent.NativeFieldInfoPtr_Menu = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OpenMenuEvent>.NativeClassPtr, "Menu");
		OpenMenuEvent.NativeFieldInfoPtr_InitDataEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OpenMenuEvent>.NativeClassPtr, "InitDataEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OpenMenuEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Menu;
	private static readonly IntPtr NativeFieldInfoPtr_InitDataEntity;

	public HUDMenuType Menu;

	public Entity InitDataEntity;
}
```

## Client Systems

- [OpenHUDMenuSystem]({{% relref "systems/client/OpenHUDMenuSystem.md" %}})
