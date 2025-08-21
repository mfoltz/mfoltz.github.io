---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SequencerParticle
{
	static SequencerParticle()
	{
		Il2CppClassPointerStore<SequencerParticle>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer", "SequencerParticle");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SequencerParticle>.NativeClassPtr);
		SequencerParticle.NativeFieldInfoPtr_TimeCreated = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequencerParticle>.NativeClassPtr, "TimeCreated");
		SequencerParticle.NativeFieldInfoPtr_LocalToWorld = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequencerParticle>.NativeClassPtr, "LocalToWorld");
		SequencerParticle.NativeFieldInfoPtr_LocalScale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequencerParticle>.NativeClassPtr, "LocalScale");
		SequencerParticle.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequencerParticle>.NativeClassPtr, "State");
		SequencerParticle.NativeFieldInfoPtr_HiddenLastFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequencerParticle>.NativeClassPtr, "HiddenLastFrame");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SequencerParticle>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TimeCreated;
	private static readonly IntPtr NativeFieldInfoPtr_LocalToWorld;
	private static readonly IntPtr NativeFieldInfoPtr_LocalScale;
	private static readonly IntPtr NativeFieldInfoPtr_State;
	private static readonly IntPtr NativeFieldInfoPtr_HiddenLastFrame;

	public double TimeCreated;

	public LocalToWorld LocalToWorld;

	public float3 LocalScale;

	public ParticleState State;

	public bool HiddenLastFrame;
}
```

## Client Systems

- [ParticleBudgetSystem]({{% relref "systems/client/ParticleBudgetSystem.md" %}})
