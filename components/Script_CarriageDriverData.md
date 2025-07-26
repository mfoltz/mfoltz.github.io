---
nav_exclude: true
search_exclude: true
---

# Script_CarriageDriverData

```csharp
public struct Script_CarriageDriverData
{
	static Script_CarriageDriverData()
	{
		Il2CppClassPointerStore<Script_CarriageDriverData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_CarriageDriverData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_CarriageDriverData>.NativeClassPtr);
		Script_CarriageDriverData.NativeFieldInfoPtr_DespawnBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CarriageDriverData>.NativeClassPtr, "DespawnBuff");
		Script_CarriageDriverData.NativeFieldInfoPtr_Triggered = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CarriageDriverData>.NativeClassPtr, "Triggered");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_CarriageDriverData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DespawnBuff;
	private static readonly IntPtr NativeFieldInfoPtr_Triggered;

	public PrefabGUID DespawnBuff;

	public bool Triggered;
}
```
