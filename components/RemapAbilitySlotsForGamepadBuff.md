---
nav_exclude: true
search_exclude: false
---

# RemapAbilitySlotsForGamepadBuff

```csharp
public struct RemapAbilitySlotsForGamepadBuff
{
	static RemapAbilitySlotsForGamepadBuff()
	{
		Il2CppClassPointerStore<RemapAbilitySlotsForGamepadBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RemapAbilitySlotsForGamepadBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RemapAbilitySlotsForGamepadBuff>.NativeClassPtr);
		RemapAbilitySlotsForGamepadBuff.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RemapAbilitySlotsForGamepadBuff>.NativeClassPtr, "Priority");
		RemapAbilitySlotsForGamepadBuff.NativeFieldInfoPtr_Remappings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RemapAbilitySlotsForGamepadBuff>.NativeClassPtr, "Remappings");
		RemapAbilitySlotsForGamepadBuff.NativeFieldInfoPtr_ModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RemapAbilitySlotsForGamepadBuff>.NativeClassPtr, "ModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RemapAbilitySlotsForGamepadBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Priority;
	private static readonly IntPtr NativeFieldInfoPtr_Remappings;
	private static readonly IntPtr NativeFieldInfoPtr_ModId;

	public int Priority;

	public BlobAssetReference<AbilityButtonInputActionRemappings> Remappings;

	public ModificationId ModId;
}
```
