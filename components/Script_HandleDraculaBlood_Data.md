---
nav_exclude: true
search_exclude: true
---

# Script_HandleDraculaBlood_Data

```csharp
public struct Script_HandleDraculaBlood_Data
{
	static Script_HandleDraculaBlood_Data()
	{
		Il2CppClassPointerStore<Script_HandleDraculaBlood_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_HandleDraculaBlood_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_HandleDraculaBlood_Data>.NativeClassPtr);
		Script_HandleDraculaBlood_Data.NativeFieldInfoPtr_PrimaryBloodType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HandleDraculaBlood_Data>.NativeClassPtr, "PrimaryBloodType");
		Script_HandleDraculaBlood_Data.NativeFieldInfoPtr_SecondaryBloodType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HandleDraculaBlood_Data>.NativeClassPtr, "SecondaryBloodType");
		Script_HandleDraculaBlood_Data.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HandleDraculaBlood_Data>.NativeClassPtr, "Value");
		Script_HandleDraculaBlood_Data.NativeFieldInfoPtr_PrimaryQuality = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HandleDraculaBlood_Data>.NativeClassPtr, "PrimaryQuality");
		Script_HandleDraculaBlood_Data.NativeFieldInfoPtr_SecondaryQuality = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HandleDraculaBlood_Data>.NativeClassPtr, "SecondaryQuality");
		Script_HandleDraculaBlood_Data.NativeFieldInfoPtr_SecondaryBuffIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HandleDraculaBlood_Data>.NativeClassPtr, "SecondaryBuffIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_HandleDraculaBlood_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrimaryBloodType;
	private static readonly IntPtr NativeFieldInfoPtr_SecondaryBloodType;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_PrimaryQuality;
	private static readonly IntPtr NativeFieldInfoPtr_SecondaryQuality;
	private static readonly IntPtr NativeFieldInfoPtr_SecondaryBuffIndex;

	public PrefabGUID PrimaryBloodType;

	public PrefabGUID SecondaryBloodType;

	public float Value;

	public float PrimaryQuality;

	public float SecondaryQuality;

	public byte SecondaryBuffIndex;
}
```
