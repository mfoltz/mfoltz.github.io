---
nav_exclude: true
search_exclude: true
---

# Script_Buff_GrabToOwner_DataServer

```csharp
public struct Script_Buff_GrabToOwner_DataServer
{
	static Script_Buff_GrabToOwner_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_GrabToOwner_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_GrabToOwner_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_GrabToOwner_DataServer>.NativeClassPtr);
		Script_Buff_GrabToOwner_DataServer.NativeFieldInfoPtr_PositionOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_GrabToOwner_DataServer>.NativeClassPtr, "PositionOffset");
		Script_Buff_GrabToOwner_DataServer.NativeFieldInfoPtr_Offset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_GrabToOwner_DataServer>.NativeClassPtr, "Offset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_GrabToOwner_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PositionOffset;
	private static readonly IntPtr NativeFieldInfoPtr_Offset;

	public float3 PositionOffset;

	public float Offset;
}
```
