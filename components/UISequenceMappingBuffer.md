---
nav_exclude: true
search_exclude: true
---

# UISequenceMappingBuffer

```csharp
[StructLayout(2)]
public struct UISequenceMappingBuffer
{
	static UISequenceMappingBuffer()
	{
		Il2CppClassPointerStore<UISequenceMappingBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UISequenceMappingBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UISequenceMappingBuffer>.NativeClassPtr);
		UISequenceMappingBuffer.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UISequenceMappingBuffer>.NativeClassPtr, "Type");
		UISequenceMappingBuffer.NativeFieldInfoPtr_Sequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UISequenceMappingBuffer>.NativeClassPtr, "Sequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UISequenceMappingBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_Sequence;
	[FieldOffset(0)]
	public UISequenceType Type;
	[FieldOffset(4)]
	public SequenceGUID Sequence;
}
