# Script_BloodAltar_TrackVBloodUnit_Client

```csharp
[StructLayout(2)]
public struct Script_BloodAltar_TrackVBloodUnit_Client
{
	static Script_BloodAltar_TrackVBloodUnit_Client()
	{
		Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Client>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_BloodAltar_TrackVBloodUnit_Client");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Client>.NativeClassPtr);
		Script_BloodAltar_TrackVBloodUnit_Client.NativeFieldInfoPtr_RemoveEffectDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Client>.NativeClassPtr, "RemoveEffectDistance");
		Script_BloodAltar_TrackVBloodUnit_Client.NativeFieldInfoPtr_InCombatBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Client>.NativeClassPtr, "InCombatBuff");
		Script_BloodAltar_TrackVBloodUnit_Client.NativeFieldInfoPtr_SpawnDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Client>.NativeClassPtr, "SpawnDistance");
		Script_BloodAltar_TrackVBloodUnit_Client.NativeFieldInfoPtr_TimeBetweenTracks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Client>.NativeClassPtr, "TimeBetweenTracks");
		Script_BloodAltar_TrackVBloodUnit_Client.NativeFieldInfoPtr_LastTrackPulse = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Client>.NativeClassPtr, "LastTrackPulse");
		Script_BloodAltar_TrackVBloodUnit_Client.NativeFieldInfoPtr_Projectile = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Client>.NativeClassPtr, "Projectile");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Client>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RemoveEffectDistance;
	private static readonly IntPtr NativeFieldInfoPtr_InCombatBuff;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnDistance;
	private static readonly IntPtr NativeFieldInfoPtr_TimeBetweenTracks;
	private static readonly IntPtr NativeFieldInfoPtr_LastTrackPulse;
	private static readonly IntPtr NativeFieldInfoPtr_Projectile;
	[FieldOffset(0)]
	public float RemoveEffectDistance;
	[FieldOffset(4)]
	public PrefabIdentifier InCombatBuff;
	[FieldOffset(8)]
	public float SpawnDistance;
	[FieldOffset(12)]
	public float TimeBetweenTracks;
	[FieldOffset(16)]
	public double LastTrackPulse;
	[FieldOffset(24)]
	public PrefabGUID Projectile;
}
