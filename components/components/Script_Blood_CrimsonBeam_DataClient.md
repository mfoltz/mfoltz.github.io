---
nav_exclude: true
search_exclude: true
---

# Script_Blood_CrimsonBeam_DataClient

```csharp
[StructLayout(2)]
public struct Script_Blood_CrimsonBeam_DataClient
{
	static Script_Blood_CrimsonBeam_DataClient()
	{
		Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataClient>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Blood_CrimsonBeam_DataClient");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataClient>.NativeClassPtr);
		Script_Blood_CrimsonBeam_DataClient.NativeFieldInfoPtr_TickRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataClient>.NativeClassPtr, "TickRate");
		Script_Blood_CrimsonBeam_DataClient.NativeFieldInfoPtr_LastTickTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataClient>.NativeClassPtr, "LastTickTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataClient>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TickRate;
	private static readonly IntPtr NativeFieldInfoPtr_LastTickTime;
	[FieldOffset(0)]
	public float TickRate;
	[FieldOffset(8)]
	public double LastTickTime;
}
