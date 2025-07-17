---
nav_exclude: true
search_exclude: true
---

# IndoorMusic

```csharp
[StructLayout(2)]
public struct IndoorMusic
{
	static IndoorMusic()
	{
		Il2CppClassPointerStore<IndoorMusic>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "IndoorMusic");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<IndoorMusic>.NativeClassPtr);
		IndoorMusic.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IndoorMusic>.NativeClassPtr, "SequenceGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<IndoorMusic>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	[FieldOffset(0)]
	public SequenceGUID SequenceGuid;
}
