# SpawnCharacter

```csharp
[StructLayout(2)]
public struct SpawnCharacter
{
	static SpawnCharacter()
	{
		Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpawnCharacter");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr);
		SpawnCharacter.NativeFieldInfoPtr_User = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "User");
		SpawnCharacter.NativeFieldInfoPtr_CharacterPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "CharacterPrefab");
		SpawnCharacter.NativeFieldInfoPtr_UseCustomSpawnLocation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "UseCustomSpawnLocation");
		SpawnCharacter.NativeFieldInfoPtr_CustomSpawnLocation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "CustomSpawnLocation");
		SpawnCharacter.NativeFieldInfoPtr_SpawnLocationIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "SpawnLocationIndex");
		SpawnCharacter.NativeFieldInfoPtr_FirstTimeSpawn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "FirstTimeSpawn");
		SpawnCharacter.NativeFieldInfoPtr_FirstTimeSpawnBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "FirstTimeSpawnBuff");
		SpawnCharacter.NativeFieldInfoPtr_PvPProtectionBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "PvPProtectionBuff");
		SpawnCharacter.NativeFieldInfoPtr_LockSpellSlot1Buff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "LockSpellSlot1Buff");
		SpawnCharacter.NativeFieldInfoPtr_LockSpellSlot2Buff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "LockSpellSlot2Buff");
		SpawnCharacter.NativeFieldInfoPtr_PreviousCharacter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "PreviousCharacter");
		SpawnCharacter.NativeFieldInfoPtr_FadeOutEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "FadeOutEntity");
		SpawnCharacter.NativeFieldInfoPtr_HasSpawned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "HasSpawned");
		SpawnCharacter.NativeFieldInfoPtr_FrameSpawned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "FrameSpawned");
		SpawnCharacter.NativeFieldInfoPtr_TimeSpawned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "TimeSpawned");
		SpawnCharacter.NativeFieldInfoPtr_PostSpawn_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "PostSpawn_Character");
		SpawnCharacter.NativeFieldInfoPtr_PostSpawn_Coffin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "PostSpawn_Coffin");
		SpawnCharacter.NativeFieldInfoPtr_WaitingForContentHideBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "WaitingForContentHideBuff");
		SpawnCharacter.NativeFieldInfoPtr_HasDoneFirstSpawnAction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "HasDoneFirstSpawnAction");
		SpawnCharacter.NativeFieldInfoPtr_Customization = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "Customization");
		SpawnCharacter.NativeFieldInfoPtr_CoffinEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, "CoffinEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnCharacter>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_User;
	private static readonly IntPtr NativeFieldInfoPtr_CharacterPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_UseCustomSpawnLocation;
	private static readonly IntPtr NativeFieldInfoPtr_CustomSpawnLocation;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnLocationIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FirstTimeSpawn;
	private static readonly IntPtr NativeFieldInfoPtr_FirstTimeSpawnBuff;
	private static readonly IntPtr NativeFieldInfoPtr_PvPProtectionBuff;
	private static readonly IntPtr NativeFieldInfoPtr_LockSpellSlot1Buff;
	private static readonly IntPtr NativeFieldInfoPtr_LockSpellSlot2Buff;
	private static readonly IntPtr NativeFieldInfoPtr_PreviousCharacter;
	private static readonly IntPtr NativeFieldInfoPtr_FadeOutEntity;
	private static readonly IntPtr NativeFieldInfoPtr_HasSpawned;
	private static readonly IntPtr NativeFieldInfoPtr_FrameSpawned;
	private static readonly IntPtr NativeFieldInfoPtr_TimeSpawned;
	private static readonly IntPtr NativeFieldInfoPtr_PostSpawn_Character;
	private static readonly IntPtr NativeFieldInfoPtr_PostSpawn_Coffin;
	private static readonly IntPtr NativeFieldInfoPtr_WaitingForContentHideBuff;
	private static readonly IntPtr NativeFieldInfoPtr_HasDoneFirstSpawnAction;
	private static readonly IntPtr NativeFieldInfoPtr_Customization;
	private static readonly IntPtr NativeFieldInfoPtr_CoffinEntity;
	[FieldOffset(0)]
	public Entity User;
	[FieldOffset(8)]
	public Entity CharacterPrefab;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool UseCustomSpawnLocation;
	[FieldOffset(20)]
	public float3 CustomSpawnLocation;
	[FieldOffset(32)]
	public int SpawnLocationIndex;
	[FieldOffset(36)]
	[MarshalAs(4)]
	public bool FirstTimeSpawn;
	[FieldOffset(40)]
	public Entity FirstTimeSpawnBuff;
	[FieldOffset(48)]
	public PrefabGUID PvPProtectionBuff;
	[FieldOffset(52)]
	public PrefabGUID LockSpellSlot1Buff;
	[FieldOffset(56)]
	public PrefabGUID LockSpellSlot2Buff;
	[FieldOffset(60)]
	public Entity PreviousCharacter;
	[FieldOffset(68)]
	public Entity FadeOutEntity;
	[FieldOffset(76)]
	[MarshalAs(4)]
	public bool HasSpawned;
	[FieldOffset(80)]
	public int FrameSpawned;
	[FieldOffset(88)]
	public double TimeSpawned;
	[FieldOffset(96)]
	public Entity PostSpawn_Character;
	[FieldOffset(104)]
	public Entity PostSpawn_Coffin;
	[FieldOffset(112)]
	public Entity WaitingForContentHideBuff;
	[FieldOffset(120)]
	[MarshalAs(4)]
	public bool HasDoneFirstSpawnAction;
	[FieldOffset(121)]
	public CustomizationFeatures Customization;
	[FieldOffset(132)]
	public Entity CoffinEntity;
}
