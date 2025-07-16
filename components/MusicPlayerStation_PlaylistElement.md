# MusicPlayerStation_PlaylistElement

```csharp
[StructLayout(2)]
public struct MusicPlayerStation_PlaylistElement
{
	static MusicPlayerStation_PlaylistElement()
	{
		Il2CppClassPointerStore<MusicPlayerStation_PlaylistElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MusicPlayerStation_PlaylistElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MusicPlayerStation_PlaylistElement>.NativeClassPtr);
		MusicPlayerStation_PlaylistElement.NativeFieldInfoPtr_Track = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MusicPlayerStation_PlaylistElement>.NativeClassPtr, "Track");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MusicPlayerStation_PlaylistElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Track;
	[FieldOffset(0)]
	public PrefabGUID Track;
}
