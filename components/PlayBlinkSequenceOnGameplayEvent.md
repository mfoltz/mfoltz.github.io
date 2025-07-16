# PlayBlinkSequenceOnGameplayEvent

```csharp
[StructLayout(2)]
public struct PlayBlinkSequenceOnGameplayEvent
{
	static PlayBlinkSequenceOnGameplayEvent()
	{
		Il2CppClassPointerStore<PlayBlinkSequenceOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PlayBlinkSequenceOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlayBlinkSequenceOnGameplayEvent>.NativeClassPtr);
		PlayBlinkSequenceOnGameplayEvent.NativeFieldInfoPtr_DummyValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayBlinkSequenceOnGameplayEvent>.NativeClassPtr, "DummyValue");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlayBlinkSequenceOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DummyValue;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool DummyValue;
}
