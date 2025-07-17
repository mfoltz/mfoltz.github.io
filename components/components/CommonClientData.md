---
nav_exclude: true
search_exclude: true
---

# CommonClientData

```csharp
[StructLayout(2)]
public struct CommonClientData
{
	static CommonClientData()
	{
		Il2CppClassPointerStore<CommonClientData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CommonClientData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CommonClientData>.NativeClassPtr);
		CommonClientData.NativeFieldInfoPtr_LocalUser = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData>.NativeClassPtr, "LocalUser");
		CommonClientData.NativeFieldInfoPtr_ServerGameBalanceSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData>.NativeClassPtr, "ServerGameBalanceSettings");
		CommonClientData.NativeFieldInfoPtr_PrefabLookupMap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData>.NativeClassPtr, "PrefabLookupMap");
		CommonClientData.NativeFieldInfoPtr_RootPrefabs = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData>.NativeClassPtr, "RootPrefabs");
		CommonClientData.NativeFieldInfoPtr_NetworkIdSingleton = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData>.NativeClassPtr, "NetworkIdSingleton");
		CommonClientData.NativeFieldInfoPtr_IsInSafeSpace = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData>.NativeClassPtr, "IsInSafeSpace");
		CommonClientData.NativeFieldInfoPtr_MapZoneCollection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData>.NativeClassPtr, "MapZoneCollection");
		CommonClientData.NativeMethodInfoPtr_get_HasPrefabLookupMap_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CommonClientData>.NativeClassPtr, 100666938);
	}
	public unsafe bool HasPrefabLookupMap
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1090940, XrefRangeEnd = 1090943, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CommonClientData.NativeMethodInfoPtr_get_HasPrefabLookupMap_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CommonClientData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LocalUser;
	private static readonly IntPtr NativeFieldInfoPtr_ServerGameBalanceSettings;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabLookupMap;
	private static readonly IntPtr NativeFieldInfoPtr_RootPrefabs;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkIdSingleton;
	private static readonly IntPtr NativeFieldInfoPtr_IsInSafeSpace;
	private static readonly IntPtr NativeFieldInfoPtr_MapZoneCollection;
	private static readonly IntPtr NativeMethodInfoPtr_get_HasPrefabLookupMap_Public_get_Boolean_0;
	[FieldOffset(0)]
	public CommonClientData.LocalUserData LocalUser;
	[FieldOffset(288)]
	public Nullable_Unboxed<ServerGameBalanceSettings> ServerGameBalanceSettings;
	[FieldOffset(1728)]
	public PrefabLookupMap PrefabLookupMap;
	[FieldOffset(1792)]
	public RootPrefabCollection RootPrefabs;
	[FieldOffset(2048)]
	public NetworkIdSystem.Singleton NetworkIdSingleton;
	[FieldOffset(2096)]
	[MarshalAs(4)]
	public bool IsInSafeSpace;
	[FieldOffset(2104)]
	public MapZoneCollection MapZoneCollection;
	[StructLayout(2)]
	public struct LocalUserData
	{
		static LocalUserData()
		{
			Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<CommonClientData>.NativeClassPtr, "LocalUserData");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr);
			CommonClientData.LocalUserData.NativeFieldInfoPtr_ControllerType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, "ControllerType");
			CommonClientData.LocalUserData.NativeFieldInfoPtr_UserEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, "UserEntity");
			CommonClientData.LocalUserData.NativeFieldInfoPtr_CharacterEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, "CharacterEntity");
			CommonClientData.LocalUserData.NativeFieldInfoPtr_ControlledEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, "ControlledEntity");
			CommonClientData.LocalUserData.NativeFieldInfoPtr_CameraEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, "CameraEntity");
			CommonClientData.LocalUserData.NativeFieldInfoPtr_ClanEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, "ClanEntity");
			CommonClientData.LocalUserData.NativeFieldInfoPtr_CharacterPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, "CharacterPosition");
			CommonClientData.LocalUserData.NativeFieldInfoPtr_CharacterRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, "CharacterRotation");
			CommonClientData.LocalUserData.NativeFieldInfoPtr_ControlledPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, "ControlledPosition");
			CommonClientData.LocalUserData.NativeFieldInfoPtr_ControlledRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, "ControlledRotation");
			CommonClientData.LocalUserData.NativeFieldInfoPtr_User = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, "User");
			CommonClientData.LocalUserData.NativeFieldInfoPtr_UserTeam = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, "UserTeam");
			CommonClientData.LocalUserData.NativeFieldInfoPtr_CharacterTeam = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, "CharacterTeam");
			CommonClientData.LocalUserData.NativeMethodInfoPtr_get_HasUser_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, 100666939);
			CommonClientData.LocalUserData.NativeMethodInfoPtr_get_HasCharacter_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, 100666940);
			CommonClientData.LocalUserData.NativeMethodInfoPtr_get_HasControlled_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, 100666941);
			CommonClientData.LocalUserData.NativeMethodInfoPtr_get_HasCamera_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, 100666942);
			CommonClientData.LocalUserData.NativeMethodInfoPtr_TryGetUser_Public_Boolean_byref_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, 100666943);
			CommonClientData.LocalUserData.NativeMethodInfoPtr_TryGetCharacter_Public_Boolean_byref_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, 100666944);
			CommonClientData.LocalUserData.NativeMethodInfoPtr_TryGetControlled_Public_Boolean_byref_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, 100666945);
			CommonClientData.LocalUserData.NativeMethodInfoPtr_IsAdmin_Public_Boolean_byref_SyncedServerDebugSettings_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, 100666946);
		}
		public unsafe bool HasUser
		{
			[CallerCount(0)]
			get
			{
				IntPtr* ptr = null;
				IntPtr intPtr2;
				IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CommonClientData.LocalUserData.NativeMethodInfoPtr_get_HasUser_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
				Il2CppException.RaiseExceptionIfNecessary(intPtr2);
				return *IL2CPP.il2cpp_object_unbox(intPtr);
			}
		}
		public unsafe bool HasCharacter
		{
			[CallerCount(0)]
			get
			{
				IntPtr* ptr = null;
				IntPtr intPtr2;
				IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CommonClientData.LocalUserData.NativeMethodInfoPtr_get_HasCharacter_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
				Il2CppException.RaiseExceptionIfNecessary(intPtr2);
				return *IL2CPP.il2cpp_object_unbox(intPtr);
			}
		}
		public unsafe bool HasControlled
		{
			[CallerCount(0)]
			get
			{
				IntPtr* ptr = null;
				IntPtr intPtr2;
				IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CommonClientData.LocalUserData.NativeMethodInfoPtr_get_HasControlled_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
				Il2CppException.RaiseExceptionIfNecessary(intPtr2);
				return *IL2CPP.il2cpp_object_unbox(intPtr);
			}
		}
		public unsafe bool HasCamera
		{
			[CallerCount(0)]
			get
			{
				IntPtr* ptr = null;
				IntPtr intPtr2;
				IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CommonClientData.LocalUserData.NativeMethodInfoPtr_get_HasCamera_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
				Il2CppException.RaiseExceptionIfNecessary(intPtr2);
				return *IL2CPP.il2cpp_object_unbox(intPtr);
			}
		}
		[CallerCount(0)]
		public unsafe bool TryGetUser(out Entity result)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &result;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CommonClientData.LocalUserData.NativeMethodInfoPtr_TryGetUser_Public_Boolean_byref_Entity_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		public unsafe bool TryGetCharacter(out Entity result)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &result;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CommonClientData.LocalUserData.NativeMethodInfoPtr_TryGetCharacter_Public_Boolean_byref_Entity_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		public unsafe bool TryGetControlled(out Entity result)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &result;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CommonClientData.LocalUserData.NativeMethodInfoPtr_TryGetControlled_Public_Boolean_byref_Entity_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		public unsafe bool IsAdmin([In] ref SyncedServerDebugSettings syncedServerDebugSettings)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &syncedServerDebugSettings;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CommonClientData.LocalUserData.NativeMethodInfoPtr_IsAdmin_Public_Boolean_byref_SyncedServerDebugSettings_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CommonClientData.LocalUserData>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_ControllerType;
		private static readonly IntPtr NativeFieldInfoPtr_UserEntity;
		private static readonly IntPtr NativeFieldInfoPtr_CharacterEntity;
		private static readonly IntPtr NativeFieldInfoPtr_ControlledEntity;
		private static readonly IntPtr NativeFieldInfoPtr_CameraEntity;
		private static readonly IntPtr NativeFieldInfoPtr_ClanEntity;
		private static readonly IntPtr NativeFieldInfoPtr_CharacterPosition;
		private static readonly IntPtr NativeFieldInfoPtr_CharacterRotation;
		private static readonly IntPtr NativeFieldInfoPtr_ControlledPosition;
		private static readonly IntPtr NativeFieldInfoPtr_ControlledRotation;
		private static readonly IntPtr NativeFieldInfoPtr_User;
		private static readonly IntPtr NativeFieldInfoPtr_UserTeam;
		private static readonly IntPtr NativeFieldInfoPtr_CharacterTeam;
		private static readonly IntPtr NativeMethodInfoPtr_get_HasUser_Public_get_Boolean_0;
		private static readonly IntPtr NativeMethodInfoPtr_get_HasCharacter_Public_get_Boolean_0;
		private static readonly IntPtr NativeMethodInfoPtr_get_HasControlled_Public_get_Boolean_0;
		private static readonly IntPtr NativeMethodInfoPtr_get_HasCamera_Public_get_Boolean_0;
		private static readonly IntPtr NativeMethodInfoPtr_TryGetUser_Public_Boolean_byref_Entity_0;
		private static readonly IntPtr NativeMethodInfoPtr_TryGetCharacter_Public_Boolean_byref_Entity_0;
		private static readonly IntPtr NativeMethodInfoPtr_TryGetControlled_Public_Boolean_byref_Entity_0;
		private static readonly IntPtr NativeMethodInfoPtr_IsAdmin_Public_Boolean_byref_SyncedServerDebugSettings_0;
		[FieldOffset(0)]
		public ControllerType ControllerType;
		[FieldOffset(4)]
		public Entity UserEntity;
		[FieldOffset(12)]
		public Entity CharacterEntity;
		[FieldOffset(20)]
		public Entity ControlledEntity;
		[FieldOffset(28)]
		public Entity CameraEntity;
		[FieldOffset(36)]
		public Entity ClanEntity;
		[FieldOffset(44)]
		public float3 CharacterPosition;
		[FieldOffset(56)]
		public quaternion CharacterRotation;
		[FieldOffset(72)]
		public float3 ControlledPosition;
		[FieldOffset(84)]
		public quaternion ControlledRotation;
		[FieldOffset(104)]
		public User User;
		[FieldOffset(272)]
		public Team UserTeam;
		[FieldOffset(280)]
		public Team CharacterTeam;
	}
}
