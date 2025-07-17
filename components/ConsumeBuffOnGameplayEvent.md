---
nav_exclude: true
search_exclude: true
---

# ConsumeBuffOnGameplayEvent

```csharp
[StructLayout(2)]
public struct ConsumeBuffOnGameplayEvent
{
	static ConsumeBuffOnGameplayEvent()
	{
		Il2CppClassPointerStore<ConsumeBuffOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ConsumeBuffOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ConsumeBuffOnGameplayEvent>.NativeClassPtr);
		ConsumeBuffOnGameplayEvent.NativeFieldInfoPtr_DummyData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConsumeBuffOnGameplayEvent>.NativeClassPtr, "DummyData");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ConsumeBuffOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DummyData;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool DummyData;
}
