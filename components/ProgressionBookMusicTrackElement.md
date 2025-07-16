# ProgressionBookMusicTrackElement

```csharp
[StructLayout(2)]
public struct ProgressionBookMusicTrackElement
{
	static ProgressionBookMusicTrackElement()
	{
		Il2CppClassPointerStore<ProgressionBookMusicTrackElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ProgressionBookMusicTrackElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProgressionBookMusicTrackElement>.NativeClassPtr);
		ProgressionBookMusicTrackElement.NativeFieldInfoPtr_MusicTrack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressionBookMusicTrackElement>.NativeClassPtr, "MusicTrack");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProgressionBookMusicTrackElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MusicTrack;
	[FieldOffset(0)]
	public PrefabGUID MusicTrack;
}
