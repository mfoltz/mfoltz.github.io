---
nav_exclude: true
search_exclude: true
---

```csharp
public struct GlobalParticleEmissionData
{
	static GlobalParticleEmissionData()
	{
		Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer", "GlobalParticleEmissionData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr);
		GlobalParticleEmissionData.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "Time");
		GlobalParticleEmissionData.NativeFieldInfoPtr_LastEmitOverTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "LastEmitOverTime");
		GlobalParticleEmissionData.NativeFieldInfoPtr_EmissionRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "EmissionRate");
		GlobalParticleEmissionData.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "Duration");
		GlobalParticleEmissionData.NativeFieldInfoPtr_StartDelay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "StartDelay");
		GlobalParticleEmissionData.NativeFieldInfoPtr_Burst0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "Burst0");
		GlobalParticleEmissionData.NativeFieldInfoPtr_Burst1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "Burst1");
		GlobalParticleEmissionData.NativeFieldInfoPtr_Burst2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "Burst2");
		GlobalParticleEmissionData.NativeFieldInfoPtr_Burst3 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "Burst3");
		GlobalParticleEmissionData.NativeFieldInfoPtr_BurstsCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "BurstsCount");
		GlobalParticleEmissionData.NativeFieldInfoPtr_DelayDone = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "DelayDone");
		GlobalParticleEmissionData.NativeFieldInfoPtr_Dead = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "Dead");
		GlobalParticleEmissionData.NativeFieldInfoPtr_Looping = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "Looping");
		GlobalParticleEmissionData.NativeFieldInfoPtr_Burst0Played = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "Burst0Played");
		GlobalParticleEmissionData.NativeFieldInfoPtr_Burst1Played = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "Burst1Played");
		GlobalParticleEmissionData.NativeFieldInfoPtr_Burst2Played = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "Burst2Played");
		GlobalParticleEmissionData.NativeFieldInfoPtr_Burst3Played = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, "Burst3Played");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GlobalParticleEmissionData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	private static readonly IntPtr NativeFieldInfoPtr_LastEmitOverTime;
	private static readonly IntPtr NativeFieldInfoPtr_EmissionRate;
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_StartDelay;
	private static readonly IntPtr NativeFieldInfoPtr_Burst0;
	private static readonly IntPtr NativeFieldInfoPtr_Burst1;
	private static readonly IntPtr NativeFieldInfoPtr_Burst2;
	private static readonly IntPtr NativeFieldInfoPtr_Burst3;
	private static readonly IntPtr NativeFieldInfoPtr_BurstsCount;
	private static readonly IntPtr NativeFieldInfoPtr_DelayDone;
	private static readonly IntPtr NativeFieldInfoPtr_Dead;
	private static readonly IntPtr NativeFieldInfoPtr_Looping;
	private static readonly IntPtr NativeFieldInfoPtr_Burst0Played;
	private static readonly IntPtr NativeFieldInfoPtr_Burst1Played;
	private static readonly IntPtr NativeFieldInfoPtr_Burst2Played;
	private static readonly IntPtr NativeFieldInfoPtr_Burst3Played;

	public float Time;

	public float LastEmitOverTime;

	public float EmissionRate;

	public float Duration;

	public float StartDelay;

	public float2 Burst0;

	public float2 Burst1;

	public float2 Burst2;

	public float2 Burst3;

	public byte BurstsCount;

	public bool DelayDone;

	public bool Dead;

	public bool Looping;

	public bool Burst0Played;

	public bool Burst1Played;

	public bool Burst2Played;

	public bool Burst3Played;
}
```
