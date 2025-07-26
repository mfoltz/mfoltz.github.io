# VisualEffectParameterElement

```csharp
[StructLayout(2)]
public struct VisualEffectParameterElement
{
	static VisualEffectParameterElement()
	{
		Il2CppClassPointerStore<VisualEffectParameterElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer", "VisualEffectParameterElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VisualEffectParameterElement>.NativeClassPtr);
		VisualEffectParameterElement.NativeFieldInfoPtr_ParameterName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VisualEffectParameterElement>.NativeClassPtr, "ParameterName");
		VisualEffectParameterElement.NativeFieldInfoPtr_BlackboardValueType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VisualEffectParameterElement>.NativeClassPtr, "BlackboardValueType");
		VisualEffectParameterElement.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VisualEffectParameterElement>.NativeClassPtr, "Value");
		VisualEffectParameterElement.NativeFieldInfoPtr_VisualEffectIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VisualEffectParameterElement>.NativeClassPtr, "VisualEffectIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VisualEffectParameterElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ParameterName;
	private static readonly IntPtr NativeFieldInfoPtr_BlackboardValueType;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_VisualEffectIndex;
	[FieldOffset(0)]
	public FixedString64Bytes ParameterName;
	[FieldOffset(64)]
	public BlackboardRegisterType BlackboardValueType;
	[FieldOffset(68)]
	public SocketDefaultValue Value;
	[FieldOffset(84)]
	public int VisualEffectIndex;
}
