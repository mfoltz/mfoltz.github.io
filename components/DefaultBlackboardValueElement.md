# DefaultBlackboardValueElement

```csharp
[StructLayout(2)]
public struct DefaultBlackboardValueElement
{
	static DefaultBlackboardValueElement()
	{
		Il2CppClassPointerStore<DefaultBlackboardValueElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("Sequencer.dll", "Stunlock.Sequencer", "DefaultBlackboardValueElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DefaultBlackboardValueElement>.NativeClassPtr);
		DefaultBlackboardValueElement.NativeFieldInfoPtr_BlackboardName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DefaultBlackboardValueElement>.NativeClassPtr, "BlackboardName");
		DefaultBlackboardValueElement.NativeFieldInfoPtr_DefaultValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DefaultBlackboardValueElement>.NativeClassPtr, "DefaultValue");
		DefaultBlackboardValueElement.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DefaultBlackboardValueElement>.NativeClassPtr, "Type");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DefaultBlackboardValueElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BlackboardName;
	private static readonly IntPtr NativeFieldInfoPtr_DefaultValue;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	[FieldOffset(0)]
	public FixedString64Bytes BlackboardName;
	[FieldOffset(64)]
	public SocketDefaultValue DefaultValue;
	[FieldOffset(80)]
	public BlackboardRegisterType Type;
}
