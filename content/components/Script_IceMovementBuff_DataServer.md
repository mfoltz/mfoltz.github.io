---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_IceMovementBuff_DataServer
{
	static Script_IceMovementBuff_DataServer()
	{
		Il2CppClassPointerStore<Script_IceMovementBuff_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_IceMovementBuff_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_IceMovementBuff_DataServer>.NativeClassPtr);
		Script_IceMovementBuff_DataServer.NativeFieldInfoPtr_Acceleration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IceMovementBuff_DataServer>.NativeClassPtr, "Acceleration");
		Script_IceMovementBuff_DataServer.NativeFieldInfoPtr_Friction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IceMovementBuff_DataServer>.NativeClassPtr, "Friction");
		Script_IceMovementBuff_DataServer.NativeFieldInfoPtr_AccerationModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IceMovementBuff_DataServer>.NativeClassPtr, "AccerationModId");
		Script_IceMovementBuff_DataServer.NativeFieldInfoPtr_FrictionModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IceMovementBuff_DataServer>.NativeClassPtr, "FrictionModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_IceMovementBuff_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Acceleration;
	private static readonly IntPtr NativeFieldInfoPtr_Friction;
	private static readonly IntPtr NativeFieldInfoPtr_AccerationModId;
	private static readonly IntPtr NativeFieldInfoPtr_FrictionModId;

	public float Acceleration;

	public float Friction;

	public ModificationId AccerationModId;

	public ModificationId FrictionModId;
}
```
