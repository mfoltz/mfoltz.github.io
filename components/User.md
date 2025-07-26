# User

```csharp
[StructLayout(2)]
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
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1137946, XrefRangeEnd = 1137955, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(User.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1137955, XrefRangeEnd = 1137965, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe FixedString64Bytes ToFixedString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(User.NativeMethodInfoPtr_ToFixedString_Public_FixedString64Bytes_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 1137997, RefRangeEnd = 1138000, XrefRangeStart = 1137965, XrefRangeEnd = 1137997, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
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
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1138000, XrefRangeEnd = 1138001, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(User.NativeMethodInfoPtr_get_Empty_Public_Static_get_User_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(0)]
	public unsafe bool Equals(User other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(User.NativeMethodInfoPtr_Equals_Public_Boolean_User_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
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
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1138001, RefRangeEnd = 1138002, XrefRangeStart = 1138001, XrefRangeEnd = 1138001, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
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
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1138002, XrefRangeEnd = 1138004, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(User.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
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
	[FieldOffset(0)]
	public int Index;
	[FieldOffset(4)]
	public int Generation;
	[FieldOffset(8)]
	public int BufferPositionBits;
	[FieldOffset(12)]
	public int LastFullyAckedFrame;
	[FieldOffset(16)]
	public NetworkedEntity LocalCharacter;
	[FieldOffset(28)]
	public NetworkedEntity ClanEntity;
	[FieldOffset(40)]
	public ulong PlatformId;
	[FieldOffset(48)]
	public long TimeLastConnected;
	[FieldOffset(56)]
	public long TimeLastInput;
	[FieldOffset(64)]
	public FixedString64Bytes CharacterName;
	[FieldOffset(128)]
	public UserContentFlags UserContent;
	[FieldOffset(132)]
	public Nullable_Unboxed<int> CryptSpawnIndex;
	[FieldOffset(140)]
	public Entity FadeToBlackEntity;
	[FieldOffset(148)]
	[MarshalAs(4)]
	public bool AFKKickWarningSent;
	[FieldOffset(149)]
	[MarshalAs(4)]
	public bool IsBot;
	[FieldOffset(150)]
	[MarshalAs(4)]
	public bool IsAdmin;
	[FieldOffset(151)]
	[MarshalAs(4)]
	public bool IsConnected;
	[FieldOffset(152)]
	public ModifiableFloat3 ProxySyncPosition;
	[FieldOffset(164)]
	[MarshalAs(4)]
	public bool FirstTimeConnected;
}
