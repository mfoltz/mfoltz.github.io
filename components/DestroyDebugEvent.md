# DestroyDebugEvent

```csharp
[StructLayout(2)]
public struct DestroyDebugEvent
{
	static DestroyDebugEvent()
	{
		Il2CppClassPointerStore<DestroyDebugEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "DestroyDebugEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyDebugEvent>.NativeClassPtr);
		DestroyDebugEvent.NativeFieldInfoPtr_What = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyDebugEvent>.NativeClassPtr, "What");
		DestroyDebugEvent.NativeFieldInfoPtr_Where = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyDebugEvent>.NativeClassPtr, "Where");
		DestroyDebugEvent.NativeFieldInfoPtr_PrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyDebugEvent>.NativeClassPtr, "PrefabGuid");
		DestroyDebugEvent.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyDebugEvent>.NativeClassPtr, "Position");
		DestroyDebugEvent.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyDebugEvent>.NativeClassPtr, "Amount");
		DestroyDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DestroyDebugEvent>.NativeClassPtr, 100684171);
		DestroyDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DestroyDebugEvent>.NativeClassPtr, 100684172);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 290793, RefRangeEnd = 290794, XrefRangeStart = 290771, XrefRangeEnd = 290793, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DestroyDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 290816, RefRangeEnd = 290817, XrefRangeStart = 290794, XrefRangeEnd = 290816, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DestroyDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyDebugEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_What;
	private static readonly IntPtr NativeFieldInfoPtr_Where;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public FixedString128Bytes What;
	[FieldOffset(128)]
	public DestroyDebugEvent.DestroyWhere Where;
	[FieldOffset(132)]
	public PrefabGUID PrefabGuid;
	[FieldOffset(136)]
	public float3 Position;
	[FieldOffset(148)]
	public int Amount;
	public enum DestroyWhat
	{
		AnythingExceptSelf,
		Anything
	}
	public enum DestroyWhere
	{
		ClosestToMouse,
		Anywhere
	}
}
