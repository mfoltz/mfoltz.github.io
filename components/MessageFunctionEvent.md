---
nav_exclude: true
search_exclude: true
---

# MessageFunctionEvent

```csharp
public struct MessageFunctionEvent
{
	static MessageFunctionEvent()
	{
		Il2CppClassPointerStore<MessageFunctionEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Scripting", "MessageFunctionEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MessageFunctionEvent>.NativeClassPtr);
		MessageFunctionEvent.NativeFieldInfoPtr_TargetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MessageFunctionEvent>.NativeClassPtr, "TargetEntity");
		MessageFunctionEvent.NativeFieldInfoPtr_FunctionNameHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MessageFunctionEvent>.NativeClassPtr, "FunctionNameHash");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MessageFunctionEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetEntity;
	private static readonly IntPtr NativeFieldInfoPtr_FunctionNameHash;

	public Entity TargetEntity;

	public int FunctionNameHash;
}
```

## Server Systems

- [MessageFunctionSystem](/systems/server/MessageFunctionSystem)
