---
nav_exclude: true
search_exclude: false
---

# Script_ApplyBuffWhenDamageDealt_DataServer

```csharp
public struct Script_ApplyBuffWhenDamageDealt_DataServer
{
	static Script_ApplyBuffWhenDamageDealt_DataServer()
	{
		Il2CppClassPointerStore<Script_ApplyBuffWhenDamageDealt_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_ApplyBuffWhenDamageDealt_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_ApplyBuffWhenDamageDealt_DataServer>.NativeClassPtr);
		Script_ApplyBuffWhenDamageDealt_DataServer.NativeFieldInfoPtr_BuffId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffWhenDamageDealt_DataServer>.NativeClassPtr, "BuffId");
		Script_ApplyBuffWhenDamageDealt_DataServer.NativeFieldInfoPtr_DamageListenerId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffWhenDamageDealt_DataServer>.NativeClassPtr, "DamageListenerId");
		Script_ApplyBuffWhenDamageDealt_DataServer.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffWhenDamageDealt_DataServer>.NativeClassPtr, "Condition");
		Script_ApplyBuffWhenDamageDealt_DataServer.NativeFieldInfoPtr_ProcChance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffWhenDamageDealt_DataServer>.NativeClassPtr, "ProcChance");
		Script_ApplyBuffWhenDamageDealt_DataServer.NativeFieldInfoPtr_ApplyOnTargetInsteadOfOwner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffWhenDamageDealt_DataServer>.NativeClassPtr, "ApplyOnTargetInsteadOfOwner");
		Script_ApplyBuffWhenDamageDealt_DataServer.NativeFieldInfoPtr_OnlyTriggerOnCriticalHit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffWhenDamageDealt_DataServer>.NativeClassPtr, "OnlyTriggerOnCriticalHit");
		Script_ApplyBuffWhenDamageDealt_DataServer.NativeFieldInfoPtr_OnlyTriggerOnSpecificDamageType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffWhenDamageDealt_DataServer>.NativeClassPtr, "OnlyTriggerOnSpecificDamageType");
		Script_ApplyBuffWhenDamageDealt_DataServer.NativeFieldInfoPtr_DamageType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffWhenDamageDealt_DataServer>.NativeClassPtr, "DamageType");
		Script_ApplyBuffWhenDamageDealt_DataServer.NativeFieldInfoPtr_RandomizeBuffFromList = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffWhenDamageDealt_DataServer>.NativeClassPtr, "RandomizeBuffFromList");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_ApplyBuffWhenDamageDealt_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffId;
	private static readonly IntPtr NativeFieldInfoPtr_DamageListenerId;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_ProcChance;
	private static readonly IntPtr NativeFieldInfoPtr_ApplyOnTargetInsteadOfOwner;
	private static readonly IntPtr NativeFieldInfoPtr_OnlyTriggerOnCriticalHit;
	private static readonly IntPtr NativeFieldInfoPtr_OnlyTriggerOnSpecificDamageType;
	private static readonly IntPtr NativeFieldInfoPtr_DamageType;
	private static readonly IntPtr NativeFieldInfoPtr_RandomizeBuffFromList;

	public PrefabGUID BuffId;

	public ListenerId DamageListenerId;

	public BlobAssetReference<ConditionBlob> Condition;

	public float ProcChance;

	public bool ApplyOnTargetInsteadOfOwner;

	public bool OnlyTriggerOnCriticalHit;

	public bool OnlyTriggerOnSpecificDamageType;

	public MainDamageType DamageType;

	public bool RandomizeBuffFromList;
}
```
