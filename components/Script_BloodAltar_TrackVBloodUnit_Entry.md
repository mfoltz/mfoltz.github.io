---
nav_exclude: true
search_exclude: true
---

# Script_BloodAltar_TrackVBloodUnit_Entry

```csharp
[StructLayout(2)]
public struct Script_BloodAltar_TrackVBloodUnit_Entry
{
	static Script_BloodAltar_TrackVBloodUnit_Entry()
	{
		Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Entry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_BloodAltar_TrackVBloodUnit_Entry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Entry>.NativeClassPtr);
		Script_BloodAltar_TrackVBloodUnit_Entry.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Entry>.NativeClassPtr, "Position");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Entry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	[FieldOffset(0)]
	public float3 Position;
}
