---
nav_exclude: true
search_exclude: true
---

# Script_TeleportNearSpellTarget_DataServer

```csharp
[StructLayout(2)]
public struct Script_TeleportNearSpellTarget_DataServer
{
	static Script_TeleportNearSpellTarget_DataServer()
	{
		Il2CppClassPointerStore<Script_TeleportNearSpellTarget_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_TeleportNearSpellTarget_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_TeleportNearSpellTarget_DataServer>.NativeClassPtr);
		Script_TeleportNearSpellTarget_DataServer.NativeFieldInfoPtr_Range = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_TeleportNearSpellTarget_DataServer>.NativeClassPtr, "Range");
		Script_TeleportNearSpellTarget_DataServer.NativeFieldInfoPtr_NearAngles = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_TeleportNearSpellTarget_DataServer>.NativeClassPtr, "NearAngles");
		Script_TeleportNearSpellTarget_DataServer.NativeFieldInfoPtr_NearSteps = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_TeleportNearSpellTarget_DataServer>.NativeClassPtr, "NearSteps");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_TeleportNearSpellTarget_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Range;
	private static readonly IntPtr NativeFieldInfoPtr_NearAngles;
	private static readonly IntPtr NativeFieldInfoPtr_NearSteps;
	[FieldOffset(0)]
	public float Range;
	[FieldOffset(4)]
	public float NearAngles;
	[FieldOffset(8)]
	public int NearSteps;
}
