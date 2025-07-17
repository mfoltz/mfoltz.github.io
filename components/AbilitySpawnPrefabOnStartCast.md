---
nav_exclude: true
search_exclude: true
---

# AbilitySpawnPrefabOnStartCast

```csharp
[Serializable]
[StructLayout(2)]
public struct AbilitySpawnPrefabOnStartCast
{
	static AbilitySpawnPrefabOnStartCast()
	{
		Il2CppClassPointerStore<AbilitySpawnPrefabOnStartCast>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbilitySpawnPrefabOnStartCast");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilitySpawnPrefabOnStartCast>.NativeClassPtr);
		AbilitySpawnPrefabOnStartCast.NativeFieldInfoPtr_SpawnPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySpawnPrefabOnStartCast>.NativeClassPtr, "SpawnPrefab");
		AbilitySpawnPrefabOnStartCast.NativeFieldInfoPtr_BuffDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySpawnPrefabOnStartCast>.NativeClassPtr, "BuffDuration");
		AbilitySpawnPrefabOnStartCast.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySpawnPrefabOnStartCast>.NativeClassPtr, "Condition");
		AbilitySpawnPrefabOnStartCast.NativeFieldInfoPtr_DestroyWhenCastDone = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySpawnPrefabOnStartCast>.NativeClassPtr, "DestroyWhenCastDone");
		AbilitySpawnPrefabOnStartCast.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySpawnPrefabOnStartCast>.NativeClassPtr, "Target");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilitySpawnPrefabOnStartCast>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_BuffDuration;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyWhenCastDone;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	[FieldOffset(0)]
	public PrefabGUID SpawnPrefab;
	[FieldOffset(4)]
	public float BuffDuration;
	[FieldOffset(8)]
	public BlobAssetReference<ConditionBlob> Condition;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool DestroyWhenCastDone;
	[FieldOffset(17)]
	public AbilitySpawnPrefabOnStartCast.SpawnTarget Target;
	public enum SpawnTarget : byte
	{
		Owner,
		Unit_Mount,
		Unit_Mounter
	}
}
