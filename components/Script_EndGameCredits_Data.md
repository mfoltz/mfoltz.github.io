# Script_EndGameCredits_Data

```csharp
[StructLayout(2)]
public struct Script_EndGameCredits_Data
{
	static Script_EndGameCredits_Data()
	{
		Il2CppClassPointerStore<Script_EndGameCredits_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_EndGameCredits_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_EndGameCredits_Data>.NativeClassPtr);
		Script_EndGameCredits_Data.NativeFieldInfoPtr_TimePlayed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_EndGameCredits_Data>.NativeClassPtr, "TimePlayed");
		Script_EndGameCredits_Data.NativeFieldInfoPtr_Age = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_EndGameCredits_Data>.NativeClassPtr, "Age");
		Script_EndGameCredits_Data.NativeFieldInfoPtr_Deaths = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_EndGameCredits_Data>.NativeClassPtr, "Deaths");
		Script_EndGameCredits_Data.NativeFieldInfoPtr_VBloodKills = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_EndGameCredits_Data>.NativeClassPtr, "VBloodKills");
		Script_EndGameCredits_Data.NativeFieldInfoPtr_UnitKills = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_EndGameCredits_Data>.NativeClassPtr, "UnitKills");
		Script_EndGameCredits_Data.NativeFieldInfoPtr_WaypointBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_EndGameCredits_Data>.NativeClassPtr, "WaypointBuff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_EndGameCredits_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TimePlayed;
	private static readonly IntPtr NativeFieldInfoPtr_Age;
	private static readonly IntPtr NativeFieldInfoPtr_Deaths;
	private static readonly IntPtr NativeFieldInfoPtr_VBloodKills;
	private static readonly IntPtr NativeFieldInfoPtr_UnitKills;
	private static readonly IntPtr NativeFieldInfoPtr_WaypointBuff;
	[FieldOffset(0)]
	public float TimePlayed;
	[FieldOffset(4)]
	public float Age;
	[FieldOffset(8)]
	public int Deaths;
	[FieldOffset(12)]
	public int VBloodKills;
	[FieldOffset(16)]
	public int UnitKills;
	[FieldOffset(20)]
	public PrefabGUID WaypointBuff;
}
