---
nav_exclude: true
search_exclude: true
---

# Script_ApplyBuffUnderHealthThreshold_DataServer

```csharp
public struct Script_ApplyBuffUnderHealthThreshold_DataServer
{
	static Script_ApplyBuffUnderHealthThreshold_DataServer()
	{
		Il2CppClassPointerStore<Script_ApplyBuffUnderHealthThreshold_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_ApplyBuffUnderHealthThreshold_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_ApplyBuffUnderHealthThreshold_DataServer>.NativeClassPtr);
		Script_ApplyBuffUnderHealthThreshold_DataServer.NativeFieldInfoPtr_HealthFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffUnderHealthThreshold_DataServer>.NativeClassPtr, "HealthFactor");
		Script_ApplyBuffUnderHealthThreshold_DataServer.NativeFieldInfoPtr_NewBuffEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffUnderHealthThreshold_DataServer>.NativeClassPtr, "NewBuffEntity");
		Script_ApplyBuffUnderHealthThreshold_DataServer.NativeFieldInfoPtr_TriggerSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffUnderHealthThreshold_DataServer>.NativeClassPtr, "TriggerSequence");
		Script_ApplyBuffUnderHealthThreshold_DataServer.NativeFieldInfoPtr_OnDamageTakenListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffUnderHealthThreshold_DataServer>.NativeClassPtr, "OnDamageTakenListener");
		Script_ApplyBuffUnderHealthThreshold_DataServer.NativeFieldInfoPtr_ThresholdMet = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffUnderHealthThreshold_DataServer>.NativeClassPtr, "ThresholdMet");
		Script_ApplyBuffUnderHealthThreshold_DataServer.NativeFieldInfoPtr_DontTriggerOnDots = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffUnderHealthThreshold_DataServer>.NativeClassPtr, "DontTriggerOnDots");
		Script_ApplyBuffUnderHealthThreshold_DataServer.NativeFieldInfoPtr_DontTriggerInFlight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffUnderHealthThreshold_DataServer>.NativeClassPtr, "DontTriggerInFlight");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_ApplyBuffUnderHealthThreshold_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HealthFactor;
	private static readonly IntPtr NativeFieldInfoPtr_NewBuffEntity;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerSequence;
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageTakenListener;
	private static readonly IntPtr NativeFieldInfoPtr_ThresholdMet;
	private static readonly IntPtr NativeFieldInfoPtr_DontTriggerOnDots;
	private static readonly IntPtr NativeFieldInfoPtr_DontTriggerInFlight;

	public float HealthFactor;

	public PrefabGUID NewBuffEntity;

	public SequenceGUID TriggerSequence;

	public ListenerId OnDamageTakenListener;

	public bool ThresholdMet;

	public bool DontTriggerOnDots;

	public bool DontTriggerInFlight;
}
```
