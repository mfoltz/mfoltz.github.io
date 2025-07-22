---
nav_exclude: true
search_exclude: false
---

# RingAoE_DataShared

```csharp
public struct RingAoE_DataShared
{
	static RingAoE_DataShared()
	{
		Il2CppClassPointerStore<RingAoE_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "RingAoE_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RingAoE_DataShared>.NativeClassPtr);
		RingAoE_DataShared.NativeFieldInfoPtr_StartRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RingAoE_DataShared>.NativeClassPtr, "StartRadius");
		RingAoE_DataShared.NativeFieldInfoPtr_EndRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RingAoE_DataShared>.NativeClassPtr, "EndRadius");
		RingAoE_DataShared.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RingAoE_DataShared>.NativeClassPtr, "Duration");
		RingAoE_DataShared.NativeFieldInfoPtr_RingThickness = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RingAoE_DataShared>.NativeClassPtr, "RingThickness");
		RingAoE_DataShared.NativeFieldInfoPtr_TimeBetweenHits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RingAoE_DataShared>.NativeClassPtr, "TimeBetweenHits");
		RingAoE_DataShared.NativeFieldInfoPtr_Height = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RingAoE_DataShared>.NativeClassPtr, "Height");
		RingAoE_DataShared.NativeFieldInfoPtr_RingSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RingAoE_DataShared>.NativeClassPtr, "RingSequence");
		RingAoE_DataShared.NativeFieldInfoPtr_RingSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RingAoE_DataShared>.NativeClassPtr, "RingSequenceState");
		RingAoE_DataShared.NativeFieldInfoPtr_GameplayEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RingAoE_DataShared>.NativeClassPtr, "GameplayEventId");
		RingAoE_DataShared.NativeFieldInfoPtr_HitFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RingAoE_DataShared>.NativeClassPtr, "HitFilter");
		RingAoE_DataShared.NativeFieldInfoPtr_IgnoreTerrainCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RingAoE_DataShared>.NativeClassPtr, "IgnoreTerrainCollision");
		RingAoE_DataShared.NativeFieldInfoPtr_IgnoreLineOfSight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RingAoE_DataShared>.NativeClassPtr, "IgnoreLineOfSight");
		RingAoE_DataShared.NativeFieldInfoPtr_IgnoreAILineOfSight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RingAoE_DataShared>.NativeClassPtr, "IgnoreAILineOfSight");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RingAoE_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StartRadius;
	private static readonly IntPtr NativeFieldInfoPtr_EndRadius;
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_RingThickness;
	private static readonly IntPtr NativeFieldInfoPtr_TimeBetweenHits;
	private static readonly IntPtr NativeFieldInfoPtr_Height;
	private static readonly IntPtr NativeFieldInfoPtr_RingSequence;
	private static readonly IntPtr NativeFieldInfoPtr_RingSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEventId;
	private static readonly IntPtr NativeFieldInfoPtr_HitFilter;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreTerrainCollision;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreLineOfSight;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreAILineOfSight;

	public float StartRadius;

	public float EndRadius;

	public float Duration;

	public float RingThickness;

	public float TimeBetweenHits;

	public float Height;

	public SequenceGUID RingSequence;

	public SequenceState RingSequenceState;

	public GameplayEventId GameplayEventId;

	public HitFilter HitFilter;

	public bool IgnoreTerrainCollision;

	public bool IgnoreLineOfSight;

	public bool IgnoreAILineOfSight;
}
```
