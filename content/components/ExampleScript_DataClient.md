---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ExampleScript_DataClient
{
	static ExampleScript_DataClient()
	{
		Il2CppClassPointerStore<ExampleScript_DataClient>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "ExampleScript_DataClient");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ExampleScript_DataClient>.NativeClassPtr);
		ExampleScript_DataClient.NativeFieldInfoPtr_ClientValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ExampleScript_DataClient>.NativeClassPtr, "ClientValue");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ExampleScript_DataClient>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ClientValue;

	public FixedString128Bytes ClientValue;
}
```
