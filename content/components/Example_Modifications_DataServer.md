---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Example_Modifications_DataServer
{
	static Example_Modifications_DataServer()
	{
		Il2CppClassPointerStore<Example_Modifications_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Example_Modifications_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Example_Modifications_DataServer>.NativeClassPtr);
		Example_Modifications_DataServer.NativeFieldInfoPtr_ModifiableValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Example_Modifications_DataServer>.NativeClassPtr, "ModifiableValue");
		Example_Modifications_DataServer.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Example_Modifications_DataServer>.NativeClassPtr, "ModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Example_Modifications_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ModifiableValue;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;

	public ModifiableFloat ModifiableValue;

	public ModificationId ModificationId;
}
```
