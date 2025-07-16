# Script_ApplyBuffUnderThreeHealthThreshholds_DataServer

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public float HealthFactor1;
	[FieldOffset(4)]
	public float HealthFactor2;
	[FieldOffset(8)]
	public float HealthFactor3;
	[FieldOffset(12)]
	public PrefabGUID NewBuffEntity;
	[FieldOffset(16)]
	public ListenerId OnDamageTakenListener;
	[FieldOffset(24)]
	[MarshalAs(4)]
	public bool ThresholdMet1;
	[FieldOffset(25)]
	[MarshalAs(4)]
	public bool ThresholdMet2;
	[FieldOffset(26)]
	[MarshalAs(4)]
	public bool ThresholdMet3;
}
