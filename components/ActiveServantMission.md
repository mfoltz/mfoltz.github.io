---
nav_exclude: true
search_exclude: true
---

# ActiveServantMission

```csharp
[StructLayout(2)]
public struct ActiveServantMission
{
	static ActiveServantMission()
	{
		Il2CppClassPointerStore<ActiveServantMission>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "ActiveServantMission");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ActiveServantMission>.NativeClassPtr);
		ActiveServantMission.NativeFieldInfoPtr_MissionID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ActiveServantMission>.NativeClassPtr, "MissionID");
		ActiveServantMission.NativeFieldInfoPtr_MissionStartTimeTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ActiveServantMission>.NativeClassPtr, "MissionStartTimeTicks");
		ActiveServantMission.NativeFieldInfoPtr_MissionLengthSeconds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ActiveServantMission>.NativeClassPtr, "MissionLengthSeconds");
		ActiveServantMission.NativeFieldInfoPtr_MissiontDataId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ActiveServantMission>.NativeClassPtr, "MissiontDataId");
		ActiveServantMission.NativeFieldInfoPtr_Servant1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ActiveServantMission>.NativeClassPtr, "Servant1");
		ActiveServantMission.NativeFieldInfoPtr_Servant2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ActiveServantMission>.NativeClassPtr, "Servant2");
		ActiveServantMission.NativeFieldInfoPtr_Servant3 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ActiveServantMission>.NativeClassPtr, "Servant3");
		ActiveServantMission.NativeFieldInfoPtr_NumberOfServants = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ActiveServantMission>.NativeClassPtr, "NumberOfServants");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ActiveServantMission>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MissionID;
	private static readonly IntPtr NativeFieldInfoPtr_MissionStartTimeTicks;
	private static readonly IntPtr NativeFieldInfoPtr_MissionLengthSeconds;
	private static readonly IntPtr NativeFieldInfoPtr_MissiontDataId;
	private static readonly IntPtr NativeFieldInfoPtr_Servant1;
	private static readonly IntPtr NativeFieldInfoPtr_Servant2;
	private static readonly IntPtr NativeFieldInfoPtr_Servant3;
	private static readonly IntPtr NativeFieldInfoPtr_NumberOfServants;
	[FieldOffset(0)]
	public PrefabGUID MissionID;
	[FieldOffset(8)]
	public long MissionStartTimeTicks;
	[FieldOffset(16)]
	public float MissionLengthSeconds;
	[FieldOffset(20)]
	public int MissiontDataId;
	[FieldOffset(24)]
	public NetworkedEntity Servant1;
	[FieldOffset(36)]
	public NetworkedEntity Servant2;
	[FieldOffset(48)]
	public NetworkedEntity Servant3;
	[FieldOffset(60)]
	public int NumberOfServants;
}
