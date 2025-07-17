---
nav_exclude: true
search_exclude: true
---

# AbilitySpawnPrefabOnCast

```csharp
[StructLayout(2)]
public struct AbilitySpawnPrefabOnCast
{
	static AbilitySpawnPrefabOnCast()
	{
		Il2CppClassPointerStore<AbilitySpawnPrefabOnCast>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilitySpawnPrefabOnCast");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilitySpawnPrefabOnCast>.NativeClassPtr);
		AbilitySpawnPrefabOnCast.NativeFieldInfoPtr_SpawnPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySpawnPrefabOnCast>.NativeClassPtr, "SpawnPrefab");
		AbilitySpawnPrefabOnCast.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySpawnPrefabOnCast>.NativeClassPtr, "Target");
		AbilitySpawnPrefabOnCast.NativeFieldInfoPtr_TargetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySpawnPrefabOnCast>.NativeClassPtr, "TargetEntity");
		AbilitySpawnPrefabOnCast.NativeFieldInfoPtr_HoverDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySpawnPrefabOnCast>.NativeClassPtr, "HoverDistance");
		AbilitySpawnPrefabOnCast.NativeFieldInfoPtr_HoverCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySpawnPrefabOnCast>.NativeClassPtr, "HoverCondition");
		AbilitySpawnPrefabOnCast.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySpawnPrefabOnCast>.NativeClassPtr, "Condition");
		AbilitySpawnPrefabOnCast.NativeFieldInfoPtr_HoverMaxDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySpawnPrefabOnCast>.NativeClassPtr, "HoverMaxDistance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilitySpawnPrefabOnCast>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_TargetEntity;
	private static readonly IntPtr NativeFieldInfoPtr_HoverDistance;
	private static readonly IntPtr NativeFieldInfoPtr_HoverCondition;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_HoverMaxDistance;
	[FieldOffset(0)]
	public PrefabGUID SpawnPrefab;
	[FieldOffset(4)]
	public AbilitySpawnTarget Target;
	[FieldOffset(8)]
	public Entity TargetEntity;
	[FieldOffset(16)]
	public float HoverDistance;
	[FieldOffset(24)]
	public BlobAssetReference<ConditionBlob> HoverCondition;
	[FieldOffset(32)]
	public BlobAssetReference<ConditionBlob> Condition;
	[FieldOffset(40)]
	public float HoverMaxDistance;
}
