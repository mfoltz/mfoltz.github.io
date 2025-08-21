---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Durability
{
	static Durability()
	{
		Il2CppClassPointerStore<Durability>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "Durability");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Durability>.NativeClassPtr);
		Durability.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Durability>.NativeClassPtr, "Value");
		Durability.NativeFieldInfoPtr_MaxDurability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Durability>.NativeClassPtr, "MaxDurability");
		Durability.NativeFieldInfoPtr_RepairRecipe = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Durability>.NativeClassPtr, "RepairRecipe");
		Durability.NativeFieldInfoPtr_LossType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Durability>.NativeClassPtr, "LossType");
		Durability.NativeFieldInfoPtr_TakeDamageDurabilityLossFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Durability>.NativeClassPtr, "TakeDamageDurabilityLossFactor");
		Durability.NativeFieldInfoPtr_DealDamageTypeModifiers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Durability>.NativeClassPtr, "DealDamageTypeModifiers");
		Durability.NativeFieldInfoPtr_IsBroken = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Durability>.NativeClassPtr, "IsBroken");
		Durability.NativeFieldInfoPtr_RepairSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Durability>.NativeClassPtr, "RepairSequence");
		Durability.NativeFieldInfoPtr_OneLevelFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Durability>.NativeClassPtr, "OneLevelFactor");
		Durability.NativeFieldInfoPtr_TwoLevelFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Durability>.NativeClassPtr, "TwoLevelFactor");
		Durability.NativeFieldInfoPtr_ThreeLevelFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Durability>.NativeClassPtr, "ThreeLevelFactor");
		Durability.NativeFieldInfoPtr_GLOBAL_DEAL_DAMAGE_FACTOR = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Durability>.NativeClassPtr, "GLOBAL_DEAL_DAMAGE_FACTOR");
		Durability.NativeFieldInfoPtr_GLOBAL_TAKE_DAMAGE_FACTOR = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Durability>.NativeClassPtr, "GLOBAL_TAKE_DAMAGE_FACTOR");
		Durability.NativeFieldInfoPtr_DestroyItemWhenBroken = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Durability>.NativeClassPtr, "DestroyItemWhenBroken");
		Durability.NativeMethodInfoPtr_ApplyDurabilityChangeByDamageDealt_Public_Void_EntityCategory_Single_Single_Int32_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Durability>.NativeClassPtr, 100672029);
		Durability.NativeMethodInfoPtr_ApplyDurabilityChangeByDamageTaken_Public_Void_Single_Single_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Durability>.NativeClassPtr, 100672030);
		Durability.NativeMethodInfoPtr_ApplyDurabilityChangeBySpellUsed_Public_Void_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Durability>.NativeClassPtr, 100672031);
		Durability.NativeMethodInfoPtr_GetRepairCostModifier_Private_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Durability>.NativeClassPtr, 100672032);
		Durability.NativeMethodInfoPtr_GetRepairCost_Public_NativeList_1_ItemRepairBuffer_PrefabLookupMap_EntityManager_Single_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Durability>.NativeClassPtr, 100672033);
		Durability.NativeMethodInfoPtr_GetRepairCost_Public_NativeList_1_ItemRepairBuffer_PrefabLookupMap_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Durability>.NativeClassPtr, 100672034);
		Durability.NativeMethodInfoPtr_Percentage_Public_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Durability>.NativeClassPtr, 100672035);
	}

	public unsafe void ApplyDurabilityChangeByDamageDealt(EntityCategory targetCategory, float damageDealt, float modifier, int unitLevel, float gearLevel, float reducedDurabilityOnResourceDamageFactor)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref targetCategory;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref damageDealt;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modifier;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref unitLevel;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref gearLevel;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref reducedDurabilityOnResourceDamageFactor;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Durability.NativeMethodInfoPtr_ApplyDurabilityChangeByDamageDealt_Public_Void_EntityCategory_Single_Single_Int32_Single_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void ApplyDurabilityChangeByDamageTaken(float damageTaken, float modifier, float maxHealth, float durabiltiySourceFactor)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref damageTaken;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modifier;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxHealth;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref durabiltiySourceFactor;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Durability.NativeMethodInfoPtr_ApplyDurabilityChangeByDamageTaken_Public_Void_Single_Single_Single_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void ApplyDurabilityChangeBySpellUsed(float spellCost)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellCost;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Durability.NativeMethodInfoPtr_ApplyDurabilityChangeBySpellUsed_Public_Void_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe float GetRepairCostModifier()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Durability.NativeMethodInfoPtr_GetRepairCostModifier_Private_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe NativeList<ItemRepairBuffer> GetRepairCost(PrefabLookupMap prefabLookupMap, EntityManager entityManager, float modifier, bool floorResult = true)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabLookupMap;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modifier;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref floorResult;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Durability.NativeMethodInfoPtr_GetRepairCost_Public_NativeList_1_ItemRepairBuffer_PrefabLookupMap_EntityManager_Single_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe NativeList<ItemRepairBuffer> GetRepairCost(PrefabLookupMap prefabLookupMap, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref prefabLookupMap;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Durability.NativeMethodInfoPtr_GetRepairCost_Public_NativeList_1_ItemRepairBuffer_PrefabLookupMap_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float Percentage()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Durability.NativeMethodInfoPtr_Percentage_Public_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Durability>.NativeClassPtr, ref this));
	}
	public unsafe static float GLOBAL_DEAL_DAMAGE_FACTOR
	{
		get
		{
			float result;
			IL2CPP.il2cpp_field_static_get_value(Durability.NativeFieldInfoPtr_GLOBAL_DEAL_DAMAGE_FACTOR, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(Durability.NativeFieldInfoPtr_GLOBAL_DEAL_DAMAGE_FACTOR, (void*)(&value));
		}
	}
	public unsafe static float GLOBAL_TAKE_DAMAGE_FACTOR
	{
		get
		{
			float result;
			IL2CPP.il2cpp_field_static_get_value(Durability.NativeFieldInfoPtr_GLOBAL_TAKE_DAMAGE_FACTOR, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(Durability.NativeFieldInfoPtr_GLOBAL_TAKE_DAMAGE_FACTOR, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDurability;
	private static readonly IntPtr NativeFieldInfoPtr_RepairRecipe;
	private static readonly IntPtr NativeFieldInfoPtr_LossType;
	private static readonly IntPtr NativeFieldInfoPtr_TakeDamageDurabilityLossFactor;
	private static readonly IntPtr NativeFieldInfoPtr_DealDamageTypeModifiers;
	private static readonly IntPtr NativeFieldInfoPtr_IsBroken;
	private static readonly IntPtr NativeFieldInfoPtr_RepairSequence;
	private static readonly IntPtr NativeFieldInfoPtr_OneLevelFactor;
	private static readonly IntPtr NativeFieldInfoPtr_TwoLevelFactor;
	private static readonly IntPtr NativeFieldInfoPtr_ThreeLevelFactor;
	private static readonly IntPtr NativeFieldInfoPtr_GLOBAL_DEAL_DAMAGE_FACTOR;
	private static readonly IntPtr NativeFieldInfoPtr_GLOBAL_TAKE_DAMAGE_FACTOR;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyItemWhenBroken;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyDurabilityChangeByDamageDealt_Public_Void_EntityCategory_Single_Single_Int32_Single_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyDurabilityChangeByDamageTaken_Public_Void_Single_Single_Single_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyDurabilityChangeBySpellUsed_Public_Void_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRepairCostModifier_Private_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRepairCost_Public_NativeList_1_ItemRepairBuffer_PrefabLookupMap_EntityManager_Single_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRepairCost_Public_NativeList_1_ItemRepairBuffer_PrefabLookupMap_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Percentage_Public_Single_0;

	public float Value;

	public float MaxDurability;

	public PrefabGUID RepairRecipe;

	public DurabilityLossType LossType;

	public float TakeDamageDurabilityLossFactor;

	public DurabilityDamageModifiers DealDamageTypeModifiers;

	public bool IsBroken;

	public SequenceGUID RepairSequence;

	public float OneLevelFactor;

	public float TwoLevelFactor;

	public float ThreeLevelFactor;

	public bool DestroyItemWhenBroken;
}
```

## Server Systems

- [SetupServerSettings]({{% relref "systems/server/SetupServerSettings.md" %}})

## Client Systems

- [SetupServerSettings]({{% relref "systems/client/SetupServerSettings.md" %}})
