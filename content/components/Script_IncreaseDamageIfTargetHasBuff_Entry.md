---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_IncreaseDamageIfTargetHasBuff_Entry
{
	static Script_IncreaseDamageIfTargetHasBuff_Entry()
	{
		Il2CppClassPointerStore<Script_IncreaseDamageIfTargetHasBuff_Entry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_IncreaseDamageIfTargetHasBuff_Entry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_IncreaseDamageIfTargetHasBuff_Entry>.NativeClassPtr);
		Script_IncreaseDamageIfTargetHasBuff_Entry.NativeFieldInfoPtr_DamageFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IncreaseDamageIfTargetHasBuff_Entry>.NativeClassPtr, "DamageFactor");
		Script_IncreaseDamageIfTargetHasBuff_Entry.NativeFieldInfoPtr_DamageType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IncreaseDamageIfTargetHasBuff_Entry>.NativeClassPtr, "DamageType");
		Script_IncreaseDamageIfTargetHasBuff_Entry.NativeFieldInfoPtr_BaseMultiply = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IncreaseDamageIfTargetHasBuff_Entry>.NativeClassPtr, "BaseMultiply");
		Script_IncreaseDamageIfTargetHasBuff_Entry.NativeFieldInfoPtr_LimitToType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IncreaseDamageIfTargetHasBuff_Entry>.NativeClassPtr, "LimitToType");
		Script_IncreaseDamageIfTargetHasBuff_Entry.NativeFieldInfoPtr_DamageListenerId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IncreaseDamageIfTargetHasBuff_Entry>.NativeClassPtr, "DamageListenerId");
		Script_IncreaseDamageIfTargetHasBuff_Entry.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IncreaseDamageIfTargetHasBuff_Entry>.NativeClassPtr, "Condition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_IncreaseDamageIfTargetHasBuff_Entry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DamageFactor;
	private static readonly IntPtr NativeFieldInfoPtr_DamageType;
	private static readonly IntPtr NativeFieldInfoPtr_BaseMultiply;
	private static readonly IntPtr NativeFieldInfoPtr_LimitToType;
	private static readonly IntPtr NativeFieldInfoPtr_DamageListenerId;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;

	public float DamageFactor;

	public MainDamageType DamageType;

	public bool BaseMultiply;

	public bool LimitToType;

	public ListenerId DamageListenerId;

	public BlobAssetReference<ConditionBlob> Condition;
}
```
