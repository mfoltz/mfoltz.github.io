---
nav_exclude: true
search_exclude: true
---

# ConsumeBuffThroughGameplayEvent

```csharp
[StructLayout(2)]
public struct ConsumeBuffThroughGameplayEvent
{
	static ConsumeBuffThroughGameplayEvent()
	{
		Il2CppClassPointerStore<ConsumeBuffThroughGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Shared", "ConsumeBuffThroughGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ConsumeBuffThroughGameplayEvent>.NativeClassPtr);
		ConsumeBuffThroughGameplayEvent.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConsumeBuffThroughGameplayEvent>.NativeClassPtr, "EventId");
		ConsumeBuffThroughGameplayEvent.NativeFieldInfoPtr_BuffPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConsumeBuffThroughGameplayEvent>.NativeClassPtr, "BuffPrefab");
		ConsumeBuffThroughGameplayEvent.NativeMethodInfoPtr__ctor_Public_Void_ConsumeBuffThroughGameplayEventAuthoring_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ConsumeBuffThroughGameplayEvent>.NativeClassPtr, 100681345);
		ConsumeBuffThroughGameplayEvent.NativeMethodInfoPtr__ctor_Public_Void_IBaker_ConsumeBuffThroughGameplayEventAuthoring_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ConsumeBuffThroughGameplayEvent>.NativeClassPtr, 100681346);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 248955, XrefRangeEnd = 248956, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe ConsumeBuffThroughGameplayEvent(ConsumeBuffThroughGameplayEventAuthoring authoring)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(authoring);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ConsumeBuffThroughGameplayEvent.NativeMethodInfoPtr__ctor_Public_Void_ConsumeBuffThroughGameplayEventAuthoring_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 248956, XrefRangeEnd = 248961, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe ConsumeBuffThroughGameplayEvent(IBaker baker, ConsumeBuffThroughGameplayEventAuthoring authoring)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(baker);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.Il2CppObjectBaseToPtr(authoring);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ConsumeBuffThroughGameplayEvent.NativeMethodInfoPtr__ctor_Public_Void_IBaker_ConsumeBuffThroughGameplayEventAuthoring_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ConsumeBuffThroughGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	private static readonly IntPtr NativeFieldInfoPtr_BuffPrefab;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_ConsumeBuffThroughGameplayEventAuthoring_0;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_IBaker_ConsumeBuffThroughGameplayEventAuthoring_0;
	[FieldOffset(0)]
	public readonly GameplayEventId EventId;
	[FieldOffset(8)]
	public readonly PrefabGUID BuffPrefab;
}
