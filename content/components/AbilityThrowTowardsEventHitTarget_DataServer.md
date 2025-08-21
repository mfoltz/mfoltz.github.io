---
nav_exclude: true
search_exclude: true
---

```csharp
public struct AbilityThrowTowardsEventHitTarget_DataServer
{
	static AbilityThrowTowardsEventHitTarget_DataServer()
	{
		Il2CppClassPointerStore<AbilityThrowTowardsEventHitTarget_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "AbilityThrowTowardsEventHitTarget_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityThrowTowardsEventHitTarget_DataServer>.NativeClassPtr);
		AbilityThrowTowardsEventHitTarget_DataServer.NativeFieldInfoPtr_RandomHitRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityThrowTowardsEventHitTarget_DataServer>.NativeClassPtr, "RandomHitRadius");
		AbilityThrowTowardsEventHitTarget_DataServer.NativeFieldInfoPtr_NewThrowEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityThrowTowardsEventHitTarget_DataServer>.NativeClassPtr, "NewThrowEntity");
		AbilityThrowTowardsEventHitTarget_DataServer.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityThrowTowardsEventHitTarget_DataServer>.NativeClassPtr, "Count");
		AbilityThrowTowardsEventHitTarget_DataServer.NativeFieldInfoPtr_SetStartPositionToTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityThrowTowardsEventHitTarget_DataServer>.NativeClassPtr, "SetStartPositionToTarget");
		AbilityThrowTowardsEventHitTarget_DataServer.NativeFieldInfoPtr_SpawnOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityThrowTowardsEventHitTarget_DataServer>.NativeClassPtr, "SpawnOffset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityThrowTowardsEventHitTarget_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RandomHitRadius;
	private static readonly IntPtr NativeFieldInfoPtr_NewThrowEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Count;
	private static readonly IntPtr NativeFieldInfoPtr_SetStartPositionToTarget;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnOffset;

	public float RandomHitRadius;

	public PrefabGUID NewThrowEntity;

	public int Count;

	public bool SetStartPositionToTarget;

	public float3 SpawnOffset;
}
```
