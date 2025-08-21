---
nav_exclude: true
search_exclude: true
---

```csharp
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

	public FixedString64Bytes ParameterName;

	public BlackboardRegisterType BlackboardValueType;

	public SocketDefaultValue Value;

	public int VisualEffectIndex;
}
```
