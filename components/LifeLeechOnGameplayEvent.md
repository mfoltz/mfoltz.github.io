# LifeLeechOnGameplayEvent

```csharp
[Serializable]
[StructLayout(2)]
public struct LifeLeechOnGameplayEvent
{
	static LifeLeechOnGameplayEvent()
	{
		Il2CppClassPointerStore<LifeLeechOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "LifeLeechOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LifeLeechOnGameplayEvent>.NativeClassPtr);
		LifeLeechOnGameplayEvent.NativeFieldInfoPtr_Factor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LifeLeechOnGameplayEvent>.NativeClassPtr, "Factor");
		LifeLeechOnGameplayEvent.NativeFieldInfoPtr_EventIdIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LifeLeechOnGameplayEvent>.NativeClassPtr, "EventIdIndex");
		LifeLeechOnGameplayEvent.NativeFieldInfoPtr_EventIdCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LifeLeechOnGameplayEvent>.NativeClassPtr, "EventIdCount");
		LifeLeechOnGameplayEvent.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LifeLeechOnGameplayEvent>.NativeClassPtr, "Condition");
		LifeLeechOnGameplayEvent.NativeFieldInfoPtr_LifeLeechSettingsGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LifeLeechOnGameplayEvent>.NativeClassPtr, "LifeLeechSettingsGuid");
		LifeLeechOnGameplayEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LifeLeechOnGameplayEvent>.NativeClassPtr, "Target");
		LifeLeechOnGameplayEvent.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LifeLeechOnGameplayEvent>.NativeClassPtr, 100668287);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 85316, XrefRangeEnd = 85322, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LifeLeechOnGameplayEvent.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LifeLeechOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Factor;
	private static readonly IntPtr NativeFieldInfoPtr_EventIdIndex;
	private static readonly IntPtr NativeFieldInfoPtr_EventIdCount;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_LifeLeechSettingsGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;
	[FieldOffset(0)]
	public float Factor;
	[FieldOffset(4)]
	public int EventIdIndex;
	[FieldOffset(8)]
	public int EventIdCount;
	[FieldOffset(16)]
	public BlobAssetReference<ConditionBlob> Condition;
	[FieldOffset(24)]
	public PrefabGUID LifeLeechSettingsGuid;
	[FieldOffset(28)]
	public LifeLeechTarget Target;
}
