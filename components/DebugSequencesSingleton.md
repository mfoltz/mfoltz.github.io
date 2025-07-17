---
nav_exclude: true
search_exclude: true
---

# DebugSequencesSingleton

```csharp
[StructLayout(2)]
public struct DebugSequencesSingleton
{
	static DebugSequencesSingleton()
	{
		Il2CppClassPointerStore<DebugSequencesSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer.Debugging", "DebugSequencesSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DebugSequencesSingleton>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DebugSequencesSingleton>.NativeClassPtr, ref this));
	}
}
