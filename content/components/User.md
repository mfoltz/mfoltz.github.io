---
nav_exclude: true
search_exclude: true
---

```csharp
public struct User
{
	static User()
	{
		Il2CppClassPointerStore<User>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "User");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<User>.NativeClassPtr);
		User.NativeFieldInfoPtr_Index = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "Index");
		User.NativeFieldInfoPtr_Generation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "Generation");
		User.NativeFieldInfoPtr_BufferPositionBits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "BufferPositionBits");
		User.NativeFieldInfoPtr_LastFullyAckedFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "LastFullyAckedFrame");
		User.NativeFieldInfoPtr_LocalCharacter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "LocalCharacter");
		User.NativeFieldInfoPtr_ClanEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "ClanEntity");
		User.NativeFieldInfoPtr_PlatformId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "PlatformId");
		User.NativeFieldInfoPtr_TimeLastConnected = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "TimeLastConnected");
		User.NativeFieldInfoPtr_TimeLastInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "TimeLastInput");
		User.NativeFieldInfoPtr_CharacterName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "CharacterName");
		User.NativeFieldInfoPtr_UserContent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "UserContent");
		User.NativeFieldInfoPtr_CryptSpawnIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "CryptSpawnIndex");
		User.NativeFieldInfoPtr_FadeToBlackEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "FadeToBlackEntity");
		User.NativeFieldInfoPtr_AFKKickWarningSent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "AFKKickWarningSent");
		User.NativeFieldInfoPtr_IsBot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "IsBot");
		User.NativeFieldInfoPtr_IsAdmin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "IsAdmin");
		User.NativeFieldInfoPtr_IsConnected = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "IsConnected");
		User.NativeFieldInfoPtr_ProxySyncPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "ProxySyncPosition");
		User.NativeFieldInfoPtr_FirstTimeConnected = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<User>.NativeClassPtr, "FirstTimeConnected");
		User.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<User>.NativeClassPtr, 100670514);
		User.NativeMethodInfoPtr_ToFixedString_Public_FixedString64Bytes_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<User>.NativeClassPtr, 100670515);
		User.NativeMethodInfoPtr_ToLogString_Public_FixedString128Bytes_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<User>.NativeClassPtr, 100670516);
		User.NativeMethodInfoPtr_get_Empty_Public_Static_get_User_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<User>.NativeClassPtr, 100670517);
		User.NativeMethodInfoPtr_Equals_Public_Boolean_User_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<User>.NativeClassPtr, 100670518);
		User.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_User_User_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<User>.NativeClassPtr, 100670519);
		User.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_User_User_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<User>.NativeClassPtr, 100670520);
		User.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<User>.NativeClassPtr, 100670521);
		User.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<User>.NativeClassPtr, 100670522);
	}

	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(User.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}

	public unsafe FixedString64Bytes ToFixedString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(User.NativeMethodInfoPtr_ToFixedString_Public_FixedString64Bytes_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe FixedString128Bytes ToLogString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(User.NativeMethodInfoPtr_ToLogString_Public_FixedString128Bytes_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public unsafe static User Empty
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(User.NativeMethodInfoPtr_get_Empty_Public_Static_get_User_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}

	public unsafe bool Equals(User other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(User.NativeMethodInfoPtr_Equals_Public_Boolean_User_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool operator !=(User user1, User user2)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref user1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref user2;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(User.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_User_User_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool operator ==(User user1, User user2)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref user1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref user2;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(User.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_User_User_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(User.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(User.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<User>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Index;
	private static readonly IntPtr NativeFieldInfoPtr_Generation;
	private static readonly IntPtr NativeFieldInfoPtr_BufferPositionBits;
	private static readonly IntPtr NativeFieldInfoPtr_LastFullyAckedFrame;
	private static readonly IntPtr NativeFieldInfoPtr_LocalCharacter;
	private static readonly IntPtr NativeFieldInfoPtr_ClanEntity;
	private static readonly IntPtr NativeFieldInfoPtr_PlatformId;
	private static readonly IntPtr NativeFieldInfoPtr_TimeLastConnected;
	private static readonly IntPtr NativeFieldInfoPtr_TimeLastInput;
	private static readonly IntPtr NativeFieldInfoPtr_CharacterName;
	private static readonly IntPtr NativeFieldInfoPtr_UserContent;
	private static readonly IntPtr NativeFieldInfoPtr_CryptSpawnIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FadeToBlackEntity;
	private static readonly IntPtr NativeFieldInfoPtr_AFKKickWarningSent;
	private static readonly IntPtr NativeFieldInfoPtr_IsBot;
	private static readonly IntPtr NativeFieldInfoPtr_IsAdmin;
	private static readonly IntPtr NativeFieldInfoPtr_IsConnected;
	private static readonly IntPtr NativeFieldInfoPtr_ProxySyncPosition;
	private static readonly IntPtr NativeFieldInfoPtr_FirstTimeConnected;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToFixedString_Public_FixedString64Bytes_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToLogString_Public_FixedString128Bytes_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Empty_Public_Static_get_User_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Boolean_User_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_User_User_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_User_User_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;

	public int Index;

	public int Generation;

	public int BufferPositionBits;

	public int LastFullyAckedFrame;

	public NetworkedEntity LocalCharacter;

	public NetworkedEntity ClanEntity;

	public ulong PlatformId;

	public long TimeLastConnected;

	public long TimeLastInput;

	public FixedString64Bytes CharacterName;

	public UserContentFlags UserContent;

	public Nullable_Unboxed<int> CryptSpawnIndex;

	public Entity FadeToBlackEntity;

	public bool AFKKickWarningSent;

	public bool IsBot;

	public bool IsAdmin;

	public bool IsConnected;

	public ModifiableFloat3 ProxySyncPosition;

	public bool FirstTimeConnected;
}
```

## Server Systems

- [KillAndDisableInactivePlayerAfterDuration]({{% relref "systems/server/KillAndDisableInactivePlayerAfterDuration.md" %}})
- [PlayerMapZonesDiscoverySystem]({{% relref "systems/server/PlayerMapZonesDiscoverySystem.md" %}})
- [RevealMapSystem]({{% relref "systems/server/RevealMapSystem.md" %}})
- [SendPacketSystem]({{% relref "systems/server/SendPacketSystem.md" %}})
- [SerializePersistenceSystemV2]({{% relref "systems/server/SerializePersistenceSystemV2.md" %}})
- [ServerBootstrapSystem]({{% relref "systems/server/ServerBootstrapSystem.md" %}})
- [SystemMessageSystem]({{% relref "systems/server/SystemMessageSystem.md" %}})
- [UpdateWaypointRegionSystem]({{% relref "systems/server/UpdateWaypointRegionSystem.md" %}})
- [UserActivityGridSystem]({{% relref "systems/server/UserActivityGridSystem.md" %}})

## Client Systems

- [EntityControlSystem]({{% relref "systems/client/EntityControlSystem.md" %}})
- [UserActivityGridSystem]({{% relref "systems/client/UserActivityGridSystem.md" %}})
