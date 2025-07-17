---
nav_exclude: true
search_exclude: true
---

# SpawnDebugEvent

```csharp
[StructLayout(2)]
public struct SpawnDebugEvent
{
	static SpawnDebugEvent()
	{
		Il2CppClassPointerStore<SpawnDebugEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "SpawnDebugEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnDebugEvent>.NativeClassPtr);
		SpawnDebugEvent.NativeFieldInfoPtr_PrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnDebugEvent>.NativeClassPtr, "PrefabGuid");
		SpawnDebugEvent.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnDebugEvent>.NativeClassPtr, "Position");
		SpawnDebugEvent.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnDebugEvent>.NativeClassPtr, "Rotation");
		SpawnDebugEvent.NativeFieldInfoPtr_Team = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnDebugEvent>.NativeClassPtr, "Team");
		SpawnDebugEvent.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnDebugEvent>.NativeClassPtr, "Level");
		SpawnDebugEvent.NativeFieldInfoPtr_DyeIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnDebugEvent>.NativeClassPtr, "DyeIndex");
		SpawnDebugEvent.NativeFieldInfoPtr_Control = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnDebugEvent>.NativeClassPtr, "Control");
		SpawnDebugEvent.NativeFieldInfoPtr_Roam = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnDebugEvent>.NativeClassPtr, "Roam");
		SpawnDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpawnDebugEvent>.NativeClassPtr, 100684163);
		SpawnDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpawnDebugEvent>.NativeClassPtr, 100684164);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 290630, RefRangeEnd = 290631, XrefRangeStart = 290591, XrefRangeEnd = 290630, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpawnDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 290668, RefRangeEnd = 290669, XrefRangeStart = 290631, XrefRangeEnd = 290668, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpawnDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnDebugEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	private static readonly IntPtr NativeFieldInfoPtr_Team;
	private static readonly IntPtr NativeFieldInfoPtr_Level;
	private static readonly IntPtr NativeFieldInfoPtr_DyeIndex;
	private static readonly IntPtr NativeFieldInfoPtr_Control;
	private static readonly IntPtr NativeFieldInfoPtr_Roam;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public PrefabGUID PrefabGuid;
	[FieldOffset(4)]
	public float3 Position;
	[FieldOffset(16)]
	public quaternion Rotation;
	[FieldOffset(32)]
	public SpawnDebugEvent.TeamEnum Team;
	[FieldOffset(36)]
	public int Level;
	[FieldOffset(40)]
	public byte DyeIndex;
	[FieldOffset(41)]
	[MarshalAs(4)]
	public bool Control;
	[FieldOffset(42)]
	[MarshalAs(4)]
	public bool Roam;
	public enum TeamEnum
	{
		Neutral,
		Ally,
		Enemy
	}
}
