# InputCommandData

```csharp
[StructLayout(2)]
public struct InputCommandData
{
	static InputCommandData()
	{
		Il2CppClassPointerStore<InputCommandData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "InputCommandData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InputCommandData>.NativeClassPtr);
		InputCommandData.NativeFieldInfoPtr_TotalInterpolationTimeForOtherClients = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandData>.NativeClassPtr, "TotalInterpolationTimeForOtherClients");
		InputCommandData.NativeFieldInfoPtr_TotalExecutedCommandDelta = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandData>.NativeClassPtr, "TotalExecutedCommandDelta");
		InputCommandData.NativeFieldInfoPtr_AllowedExecutedCommandDelta = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandData>.NativeClassPtr, "AllowedExecutedCommandDelta");
		InputCommandData.NativeFieldInfoPtr_LastServerTimeReceivedCommand = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandData>.NativeClassPtr, "LastServerTimeReceivedCommand");
		InputCommandData.NativeFieldInfoPtr_LastClientFrameReceivedByServer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandData>.NativeClassPtr, "LastClientFrameReceivedByServer");
		InputCommandData.NativeFieldInfoPtr_LastHandledClientCommandFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandData>.NativeClassPtr, "LastHandledClientCommandFrame");
		InputCommandData.NativeFieldInfoPtr_LastHandledClientOriginalCommandFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandData>.NativeClassPtr, "LastHandledClientOriginalCommandFrame");
		InputCommandData.NativeFieldInfoPtr_Controller = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandData>.NativeClassPtr, "Controller");
		InputCommandData.NativeFieldInfoPtr_MovementForAbilityCasts = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandData>.NativeClassPtr, "MovementForAbilityCasts");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InputCommandData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TotalInterpolationTimeForOtherClients;
	private static readonly IntPtr NativeFieldInfoPtr_TotalExecutedCommandDelta;
	private static readonly IntPtr NativeFieldInfoPtr_AllowedExecutedCommandDelta;
	private static readonly IntPtr NativeFieldInfoPtr_LastServerTimeReceivedCommand;
	private static readonly IntPtr NativeFieldInfoPtr_LastClientFrameReceivedByServer;
	private static readonly IntPtr NativeFieldInfoPtr_LastHandledClientCommandFrame;
	private static readonly IntPtr NativeFieldInfoPtr_LastHandledClientOriginalCommandFrame;
	private static readonly IntPtr NativeFieldInfoPtr_Controller;
	private static readonly IntPtr NativeFieldInfoPtr_MovementForAbilityCasts;
	[FieldOffset(0)]
	public double TotalInterpolationTimeForOtherClients;
	[FieldOffset(8)]
	public double TotalExecutedCommandDelta;
	[FieldOffset(16)]
	public double AllowedExecutedCommandDelta;
	[FieldOffset(24)]
	public double LastServerTimeReceivedCommand;
	[FieldOffset(32)]
	public int LastClientFrameReceivedByServer;
	[FieldOffset(36)]
	public int LastHandledClientCommandFrame;
	[FieldOffset(40)]
	public int LastHandledClientOriginalCommandFrame;
	[FieldOffset(44)]
	public Entity Controller;
	[FieldOffset(52)]
	public MovementForAbilityCasts MovementForAbilityCasts;
}
