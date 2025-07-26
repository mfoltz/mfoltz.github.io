# EnterShapeshiftEvent

```csharp
[StructLayout(2)]
public struct EnterShapeshiftEvent
{
	static EnterShapeshiftEvent()
	{
		Il2CppClassPointerStore<EnterShapeshiftEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "EnterShapeshiftEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EnterShapeshiftEvent>.NativeClassPtr);
		EnterShapeshiftEvent.NativeFieldInfoPtr_Shapeshift = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EnterShapeshiftEvent>.NativeClassPtr, "Shapeshift");
		EnterShapeshiftEvent.NativeFieldInfoPtr_ExitOnSameForm = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EnterShapeshiftEvent>.NativeClassPtr, "ExitOnSameForm");
		EnterShapeshiftEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EnterShapeshiftEvent>.NativeClassPtr, 100684385);
		EnterShapeshiftEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EnterShapeshiftEvent>.NativeClassPtr, 100684386);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292384, RefRangeEnd = 292385, XrefRangeStart = 292376, XrefRangeEnd = 292384, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EnterShapeshiftEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292392, RefRangeEnd = 292393, XrefRangeStart = 292385, XrefRangeEnd = 292392, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EnterShapeshiftEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EnterShapeshiftEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Shapeshift;
	private static readonly IntPtr NativeFieldInfoPtr_ExitOnSameForm;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public PrefabGUID Shapeshift;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool ExitOnSameForm;
}
