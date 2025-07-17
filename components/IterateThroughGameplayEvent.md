---
nav_exclude: true
search_exclude: true
---

# IterateThroughGameplayEvent

```csharp
[StructLayout(2)]
public struct IterateThroughGameplayEvent
{
	static IterateThroughGameplayEvent()
	{
		Il2CppClassPointerStore<IterateThroughGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Shared", "IterateThroughGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<IterateThroughGameplayEvent>.NativeClassPtr);
		IterateThroughGameplayEvent.NativeFieldInfoPtr_TickEventData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IterateThroughGameplayEvent>.NativeClassPtr, "TickEventData");
		IterateThroughGameplayEvent.NativeFieldInfoPtr_EndIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IterateThroughGameplayEvent>.NativeClassPtr, "EndIndex");
		IterateThroughGameplayEvent.NativeFieldInfoPtr_CurrentCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IterateThroughGameplayEvent>.NativeClassPtr, "CurrentCount");
		IterateThroughGameplayEvent.NativeFieldInfoPtr_ResetOnBuffReapply = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IterateThroughGameplayEvent>.NativeClassPtr, "ResetOnBuffReapply");
		IterateThroughGameplayEvent.NativeMethodInfoPtr__ctor_Public_Void_IterateThroughGameplayEventAuthoring_IBaker_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<IterateThroughGameplayEvent>.NativeClassPtr, 100681389);
		IterateThroughGameplayEvent.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<IterateThroughGameplayEvent>.NativeClassPtr, 100681390);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 249268, RefRangeEnd = 249269, XrefRangeStart = 249224, XrefRangeEnd = 249268, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe IterateThroughGameplayEvent(IterateThroughGameplayEventAuthoring authoring, IBaker baker)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(authoring);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.Il2CppObjectBaseToPtr(baker);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(IterateThroughGameplayEvent.NativeMethodInfoPtr__ctor_Public_Void_IterateThroughGameplayEventAuthoring_IBaker_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 249269, XrefRangeEnd = 249275, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(IterateThroughGameplayEvent.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<IterateThroughGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TickEventData;
	private static readonly IntPtr NativeFieldInfoPtr_EndIndex;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentCount;
	private static readonly IntPtr NativeFieldInfoPtr_ResetOnBuffReapply;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_IterateThroughGameplayEventAuthoring_IBaker_0;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;
	[FieldOffset(0)]
	public BlobAssetReference<IterateThroughTickEvents> TickEventData;
	[FieldOffset(8)]
	public int EndIndex;
	[FieldOffset(12)]
	public int CurrentCount;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool ResetOnBuffReapply;
}
