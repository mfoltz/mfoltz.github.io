# PerformanceSummaryElement

```csharp
[StructLayout(2)]
public struct PerformanceSummaryElement
{
	static PerformanceSummaryElement()
	{
		Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PerformanceSummaryElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr);
		PerformanceSummaryElement.NativeFieldInfoPtr_FrameTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "FrameTime");
		PerformanceSummaryElement.NativeFieldInfoPtr_ClientFps = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "ClientFps");
		PerformanceSummaryElement.NativeFieldInfoPtr_ServerFps = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "ServerFps");
		PerformanceSummaryElement.NativeFieldInfoPtr_NetworkLatency = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "NetworkLatency");
		PerformanceSummaryElement.NativeFieldInfoPtr_NetworkBytesSentPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "NetworkBytesSentPerSecond");
		PerformanceSummaryElement.NativeFieldInfoPtr_NetworkBytesReceivedPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "NetworkBytesReceivedPerSecond");
		PerformanceSummaryElement.NativeFieldInfoPtr_NetworkPacketsSentPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "NetworkPacketsSentPerSecond");
		PerformanceSummaryElement.NativeFieldInfoPtr_NetworkPacketsReceivedPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "NetworkPacketsReceivedPerSecond");
		PerformanceSummaryElement.NativeFieldInfoPtr_NetworkMessagesSentPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "NetworkMessagesSentPerSecond");
		PerformanceSummaryElement.NativeFieldInfoPtr_NetworkMessagesReceivedPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "NetworkMessagesReceivedPerSecond");
		PerformanceSummaryElement.NativeFieldInfoPtr_NetworkMessagesMaxBytesSentPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "NetworkMessagesMaxBytesSentPerSecond");
		PerformanceSummaryElement.NativeFieldInfoPtr_NetworkMessagesMaxBytesReceivedPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "NetworkMessagesMaxBytesReceivedPerSecond");
		PerformanceSummaryElement.NativeFieldInfoPtr_Positions = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "Positions");
		PerformanceSummaryElement.NativeFieldInfoPtr_SoundCpuPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "SoundCpuPerSecond");
		PerformanceSummaryElement.NativeFieldInfoPtr_SoundMemoryPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "SoundMemoryPerSecond");
		PerformanceSummaryElement.NativeFieldInfoPtr_HybridModelCountPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "HybridModelCountPerSecond");
		PerformanceSummaryElement.NativeFieldInfoPtr_ActiveStreamedAssets_HybridModels = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "ActiveStreamedAssets_HybridModels");
		PerformanceSummaryElement.NativeFieldInfoPtr_ActiveStreamedAssets_HybridEquipment = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "ActiveStreamedAssets_HybridEquipment");
		PerformanceSummaryElement.NativeFieldInfoPtr_ActiveStreamedAssets_ClientUI = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "ActiveStreamedAssets_ClientUI");
		PerformanceSummaryElement.NativeFieldInfoPtr_ActiveStreamedAssets_DefaultUI = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "ActiveStreamedAssets_DefaultUI");
		PerformanceSummaryElement.NativeFieldInfoPtr_HourOfDay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "HourOfDay");
		PerformanceSummaryElement.NativeFieldInfoPtr_Memory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "Memory");
		PerformanceSummaryElement.NativeFieldInfoPtr_ClientEnabledEntities = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "ClientEnabledEntities");
		PerformanceSummaryElement.NativeFieldInfoPtr_ClientDisabledEntities = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "ClientDisabledEntities");
		PerformanceSummaryElement.NativeFieldInfoPtr_ServerEnabledEntities = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "ServerEnabledEntities");
		PerformanceSummaryElement.NativeFieldInfoPtr_ServerDisabledEntities = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "ServerDisabledEntities");
		PerformanceSummaryElement.NativeFieldInfoPtr_ArchetypeCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "ArchetypeCount");
		PerformanceSummaryElement.NativeFieldInfoPtr_ElapsedTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "ElapsedTime");
		PerformanceSummaryElement.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, "Time");
		PerformanceSummaryElement.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, 100674171);
		PerformanceSummaryElement.NativeMethodInfoPtr_GetCsvHeader_Public_Static_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, 100674172);
		PerformanceSummaryElement.NativeMethodInfoPtr_ToCsvRow_Public_String_byref_TerrainChunkLookup_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, 100674173);
		PerformanceSummaryElement.NativeMethodInfoPtr_GetChunkName_Private_String_float2_byref_TerrainChunkLookup_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, 100674174);
		PerformanceSummaryElement.NativeMethodInfoPtr_CsvAppend_Private_Static_Void_StringBuilder_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, 100674175);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 157227, RefRangeEnd = 157228, XrefRangeStart = 156985, XrefRangeEnd = 157227, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PerformanceSummaryElement.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 157432, RefRangeEnd = 157433, XrefRangeStart = 157228, XrefRangeEnd = 157432, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static string GetCsvHeader()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PerformanceSummaryElement.NativeMethodInfoPtr_GetCsvHeader_Public_Static_String_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 157654, RefRangeEnd = 157655, XrefRangeStart = 157433, XrefRangeEnd = 157654, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe string ToCsvRow([In] ref TerrainChunkLookup terrainChunkLookup, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &terrainChunkLookup;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PerformanceSummaryElement.NativeMethodInfoPtr_ToCsvRow_Public_String_byref_TerrainChunkLookup_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 157672, RefRangeEnd = 157675, XrefRangeStart = 157655, XrefRangeEnd = 157672, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe string GetChunkName(float2 pos, [In] ref TerrainChunkLookup terrainChunkLookup, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref pos;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &terrainChunkLookup;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PerformanceSummaryElement.NativeMethodInfoPtr_GetChunkName_Private_String_float2_byref_TerrainChunkLookup_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 157675, XrefRangeEnd = 157680, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void CsvAppend(StringBuilder builder, string s)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(builder);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.ManagedStringToIl2Cpp(s);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PerformanceSummaryElement.NativeMethodInfoPtr_CsvAppend_Private_Static_Void_StringBuilder_String_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PerformanceSummaryElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FrameTime;
	private static readonly IntPtr NativeFieldInfoPtr_ClientFps;
	private static readonly IntPtr NativeFieldInfoPtr_ServerFps;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkLatency;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkBytesSentPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkBytesReceivedPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkPacketsSentPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkPacketsReceivedPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkMessagesSentPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkMessagesReceivedPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkMessagesMaxBytesSentPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkMessagesMaxBytesReceivedPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_Positions;
	private static readonly IntPtr NativeFieldInfoPtr_SoundCpuPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_SoundMemoryPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_HybridModelCountPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveStreamedAssets_HybridModels;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveStreamedAssets_HybridEquipment;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveStreamedAssets_ClientUI;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveStreamedAssets_DefaultUI;
	private static readonly IntPtr NativeFieldInfoPtr_HourOfDay;
	private static readonly IntPtr NativeFieldInfoPtr_Memory;
	private static readonly IntPtr NativeFieldInfoPtr_ClientEnabledEntities;
	private static readonly IntPtr NativeFieldInfoPtr_ClientDisabledEntities;
	private static readonly IntPtr NativeFieldInfoPtr_ServerEnabledEntities;
	private static readonly IntPtr NativeFieldInfoPtr_ServerDisabledEntities;
	private static readonly IntPtr NativeFieldInfoPtr_ArchetypeCount;
	private static readonly IntPtr NativeFieldInfoPtr_ElapsedTime;
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCsvHeader_Public_Static_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToCsvRow_Public_String_byref_TerrainChunkLookup_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetChunkName_Private_String_float2_byref_TerrainChunkLookup_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_CsvAppend_Private_Static_Void_StringBuilder_String_0;
	[FieldOffset(0)]
	public PerformanceSummary_FloatAggregates FrameTime;
	[FieldOffset(16)]
	public PerformanceSummary_IntAggregates ClientFps;
	[FieldOffset(32)]
	public PerformanceSummary_IntAggregates ServerFps;
	[FieldOffset(48)]
	public PerformanceSummary_IntAggregates NetworkLatency;
	[FieldOffset(64)]
	public PerformanceSummary_IntAggregates NetworkBytesSentPerSecond;
	[FieldOffset(80)]
	public PerformanceSummary_IntAggregates NetworkBytesReceivedPerSecond;
	[FieldOffset(96)]
	public PerformanceSummary_IntAggregates NetworkPacketsSentPerSecond;
	[FieldOffset(112)]
	public PerformanceSummary_IntAggregates NetworkPacketsReceivedPerSecond;
	[FieldOffset(128)]
	public PerformanceSummary_IntAggregates NetworkMessagesSentPerSecond;
	[FieldOffset(144)]
	public PerformanceSummary_IntAggregates NetworkMessagesReceivedPerSecond;
	[FieldOffset(160)]
	public PerformanceSummary_IntAggregates NetworkMessagesMaxBytesSentPerSecond;
	[FieldOffset(176)]
	public PerformanceSummary_IntAggregates NetworkMessagesMaxBytesReceivedPerSecond;
	[FieldOffset(192)]
	public PerformanceSummary_Positions Positions;
	[FieldOffset(216)]
	public PerformanceSummary_FloatAggregates SoundCpuPerSecond;
	[FieldOffset(232)]
	public PerformanceSummary_IntAggregates SoundMemoryPerSecond;
	[FieldOffset(248)]
	public PerformanceSummary_IntAggregates HybridModelCountPerSecond;
	[FieldOffset(264)]
	public PerformanceSummary_IntAggregates ActiveStreamedAssets_HybridModels;
	[FieldOffset(280)]
	public PerformanceSummary_IntAggregates ActiveStreamedAssets_HybridEquipment;
	[FieldOffset(296)]
	public PerformanceSummary_IntAggregates ActiveStreamedAssets_ClientUI;
	[FieldOffset(312)]
	public PerformanceSummary_IntAggregates ActiveStreamedAssets_DefaultUI;
	[FieldOffset(328)]
	public int HourOfDay;
	[FieldOffset(332)]
	public int Memory;
	[FieldOffset(336)]
	public int ClientEnabledEntities;
	[FieldOffset(340)]
	public int ClientDisabledEntities;
	[FieldOffset(344)]
	public int ServerEnabledEntities;
	[FieldOffset(348)]
	public int ServerDisabledEntities;
	[FieldOffset(352)]
	public int ArchetypeCount;
	[FieldOffset(356)]
	public float ElapsedTime;
	[FieldOffset(360)]
	public DateTime Time;
}
