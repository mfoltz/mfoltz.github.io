---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_WerewolfChieftain_ToggleGates_DataShared
{
	static Script_WerewolfChieftain_ToggleGates_DataShared()
	{
		Il2CppClassPointerStore<Script_WerewolfChieftain_ToggleGates_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_WerewolfChieftain_ToggleGates_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_WerewolfChieftain_ToggleGates_DataShared>.NativeClassPtr);
		Script_WerewolfChieftain_ToggleGates_DataShared.NativeFieldInfoPtr_MakeActivate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WerewolfChieftain_ToggleGates_DataShared>.NativeClassPtr, "MakeActivate");
		Script_WerewolfChieftain_ToggleGates_DataShared.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WerewolfChieftain_ToggleGates_DataShared>.NativeClassPtr, "Radius");
		Script_WerewolfChieftain_ToggleGates_DataShared.NativeFieldInfoPtr_MinionSpawner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_WerewolfChieftain_ToggleGates_DataShared>.NativeClassPtr, "MinionSpawner");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_WerewolfChieftain_ToggleGates_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MakeActivate;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_MinionSpawner;

	public bool MakeActivate;

	public float Radius;

	public PrefabGUID MinionSpawner;
}
```
