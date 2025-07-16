# CurrentVoiceLine

```csharp
[StructLayout(2)]
public struct CurrentVoiceLine
{
	static CurrentVoiceLine()
	{
		Il2CppClassPointerStore<CurrentVoiceLine>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Audio", "CurrentVoiceLine");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CurrentVoiceLine>.NativeClassPtr);
		CurrentVoiceLine.NativeFieldInfoPtr_VoiceLineEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CurrentVoiceLine>.NativeClassPtr, "VoiceLineEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CurrentVoiceLine>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VoiceLineEntity;
	[FieldOffset(0)]
	public Entity VoiceLineEntity;
}
