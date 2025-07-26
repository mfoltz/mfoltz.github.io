---
nav_exclude: true
search_exclude: true
---

# Script_ApplyBuffUnderThreeHealthThreshholds_DataServer

```csharp
public struct Script_ApplyBuffUnderThreeHealthThreshholds_DataServer
{
	static Script_ApplyBuffUnderThreeHealthThreshholds_DataServer()
	{
		Il2CppClassPointerStore<Script_ApplyBuffUnderThreeHealthThreshholds_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_ApplyBuffUnderThreeHealthThreshholds_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_ApplyBuffUnderThreeHealthThreshholds_DataServer>.NativeClassPtr);
		Script_ApplyBuffUnderThreeHealthThreshholds_DataServer.NativeFieldInfoPtr_HealthFactor1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffUnderThreeHealthThreshholds_DataServer>.NativeClassPtr, "HealthFactor1");
		Script_ApplyBuffUnderThreeHealthThreshholds_DataServer.NativeFieldInfoPtr_HealthFactor2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffUnderThreeHealthThreshholds_DataServer>.NativeClassPtr, "HealthFactor2");
		Script_ApplyBuffUnderThreeHealthThreshholds_DataServer.NativeFieldInfoPtr_HealthFactor3 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffUnderThreeHealthThreshholds_DataServer>.NativeClassPtr, "HealthFactor3");
		Script_ApplyBuffUnderThreeHealthThreshholds_DataServer.NativeFieldInfoPtr_NewBuffEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffUnderThreeHealthThreshholds_DataServer>.NativeClassPtr, "NewBuffEntity");
		Script_ApplyBuffUnderThreeHealthThreshholds_DataServer.NativeFieldInfoPtr_OnDamageTakenListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffUnderThreeHealthThreshholds_DataServer>.NativeClassPtr, "OnDamageTakenListener");
		Script_ApplyBuffUnderThreeHealthThreshholds_DataServer.NativeFieldInfoPtr_ThresholdMet1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffUnderThreeHealthThreshholds_DataServer>.NativeClassPtr, "ThresholdMet1");
		Script_ApplyBuffUnderThreeHealthThreshholds_DataServer.NativeFieldInfoPtr_ThresholdMet2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffUnderThreeHealthThreshholds_DataServer>.NativeClassPtr, "ThresholdMet2");
		Script_ApplyBuffUnderThreeHealthThreshholds_DataServer.NativeFieldInfoPtr_ThresholdMet3 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffUnderThreeHealthThreshholds_DataServer>.NativeClassPtr, "ThresholdMet3");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_ApplyBuffUnderThreeHealthThreshholds_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HealthFactor1;
	private static readonly IntPtr NativeFieldInfoPtr_HealthFactor2;
	private static readonly IntPtr NativeFieldInfoPtr_HealthFactor3;
	private static readonly IntPtr NativeFieldInfoPtr_NewBuffEntity;
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageTakenListener;
	private static readonly IntPtr NativeFieldInfoPtr_ThresholdMet1;
	private static readonly IntPtr NativeFieldInfoPtr_ThresholdMet2;
	private static readonly IntPtr NativeFieldInfoPtr_ThresholdMet3;

	public float HealthFactor1;

	public float HealthFactor2;

	public float HealthFactor3;

	public PrefabGUID NewBuffEntity;

	public ListenerId OnDamageTakenListener;

	public bool ThresholdMet1;

	public bool ThresholdMet2;

	public bool ThresholdMet3;
}
```
