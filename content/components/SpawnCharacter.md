---
nav_exclude: true
search_exclude: true
---

# SpawnCharacter

```csharp
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

	public Entity User;

	public Entity CharacterPrefab;

	public bool UseCustomSpawnLocation;

	public float3 CustomSpawnLocation;

	public int SpawnLocationIndex;

	public bool FirstTimeSpawn;

	public Entity FirstTimeSpawnBuff;

	public PrefabGUID PvPProtectionBuff;

	public PrefabGUID LockSpellSlot1Buff;

	public PrefabGUID LockSpellSlot2Buff;

	public Entity PreviousCharacter;

	public Entity FadeOutEntity;

	public bool HasSpawned;

	public int FrameSpawned;

	public double TimeSpawned;

	public Entity PostSpawn_Character;

	public Entity PostSpawn_Coffin;

	public Entity WaitingForContentHideBuff;

	public bool HasDoneFirstSpawnAction;

	public CustomizationFeatures Customization;

	public Entity CoffinEntity;
}
```

## Server Systems

- [SpawnCharacterSystem](/systems/server/SpawnCharacterSystem)
