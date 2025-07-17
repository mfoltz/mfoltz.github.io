---
nav_exclude: true
search_exclude: true
---

# Script_BloodAltar_TrackVBloodUnit_Server

```csharp
[StructLayout(2)]
public struct Script_BloodAltar_TrackVBloodUnit_Server
{
	static Script_BloodAltar_TrackVBloodUnit_Server()
	{
		Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Server>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_BloodAltar_TrackVBloodUnit_Server");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Server>.NativeClassPtr);
		Script_BloodAltar_TrackVBloodUnit_Server.NativeFieldInfoPtr_NextUnitCheckTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Server>.NativeClassPtr, "NextUnitCheckTime");
		Script_BloodAltar_TrackVBloodUnit_Server.NativeFieldInfoPtr_TrackingUnit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Server>.NativeClassPtr, "TrackingUnit");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Server>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NextUnitCheckTime;
	private static readonly IntPtr NativeFieldInfoPtr_TrackingUnit;
	[FieldOffset(0)]
	public double NextUnitCheckTime;
	[FieldOffset(8)]
	public Entity TrackingUnit;
}
