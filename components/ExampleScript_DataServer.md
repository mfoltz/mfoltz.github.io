---
nav_exclude: true
search_exclude: true
---

# ExampleScript_DataServer

```csharp
public struct ExampleScript_DataServer
{
	static ExampleScript_DataServer()
	{
		Il2CppClassPointerStore<ExampleScript_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "ExampleScript_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ExampleScript_DataServer>.NativeClassPtr);
		ExampleScript_DataServer.NativeFieldInfoPtr_ServerValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ExampleScript_DataServer>.NativeClassPtr, "ServerValue");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ExampleScript_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ServerValue;

	public FixedString128Bytes ServerValue;
}
```
