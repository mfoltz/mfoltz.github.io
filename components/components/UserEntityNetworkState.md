---
nav_exclude: true
search_exclude: true
---

# UserEntityNetworkState

```csharp
[StructLayout(2)]
public struct UserEntityNetworkState
{
	static UserEntityNetworkState()
	{
		Il2CppClassPointerStore<UserEntityNetworkState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "UserEntityNetworkState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UserEntityNetworkState>.NativeClassPtr);
		UserEntityNetworkState.NativeFieldInfoPtr_NextSendTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserEntityNetworkState>.NativeClassPtr, "NextSendTime");
		UserEntityNetworkState.NativeFieldInfoPtr_Generation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserEntityNetworkState>.NativeClassPtr, "Generation");
		UserEntityNetworkState.NativeFieldInfoPtr_LastAckedServerFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserEntityNetworkState>.NativeClassPtr, "LastAckedServerFrame");
		UserEntityNetworkState.NativeFieldInfoPtr_LastFrameSent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserEntityNetworkState>.NativeClassPtr, "LastFrameSent");
		UserEntityNetworkState.NativeFieldInfoPtr_NumOfTimesSyncedSinceReset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserEntityNetworkState>.NativeClassPtr, "NumOfTimesSyncedSinceReset");
		UserEntityNetworkState.NativeFieldInfoPtr_HasBeenSentEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserEntityNetworkState>.NativeClassPtr, "HasBeenSentEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UserEntityNetworkState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NextSendTime;
	private static readonly IntPtr NativeFieldInfoPtr_Generation;
	private static readonly IntPtr NativeFieldInfoPtr_LastAckedServerFrame;
	private static readonly IntPtr NativeFieldInfoPtr_LastFrameSent;
	private static readonly IntPtr NativeFieldInfoPtr_NumOfTimesSyncedSinceReset;
	private static readonly IntPtr NativeFieldInfoPtr_HasBeenSentEntity;
	[FieldOffset(0)]
	public double NextSendTime;
	[FieldOffset(8)]
	public int Generation;
	[FieldOffset(12)]
	public int LastAckedServerFrame;
	[FieldOffset(16)]
	public int LastFrameSent;
	[FieldOffset(20)]
	public byte NumOfTimesSyncedSinceReset;
	[FieldOffset(21)]
	[MarshalAs(4)]
	public bool HasBeenSentEntity;
}
