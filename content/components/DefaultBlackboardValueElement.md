---
nav_exclude: true
search_exclude: true
---

```csharp
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

	public FixedString64Bytes BlackboardName;

	public SocketDefaultValue DefaultValue;

	public BlackboardRegisterType Type;
}
```

## Client Systems

- [CreateSequenceSystem]({{% relref "systems/client/CreateSequenceSystem.md" %}})
- [CreateSequenceSystem_Deserialize]({{% relref "systems/client/CreateSequenceSystem_Deserialize.md" %}})
