---
nav_exclude: true
search_exclude: true
---

# Buff_ApplyBuffOnDamageTypeDealt_DataShared

```csharp
[StructLayout(2)]
public struct Buff_ApplyBuffOnDamageTypeDealt_DataShared
{
	static Buff_ApplyBuffOnDamageTypeDealt_DataShared()
	{
		Il2CppClassPointerStore<Buff_ApplyBuffOnDamageTypeDealt_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Buff_ApplyBuffOnDamageTypeDealt_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Buff_ApplyBuffOnDamageTypeDealt_DataShared>.NativeClassPtr);
		Buff_ApplyBuffOnDamageTypeDealt_DataShared.NativeFieldInfoPtr_ProcChance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_ApplyBuffOnDamageTypeDealt_DataShared>.NativeClassPtr, "ProcChance");
		Buff_ApplyBuffOnDamageTypeDealt_DataShared.NativeFieldInfoPtr_ProcBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_ApplyBuffOnDamageTypeDealt_DataShared>.NativeClassPtr, "ProcBuff");
		Buff_ApplyBuffOnDamageTypeDealt_DataShared.NativeFieldInfoPtr_OnDamageDealtListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_ApplyBuffOnDamageTypeDealt_DataShared>.NativeClassPtr, "OnDamageDealtListener");
		Buff_ApplyBuffOnDamageTypeDealt_DataShared.NativeFieldInfoPtr_DamageType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_ApplyBuffOnDamageTypeDealt_DataShared>.NativeClassPtr, "DamageType");
		Buff_ApplyBuffOnDamageTypeDealt_DataShared.NativeFieldInfoPtr_ImpactSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_ApplyBuffOnDamageTypeDealt_DataShared>.NativeClassPtr, "ImpactSequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Buff_ApplyBuffOnDamageTypeDealt_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ProcChance;
	private static readonly IntPtr NativeFieldInfoPtr_ProcBuff;
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageDealtListener;
	private static readonly IntPtr NativeFieldInfoPtr_DamageType;
	private static readonly IntPtr NativeFieldInfoPtr_ImpactSequence;
	[FieldOffset(0)]
	public float ProcChance;
	[FieldOffset(4)]
	public PrefabGUID ProcBuff;
	[FieldOffset(8)]
	public ListenerId OnDamageDealtListener;
	[FieldOffset(16)]
	public MainDamageType DamageType;
	[FieldOffset(20)]
	public SequenceGUID ImpactSequence;
}
