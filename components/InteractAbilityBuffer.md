---
nav_exclude: true
search_exclude: true
---

# InteractAbilityBuffer

```csharp
public struct InteractAbilityBuffer
{
	static InteractAbilityBuffer()
	{
		Il2CppClassPointerStore<InteractAbilityBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "InteractAbilityBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InteractAbilityBuffer>.NativeClassPtr);
		InteractAbilityBuffer.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InteractAbilityBuffer>.NativeClassPtr, "Condition");
		InteractAbilityBuffer.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InteractAbilityBuffer>.NativeClassPtr, "Ability");
		InteractAbilityBuffer.NativeFieldInfoPtr_Importance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InteractAbilityBuffer>.NativeClassPtr, "Importance");
		InteractAbilityBuffer.NativeFieldInfoPtr_HideInteractHUDWhileCasting = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InteractAbilityBuffer>.NativeClassPtr, "HideInteractHUDWhileCasting");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InteractAbilityBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_Ability;
	private static readonly IntPtr NativeFieldInfoPtr_Importance;
	private static readonly IntPtr NativeFieldInfoPtr_HideInteractHUDWhileCasting;

	public BlobAssetReference<ConditionBlob> Condition;

	public PrefabGUID Ability;

	public int Importance;

	public bool HideInteractHUDWhileCasting;
}
```
