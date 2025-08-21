---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SpiderCocoon_DataShared
{
	static SpiderCocoon_DataShared()
	{
		Il2CppClassPointerStore<SpiderCocoon_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "SpiderCocoon_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpiderCocoon_DataShared>.NativeClassPtr);
		SpiderCocoon_DataShared.NativeFieldInfoPtr_SpawnChance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderCocoon_DataShared>.NativeClassPtr, "SpawnChance");
		SpiderCocoon_DataShared.NativeFieldInfoPtr_IsProximityActivated = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderCocoon_DataShared>.NativeClassPtr, "IsProximityActivated");
		SpiderCocoon_DataShared.NativeFieldInfoPtr_IsProximityActivatedChance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderCocoon_DataShared>.NativeClassPtr, "IsProximityActivatedChance");
		SpiderCocoon_DataShared.NativeFieldInfoPtr_ProximityRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderCocoon_DataShared>.NativeClassPtr, "ProximityRadius");
		SpiderCocoon_DataShared.NativeFieldInfoPtr_ProximityActivationTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderCocoon_DataShared>.NativeClassPtr, "ProximityActivationTime");
		SpiderCocoon_DataShared.NativeFieldInfoPtr_LifetimeBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderCocoon_DataShared>.NativeClassPtr, "LifetimeBuff");
		SpiderCocoon_DataShared.NativeFieldInfoPtr_ActivatedSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderCocoon_DataShared>.NativeClassPtr, "ActivatedSequence");
		SpiderCocoon_DataShared.NativeFieldInfoPtr_ActivatedSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderCocoon_DataShared>.NativeClassPtr, "ActivatedSequenceState");
		SpiderCocoon_DataShared.NativeFieldInfoPtr_Activated = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderCocoon_DataShared>.NativeClassPtr, "Activated");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpiderCocoon_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnChance;
	private static readonly IntPtr NativeFieldInfoPtr_IsProximityActivated;
	private static readonly IntPtr NativeFieldInfoPtr_IsProximityActivatedChance;
	private static readonly IntPtr NativeFieldInfoPtr_ProximityRadius;
	private static readonly IntPtr NativeFieldInfoPtr_ProximityActivationTime;
	private static readonly IntPtr NativeFieldInfoPtr_LifetimeBuff;
	private static readonly IntPtr NativeFieldInfoPtr_ActivatedSequence;
	private static readonly IntPtr NativeFieldInfoPtr_ActivatedSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_Activated;

	public float SpawnChance;

	public bool IsProximityActivated;

	public float IsProximityActivatedChance;

	public float ProximityRadius;

	public float ProximityActivationTime;

	public PrefabGUID LifetimeBuff;

	public SequenceGUID ActivatedSequence;

	public SequenceState ActivatedSequenceState;

	public bool Activated;
}
```
