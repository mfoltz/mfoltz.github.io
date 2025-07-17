---
nav_exclude: true
search_exclude: true
---

# AggroDamageHistoryBufferElement

```csharp
[StructLayout(2)]
public struct AggroDamageHistoryBufferElement
{
	static AggroDamageHistoryBufferElement()
	{
		Il2CppClassPointerStore<AggroDamageHistoryBufferElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AggroDamageHistoryBufferElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AggroDamageHistoryBufferElement>.NativeClassPtr);
		AggroDamageHistoryBufferElement.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroDamageHistoryBufferElement>.NativeClassPtr, "Time");
		AggroDamageHistoryBufferElement.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroDamageHistoryBufferElement>.NativeClassPtr, "Value");
		AggroDamageHistoryBufferElement.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroDamageHistoryBufferElement>.NativeClassPtr, "Source");
		AggroDamageHistoryBufferElement.NativeFieldInfoPtr_Fake = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroDamageHistoryBufferElement>.NativeClassPtr, "Fake");
		AggroDamageHistoryBufferElement.NativeMethodInfoPtr_AddToBuffer_Public_Void_DynamicBuffer_1_AggroDamageHistoryBufferElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AggroDamageHistoryBufferElement>.NativeClassPtr, 100663955);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1055348, XrefRangeEnd = 1055351, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddToBuffer(DynamicBuffer<AggroDamageHistoryBufferElement> buffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref buffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AggroDamageHistoryBufferElement.NativeMethodInfoPtr_AddToBuffer_Public_Void_DynamicBuffer_1_AggroDamageHistoryBufferElement_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AggroDamageHistoryBufferElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_Fake;
	private static readonly IntPtr NativeMethodInfoPtr_AddToBuffer_Public_Void_DynamicBuffer_1_AggroDamageHistoryBufferElement_0;
	[FieldOffset(0)]
	public double Time;
	[FieldOffset(8)]
	public float Value;
	[FieldOffset(12)]
	public Entity Source;
	[FieldOffset(20)]
	[MarshalAs(4)]
	public bool Fake;
}
