---
nav_exclude: true
search_exclude: true
---

# Script_SCTOnEvent_DataServer

```csharp
public struct Script_SCTOnEvent_DataServer
{
	static Script_SCTOnEvent_DataServer()
	{
		Il2CppClassPointerStore<Script_SCTOnEvent_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SCTOnEvent_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SCTOnEvent_DataServer>.NativeClassPtr);
		Script_SCTOnEvent_DataServer.NativeFieldInfoPtr_Text = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SCTOnEvent_DataServer>.NativeClassPtr, "Text");
		Script_SCTOnEvent_DataServer.NativeFieldInfoPtr_SCTType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SCTOnEvent_DataServer>.NativeClassPtr, "SCTType");
		Script_SCTOnEvent_DataServer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SCTOnEvent_DataServer>.NativeClassPtr, "Value");
		Script_SCTOnEvent_DataServer.NativeFieldInfoPtr_Location = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SCTOnEvent_DataServer>.NativeClassPtr, "Location");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SCTOnEvent_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Text;
	private static readonly IntPtr NativeFieldInfoPtr_SCTType;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_Location;

	public AssetGuid Text;

	public PrefabGUID SCTType;

	public float Value;

	public SCTTargetLocation Location;
}
```
