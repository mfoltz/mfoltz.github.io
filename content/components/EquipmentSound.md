---
nav_exclude: true
search_exclude: true
---

```csharp
public struct EquipmentSound
{
	static EquipmentSound()
	{
		Il2CppClassPointerStore<EquipmentSound>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "EquipmentSound");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EquipmentSound>.NativeClassPtr);
		EquipmentSound.NativeFieldInfoPtr_EquipSoundGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentSound>.NativeClassPtr, "EquipSoundGuid");
		EquipmentSound.NativeFieldInfoPtr_UnequipSoundGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentSound>.NativeClassPtr, "UnequipSoundGuid");
		EquipmentSound.NativeFieldInfoPtr_IsInit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentSound>.NativeClassPtr, "IsInit");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EquipmentSound>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EquipSoundGuid;
	private static readonly IntPtr NativeFieldInfoPtr_UnequipSoundGuid;
	private static readonly IntPtr NativeFieldInfoPtr_IsInit;

	public FmodEventGuid EquipSoundGuid;

	public FmodEventGuid UnequipSoundGuid;

	public bool IsInit;
}
```
