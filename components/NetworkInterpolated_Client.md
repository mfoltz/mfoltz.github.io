# NetworkInterpolated_Client

```csharp
[StructLayout(2)]
public struct NetworkInterpolated_Client
{
	static NetworkInterpolated_Client()
	{
		Il2CppClassPointerStore<NetworkInterpolated_Client>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "NetworkInterpolated_Client");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NetworkInterpolated_Client>.NativeClassPtr);
		NetworkInterpolated_Client.NativeFieldInfoPtr_PreviousLastCommandTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Client>.NativeClassPtr, "PreviousLastCommandTime");
		NetworkInterpolated_Client.NativeFieldInfoPtr_SnapshotBufferIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Client>.NativeClassPtr, "SnapshotBufferIndex");
		NetworkInterpolated_Client.NativeFieldInfoPtr_WasSimulating = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Client>.NativeClassPtr, "WasSimulating");
		NetworkInterpolated_Client.NativeFieldInfoPtr_IsExtrapolating = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Client>.NativeClassPtr, "IsExtrapolating");
		NetworkInterpolated_Client.NativeFieldInfoPtr_NewDataReceived = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Client>.NativeClassPtr, "NewDataReceived");
		NetworkInterpolated_Client.NativeFieldInfoPtr_SpellControl_ServerStartPos = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Client>.NativeClassPtr, "SpellControl_ServerStartPos");
		NetworkInterpolated_Client.NativeFieldInfoPtr_SpellControl_ClientStartPos = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Client>.NativeClassPtr, "SpellControl_ClientStartPos");
		NetworkInterpolated_Client.NativeFieldInfoPtr_SpellControl_TimeSinceStart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Client>.NativeClassPtr, "SpellControl_TimeSinceStart");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NetworkInterpolated_Client>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PreviousLastCommandTime;
	private static readonly IntPtr NativeFieldInfoPtr_SnapshotBufferIndex;
	private static readonly IntPtr NativeFieldInfoPtr_WasSimulating;
	private static readonly IntPtr NativeFieldInfoPtr_IsExtrapolating;
	private static readonly IntPtr NativeFieldInfoPtr_NewDataReceived;
	private static readonly IntPtr NativeFieldInfoPtr_SpellControl_ServerStartPos;
	private static readonly IntPtr NativeFieldInfoPtr_SpellControl_ClientStartPos;
	private static readonly IntPtr NativeFieldInfoPtr_SpellControl_TimeSinceStart;
	[FieldOffset(0)]
	public double PreviousLastCommandTime;
	[FieldOffset(8)]
	public int SnapshotBufferIndex;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool WasSimulating;
	[FieldOffset(13)]
	[MarshalAs(4)]
	public bool IsExtrapolating;
	[FieldOffset(14)]
	[MarshalAs(4)]
	public bool NewDataReceived;
	[FieldOffset(16)]
	public float2 SpellControl_ServerStartPos;
	[FieldOffset(24)]
	public float2 SpellControl_ClientStartPos;
	[FieldOffset(32)]
	public float SpellControl_TimeSinceStart;
}
