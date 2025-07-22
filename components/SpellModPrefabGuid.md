---
nav_exclude: true
search_exclude: true
---

# SpellModPrefabGuid

```csharp
public struct SpellModPrefabGuid
{
	static SpellModPrefabGuid()
	{
		Il2CppClassPointerStore<SpellModPrefabGuid>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "SpellModPrefabGuid");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellModPrefabGuid>.NativeClassPtr);
		SpellModPrefabGuid.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModPrefabGuid>.NativeClassPtr, "Condition");
		SpellModPrefabGuid.NativeFieldInfoPtr_SpellMod = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModPrefabGuid>.NativeClassPtr, "SpellMod");
		SpellModPrefabGuid.NativeFieldInfoPtr_Prefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModPrefabGuid>.NativeClassPtr, "Prefab");
		SpellModPrefabGuid.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModPrefabGuid>.NativeClassPtr, "Target");
		SpellModPrefabGuid.NativeFieldInfoPtr_TargetIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModPrefabGuid>.NativeClassPtr, "TargetIndex");
		SpellModPrefabGuid.NativeFieldInfoPtr_ValueIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModPrefabGuid>.NativeClassPtr, "ValueIndex");
		SpellModPrefabGuid.NativeFieldInfoPtr_UseSpellModValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModPrefabGuid>.NativeClassPtr, "UseSpellModValue");
		SpellModPrefabGuid.NativeMethodInfoPtr_ShouldApplyOnClient_Public_Virtual_Final_New_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpellModPrefabGuid>.NativeClassPtr, 100672254);
		SpellModPrefabGuid.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid_Private_Virtual_Final_New_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpellModPrefabGuid>.NativeClassPtr, 100672255);
		SpellModPrefabGuid.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_HasCondition_Private_Virtual_Final_New_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpellModPrefabGuid>.NativeClassPtr, 100672256);
	}

	public unsafe bool ShouldApplyOnClient()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpellModPrefabGuid.NativeMethodInfoPtr_ShouldApplyOnClient_Public_Virtual_Final_New_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe PrefabGUID ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpellModPrefabGuid.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid_Private_Virtual_Final_New_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool ProjectM_Shared_ISpellModComponent_HasCondition()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpellModPrefabGuid.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_HasCondition_Private_Virtual_Final_New_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellModPrefabGuid>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_SpellMod;
	private static readonly IntPtr NativeFieldInfoPtr_Prefab;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_TargetIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ValueIndex;
	private static readonly IntPtr NativeFieldInfoPtr_UseSpellModValue;
	private static readonly IntPtr NativeMethodInfoPtr_ShouldApplyOnClient_Public_Virtual_Final_New_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid_Private_Virtual_Final_New_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_HasCondition_Private_Virtual_Final_New_Boolean_0;

	public BlobAssetReference<ConditionBlob> Condition;

	public PrefabGUID SpellMod;

	public PrefabGUID Prefab;

	public SpellModPrefabGuidTarget Target;

	public int TargetIndex;

	public byte ValueIndex;

	public bool UseSpellModValue;
}
```

## Server Systems

- [SpellModSpawnSystem](/systems/server/SpellModSpawnSystem)

## Client Systems

- [SpellModSpawnSystem](/systems/client/SpellModSpawnSystem)
