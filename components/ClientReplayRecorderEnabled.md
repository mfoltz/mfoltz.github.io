# ClientReplayRecorderEnabled

```csharp
[StructLayout(2)]
public struct ClientReplayRecorderEnabled
{
	static ClientReplayRecorderEnabled()
	{
		Il2CppClassPointerStore<ClientReplayRecorderEnabled>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Replays", "ClientReplayRecorderEnabled");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ClientReplayRecorderEnabled>.NativeClassPtr);
		ClientReplayRecorderEnabled.NativeFieldInfoPtr_FileName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClientReplayRecorderEnabled>.NativeClassPtr, "FileName");
		ClientReplayRecorderEnabled.NativeFieldInfoPtr_CurrentTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClientReplayRecorderEnabled>.NativeClassPtr, "CurrentTime");
		ClientReplayRecorderEnabled.NativeFieldInfoPtr_CurrentSnapshot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClientReplayRecorderEnabled>.NativeClassPtr, "CurrentSnapshot");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ClientReplayRecorderEnabled>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FileName;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentTime;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentSnapshot;
	[FieldOffset(0)]
	public FixedString512Bytes FileName;
	[FieldOffset(512)]
	public double CurrentTime;
	[FieldOffset(520)]
	public int CurrentSnapshot;
}
