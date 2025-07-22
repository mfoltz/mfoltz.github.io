---
nav_exclude: true
search_exclude: false
---

# Team

```csharp
public struct Team
{
	static Team()
	{
		Il2CppClassPointerStore<Team>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Team");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Team>.NativeClassPtr);
		Team.NativeFieldInfoPtr_UNIT_TEAM = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Team>.NativeClassPtr, "UNIT_TEAM");
		Team.NativeFieldInfoPtr_NEUTRAL_TEAM = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Team>.NativeClassPtr, "NEUTRAL_TEAM");
		Team.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Team>.NativeClassPtr, "Value");
		Team.NativeFieldInfoPtr_FactionIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Team>.NativeClassPtr, "FactionIndex");
		Team.NativeFieldInfoPtr_CLAN_MASK = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Team>.NativeClassPtr, "CLAN_MASK");
		Team.NativeFieldInfoPtr_CONTEST_MASK = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Team>.NativeClassPtr, "CONTEST_MASK");
		Team.NativeFieldInfoPtr_CONTEST_TEAM_MASK = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Team>.NativeClassPtr, "CONTEST_TEAM_MASK");
		Team.NativeMethodInfoPtr_get_IsNeutralTeam_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664927);
		Team.NativeMethodInfoPtr_get_IsUnitTeam_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664928);
		Team.NativeMethodInfoPtr_get_IsNone_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664929);
		Team.NativeMethodInfoPtr_get_IsInContest_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664930);
		Team.NativeMethodInfoPtr_get_IsInContestTeam_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664931);
		Team.NativeMethodInfoPtr_get_Clan_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664932);
		Team.NativeMethodInfoPtr_get_Contest_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664933);
		Team.NativeMethodInfoPtr_get_ContestTeam_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664934);
		Team.NativeMethodInfoPtr_IsContesting_Public_Static_Boolean_Team_Team_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664935);
		Team.NativeMethodInfoPtr_SetContest_Public_Void_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664936);
		Team.NativeMethodInfoPtr_SetClan_Public_Void_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664937);
		Team.NativeMethodInfoPtr_IsValid_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664938);
		Team.NativeMethodInfoPtr_IsContestAllies_Public_Static_Boolean_Team_Team_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664939);
		Team.NativeMethodInfoPtr_IsAllies_Public_Static_Boolean_Team_Team_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664940);
		Team.NativeMethodInfoPtr_IsAllies_Public_Static_Boolean_EntityManager_Entity_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664941);
		Team.NativeMethodInfoPtr_IsAllies_Public_Static_Boolean_byref_ComponentLookup_1_Team_Entity_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664942);
		Team.NativeMethodInfoPtr_IsHostile_Public_Static_Boolean_Team_Team_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664943);
		Team.NativeMethodInfoPtr_IsInNeutralTeam_Public_Static_Boolean_Team_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664944);
		Team.NativeMethodInfoPtr_IsInUnitTeam_Public_Static_Boolean_Team_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664945);
		Team.NativeMethodInfoPtr_Equals_Public_Boolean_Team_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Team>.NativeClassPtr, 100664946);
	}
	public unsafe bool IsNeutralTeam
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_get_IsNeutralTeam_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool IsUnitTeam
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_get_IsUnitTeam_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool IsNone
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_get_IsNone_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool IsInContest
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_get_IsInContest_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool IsInContestTeam
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_get_IsInContestTeam_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe int Clan
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_get_Clan_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe int Contest
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_get_Contest_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe int ContestTeam
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_get_ContestTeam_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}

	public unsafe static bool IsContesting(Team team1, Team team2)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref team1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref team2;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_IsContesting_Public_Static_Boolean_Team_Team_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void SetContest(int contest, int team)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref contest;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref team;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_SetContest_Public_Void_Int32_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void SetClan(int clan)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref clan;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_SetClan_Public_Void_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe bool IsValid()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_IsValid_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool IsContestAllies(Team team1, Team team2)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref team1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref team2;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_IsContestAllies_Public_Static_Boolean_Team_Team_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool IsAllies(Team team1, Team team2)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref team1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref team2;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_IsAllies_Public_Static_Boolean_Team_Team_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool IsAllies(EntityManager entityManager, Entity entity1, Entity entity2)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity1;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity2;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_IsAllies_Public_Static_Boolean_EntityManager_Entity_Entity_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool IsAllies(ref ComponentLookup<Team> getTeam, Entity entity1, Entity entity2)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &getTeam;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity1;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity2;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_IsAllies_Public_Static_Boolean_byref_ComponentLookup_1_Team_Entity_Entity_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool IsHostile(Team team1, Team team2)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref team1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref team2;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_IsHostile_Public_Static_Boolean_Team_Team_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool IsInNeutralTeam(Team team)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref team;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_IsInNeutralTeam_Public_Static_Boolean_Team_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool IsInUnitTeam(Team team)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref team;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_IsInUnitTeam_Public_Static_Boolean_Team_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool Equals(Team other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Team.NativeMethodInfoPtr_Equals_Public_Boolean_Team_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Team>.NativeClassPtr, ref this));
	}
	public unsafe static int UNIT_TEAM
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(Team.NativeFieldInfoPtr_UNIT_TEAM, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(Team.NativeFieldInfoPtr_UNIT_TEAM, (void*)(&value));
		}
	}
	public unsafe static int NEUTRAL_TEAM
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(Team.NativeFieldInfoPtr_NEUTRAL_TEAM, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(Team.NativeFieldInfoPtr_NEUTRAL_TEAM, (void*)(&value));
		}
	}
	public unsafe static int CLAN_MASK
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(Team.NativeFieldInfoPtr_CLAN_MASK, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(Team.NativeFieldInfoPtr_CLAN_MASK, (void*)(&value));
		}
	}
	public unsafe static int CONTEST_MASK
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(Team.NativeFieldInfoPtr_CONTEST_MASK, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(Team.NativeFieldInfoPtr_CONTEST_MASK, (void*)(&value));
		}
	}
	public unsafe static uint CONTEST_TEAM_MASK
	{
		get
		{
			uint result;
			IL2CPP.il2cpp_field_static_get_value(Team.NativeFieldInfoPtr_CONTEST_TEAM_MASK, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(Team.NativeFieldInfoPtr_CONTEST_TEAM_MASK, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_UNIT_TEAM;
	private static readonly IntPtr NativeFieldInfoPtr_NEUTRAL_TEAM;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_FactionIndex;
	private static readonly IntPtr NativeFieldInfoPtr_CLAN_MASK;
	private static readonly IntPtr NativeFieldInfoPtr_CONTEST_MASK;
	private static readonly IntPtr NativeFieldInfoPtr_CONTEST_TEAM_MASK;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsNeutralTeam_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsUnitTeam_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsNone_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsInContest_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsInContestTeam_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Clan_Public_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Contest_Public_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_ContestTeam_Public_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsContesting_Public_Static_Boolean_Team_Team_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetContest_Public_Void_Int32_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetClan_Public_Void_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsValid_Public_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsContestAllies_Public_Static_Boolean_Team_Team_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsAllies_Public_Static_Boolean_Team_Team_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsAllies_Public_Static_Boolean_EntityManager_Entity_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsAllies_Public_Static_Boolean_byref_ComponentLookup_1_Team_Entity_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsHostile_Public_Static_Boolean_Team_Team_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsInNeutralTeam_Public_Static_Boolean_Team_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsInUnitTeam_Public_Static_Boolean_Team_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Boolean_Team_0;

	public int Value;

	public int FactionIndex;
}
```

## Server Systems

- [FlyLastValidPositionSystem](/systems/server/FlyLastValidPositionSystem)
- [SetTeamOnSpawnSystem](/systems/server/SetTeamOnSpawnSystem)
- [SpawnTeamSystem](/systems/server/SpawnTeamSystem)
- [VerifyRespawnPointConnectionsSystem](/systems/server/VerifyRespawnPointConnectionsSystem)

## Client Systems

- [ReservedEnemyTeamSystem](/systems/client/ReservedEnemyTeamSystem)
