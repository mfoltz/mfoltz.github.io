---
nav_exclude: true
search_exclude: true
---

# ReplaceAbilityOnSlotWhenMountedBuffModificationElement

```csharp
public struct ReplaceAbilityOnSlotWhenMountedBuffModificationElement
{
	static ReplaceAbilityOnSlotWhenMountedBuffModificationElement()
	{
		Il2CppClassPointerStore<ReplaceAbilityOnSlotWhenMountedBuffModificationElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ReplaceAbilityOnSlotWhenMountedBuffModificationElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ReplaceAbilityOnSlotWhenMountedBuffModificationElement>.NativeClassPtr);
		ReplaceAbilityOnSlotWhenMountedBuffModificationElement.NativeFieldInfoPtr_ModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceAbilityOnSlotWhenMountedBuffModificationElement>.NativeClassPtr, "ModId");
		ReplaceAbilityOnSlotWhenMountedBuffModificationElement.NativeFieldInfoPtr_AbilitySlotIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceAbilityOnSlotWhenMountedBuffModificationElement>.NativeClassPtr, "AbilitySlotIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ReplaceAbilityOnSlotWhenMountedBuffModificationElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ModId;
	private static readonly IntPtr NativeFieldInfoPtr_AbilitySlotIndex;

	public ModificationId ModId;

	public int AbilitySlotIndex;
}
```
