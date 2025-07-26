# CharacterVoiceActivity

```csharp
[StructLayout(2)]
public struct CharacterVoiceActivity
{
	static CharacterVoiceActivity()
	{
		Il2CppClassPointerStore<CharacterVoiceActivity>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CharacterVoiceActivity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CharacterVoiceActivity>.NativeClassPtr);
		CharacterVoiceActivity.NativeFieldInfoPtr_TimeSinceUpdate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterVoiceActivity>.NativeClassPtr, "TimeSinceUpdate");
		CharacterVoiceActivity.NativeFieldInfoPtr_LastTimeSpeaking = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterVoiceActivity>.NativeClassPtr, "LastTimeSpeaking");
		CharacterVoiceActivity.NativeFieldInfoPtr_IsSpeaking = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterVoiceActivity>.NativeClassPtr, "IsSpeaking");
		CharacterVoiceActivity.NativeFieldInfoPtr_VivoxUsername = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterVoiceActivity>.NativeClassPtr, "VivoxUsername");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CharacterVoiceActivity>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TimeSinceUpdate;
	private static readonly IntPtr NativeFieldInfoPtr_LastTimeSpeaking;
	private static readonly IntPtr NativeFieldInfoPtr_IsSpeaking;
	private static readonly IntPtr NativeFieldInfoPtr_VivoxUsername;
	[FieldOffset(0)]
	public float TimeSinceUpdate;
	[FieldOffset(8)]
	public double LastTimeSpeaking;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool IsSpeaking;
	[FieldOffset(20)]
	public int VivoxUsername;
}
