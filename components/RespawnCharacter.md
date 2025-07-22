---
nav_exclude: true
search_exclude: true
---

# RespawnCharacter

```csharp
public struct RespawnCharacter
{
	static RespawnCharacter()
	{
		Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RespawnCharacter");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr);
		RespawnCharacter.NativeFieldInfoPtr_TimeOfReady = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr, "TimeOfReady");
		RespawnCharacter.NativeFieldInfoPtr_TimeOfDeath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr, "TimeOfDeath");
		RespawnCharacter.NativeFieldInfoPtr_KillerPrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr, "KillerPrefabGUID");
		RespawnCharacter.NativeFieldInfoPtr_KillerSpellPrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr, "KillerSpellPrefabGUID");
		RespawnCharacter.NativeFieldInfoPtr_KillerEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr, "KillerEntity");
		RespawnCharacter.NativeFieldInfoPtr_KillerSpell = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr, "KillerSpell");
		RespawnCharacter.NativeFieldInfoPtr_MinTimeToRespawn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr, "MinTimeToRespawn");
		RespawnCharacter.NativeFieldInfoPtr_TimeToSpawn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr, "TimeToSpawn");
		RespawnCharacter.NativeFieldInfoPtr_SpawnPointIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr, "SpawnPointIndex");
		RespawnCharacter.NativeFieldInfoPtr_FadeEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr, "FadeEntity");
		RespawnCharacter.NativeFieldInfoPtr_SpawnLocationIcon = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr, "SpawnLocationIcon");
		RespawnCharacter.NativeFieldInfoPtr_IsReadyToRespawn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr, "IsReadyToRespawn");
		RespawnCharacter.NativeFieldInfoPtr_ChoiceHasBeenMade = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr, "ChoiceHasBeenMade");
		RespawnCharacter.NativeFieldInfoPtr_IsRespawning = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr, "IsRespawning");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RespawnCharacter>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TimeOfReady;
	private static readonly IntPtr NativeFieldInfoPtr_TimeOfDeath;
	private static readonly IntPtr NativeFieldInfoPtr_KillerPrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_KillerSpellPrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_KillerEntity;
	private static readonly IntPtr NativeFieldInfoPtr_KillerSpell;
	private static readonly IntPtr NativeFieldInfoPtr_MinTimeToRespawn;
	private static readonly IntPtr NativeFieldInfoPtr_TimeToSpawn;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnPointIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FadeEntity;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnLocationIcon;
	private static readonly IntPtr NativeFieldInfoPtr_IsReadyToRespawn;
	private static readonly IntPtr NativeFieldInfoPtr_ChoiceHasBeenMade;
	private static readonly IntPtr NativeFieldInfoPtr_IsRespawning;

	public double TimeOfReady;

	public long TimeOfDeath;

	public PrefabGUID KillerPrefabGUID;

	public PrefabGUID KillerSpellPrefabGUID;

	public NetworkedEntity KillerEntity;

	public NetworkedEntity KillerSpell;

	public float MinTimeToRespawn;

	public float TimeToSpawn;

	public int SpawnPointIndex;

	public Entity FadeEntity;

	public NetworkId SpawnLocationIcon;

	public bool IsReadyToRespawn;

	public bool ChoiceHasBeenMade;

	public bool IsRespawning;
}
```
