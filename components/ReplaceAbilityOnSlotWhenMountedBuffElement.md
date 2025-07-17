---
nav_exclude: true
search_exclude: true
---

# ReplaceAbilityOnSlotWhenMountedBuffElement

```csharp
public struct ReplaceAbilityOnSlotWhenMountedBuffElement
{
	static ReplaceAbilityOnSlotWhenMountedBuffElement()
	{
		Il2CppClassPointerStore<ReplaceAbilityOnSlotWhenMountedBuffElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ReplaceAbilityOnSlotWhenMountedBuffElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ReplaceAbilityOnSlotWhenMountedBuffElement>.NativeClassPtr);
		ReplaceAbilityOnSlotWhenMountedBuffElement.NativeFieldInfoPtr_AbilitySlotIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceAbilityOnSlotWhenMountedBuffElement>.NativeClassPtr, "AbilitySlotIndex");
		ReplaceAbilityOnSlotWhenMountedBuffElement.NativeFieldInfoPtr_NewGroupId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceAbilityOnSlotWhenMountedBuffElement>.NativeClassPtr, "NewGroupId");
		ReplaceAbilityOnSlotWhenMountedBuffElement.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceAbilityOnSlotWhenMountedBuffElement>.NativeClassPtr, "Priority");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ReplaceAbilityOnSlotWhenMountedBuffElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilitySlotIndex;
	private static readonly IntPtr NativeFieldInfoPtr_NewGroupId;
	private static readonly IntPtr NativeFieldInfoPtr_Priority;

	public int AbilitySlotIndex;

	public PrefabGUID NewGroupId;

	public int Priority;
}
```
