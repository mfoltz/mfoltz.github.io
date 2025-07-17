---
nav_exclude: true
search_exclude: true
---

# Script_GarlicAreaLeaveZoneDebuff_DataServer

```csharp
[StructLayout(2)]
public struct Script_GarlicAreaLeaveZoneDebuff_DataServer
{
	static Script_GarlicAreaLeaveZoneDebuff_DataServer()
	{
		Il2CppClassPointerStore<Script_GarlicAreaLeaveZoneDebuff_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_GarlicAreaLeaveZoneDebuff_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_GarlicAreaLeaveZoneDebuff_DataServer>.NativeClassPtr);
		Script_GarlicAreaLeaveZoneDebuff_DataServer.NativeFieldInfoPtr_DynamicStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicAreaLeaveZoneDebuff_DataServer>.NativeClassPtr, "DynamicStacks");
		Script_GarlicAreaLeaveZoneDebuff_DataServer.NativeFieldInfoPtr_DynamicStacksPerTick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicAreaLeaveZoneDebuff_DataServer>.NativeClassPtr, "DynamicStacksPerTick");
		Script_GarlicAreaLeaveZoneDebuff_DataServer.NativeFieldInfoPtr_TimeInterval = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicAreaLeaveZoneDebuff_DataServer>.NativeClassPtr, "TimeInterval");
		Script_GarlicAreaLeaveZoneDebuff_DataServer.NativeFieldInfoPtr_Timer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicAreaLeaveZoneDebuff_DataServer>.NativeClassPtr, "Timer");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_GarlicAreaLeaveZoneDebuff_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DynamicStacks;
	private static readonly IntPtr NativeFieldInfoPtr_DynamicStacksPerTick;
	private static readonly IntPtr NativeFieldInfoPtr_TimeInterval;
	private static readonly IntPtr NativeFieldInfoPtr_Timer;
	[FieldOffset(0)]
	public float DynamicStacks;
	[FieldOffset(4)]
	public float DynamicStacksPerTick;
	[FieldOffset(8)]
	public float TimeInterval;
	[FieldOffset(12)]
	public float Timer;
}
