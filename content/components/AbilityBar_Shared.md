---
nav_exclude: true
search_exclude: true
---

```csharp
public struct AbilityBar_Shared
{
	static AbilityBar_Shared()
	{
		Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityBar_Shared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr);
		AbilityBar_Shared.NativeFieldInfoPtr_LimitAbilityPriority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "LimitAbilityPriority");
		AbilityBar_Shared.NativeFieldInfoPtr_GlobalCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "GlobalCooldown");
		AbilityBar_Shared.NativeFieldInfoPtr_CastStartTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "CastStartTime");
		AbilityBar_Shared.NativeFieldInfoPtr_CastTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "CastTime");
		AbilityBar_Shared.NativeFieldInfoPtr_PostCastTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "PostCastTime");
		AbilityBar_Shared.NativeFieldInfoPtr_InterruptTypes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "InterruptTypes");
		AbilityBar_Shared.NativeFieldInfoPtr_CooldownOnInterrupt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "CooldownOnInterrupt");
		AbilityBar_Shared.NativeFieldInfoPtr_FrameCompensation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "FrameCompensation");
		AbilityBar_Shared.NativeFieldInfoPtr_ServerInterruptCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "ServerInterruptCounter");
		AbilityBar_Shared.NativeFieldInfoPtr_CastStartedCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "CastStartedCounter");
		AbilityBar_Shared.NativeFieldInfoPtr_CastCompletedCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "CastCompletedCounter");
		AbilityBar_Shared.NativeFieldInfoPtr_ServerCastCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "ServerCastCounter");
		AbilityBar_Shared.NativeFieldInfoPtr_ForceCastGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "ForceCastGroup");
		AbilityBar_Shared.NativeFieldInfoPtr_CastGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "CastGroup");
		AbilityBar_Shared.NativeFieldInfoPtr_ThisFrameState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "ThisFrameState");
		AbilityBar_Shared.NativeFieldInfoPtr_CastAbility = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "CastAbility");
		AbilityBar_Shared.NativeFieldInfoPtr_CastGroupPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "CastGroupPrefabGuid");
		AbilityBar_Shared.NativeFieldInfoPtr_CastAbilityPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "CastAbilityPrefabGuid");
		AbilityBar_Shared.NativeFieldInfoPtr_CooldownRecoveryRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "CooldownRecoveryRate");
		AbilityBar_Shared.NativeFieldInfoPtr_PrimaryCooldownRecoveryRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "PrimaryCooldownRecoveryRate");
		AbilityBar_Shared.NativeFieldInfoPtr_TravelCooldownRecoveryRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "TravelCooldownRecoveryRate");
		AbilityBar_Shared.NativeFieldInfoPtr_FeedCooldownRecoveryRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "FeedCooldownRecoveryRate");
		AbilityBar_Shared.NativeFieldInfoPtr_WeaponCooldownRecoveryRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "WeaponCooldownRecoveryRate");
		AbilityBar_Shared.NativeFieldInfoPtr_SpellCooldownRecoveryRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "SpellCooldownRecoveryRate");
		AbilityBar_Shared.NativeFieldInfoPtr_UltimateCooldownRecoveryRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "UltimateCooldownRecoveryRate");
		AbilityBar_Shared.NativeFieldInfoPtr_AbilityAttackSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "AbilityAttackSpeed");
		AbilityBar_Shared.NativeFieldInfoPtr_PrimaryAttackSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "PrimaryAttackSpeed");
		AbilityBar_Shared.NativeFieldInfoPtr_SyncedIsCasting = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "SyncedIsCasting");
		AbilityBar_Shared.NativeFieldInfoPtr_IsChargeUp = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "IsChargeUp");
		AbilityBar_Shared.NativeFieldInfoPtr_ChargeUpData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "ChargeUpData");
		AbilityBar_Shared.NativeMethodInfoPtr_get_TotalCastTime_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, 100663702);
		AbilityBar_Shared.NativeMethodInfoPtr_GetCurrentCastTime_Public_Single_Double_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, 100663703);
		AbilityBar_Shared.NativeMethodInfoPtr_GetCurrentPostCastTime_Private_Single_Double_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, 100663704);
		AbilityBar_Shared.NativeMethodInfoPtr_GetCurrentTotalCastTime_Public_Single_Double_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, 100663705);
		AbilityBar_Shared.NativeMethodInfoPtr_IsCasting_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, 100663706);
		AbilityBar_Shared.NativeMethodInfoPtr_IsPreCasting_Public_Boolean_Double_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, 100663707);
		AbilityBar_Shared.NativeMethodInfoPtr_IsPostCasting_Public_Boolean_Double_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, 100663708);
		AbilityBar_Shared.NativeMethodInfoPtr_HasPostCast_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, 100663709);
	}
	public unsafe float TotalCastTime
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityBar_Shared.NativeMethodInfoPtr_get_TotalCastTime_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}

	public unsafe float GetCurrentCastTime(double serverTime)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref serverTime;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityBar_Shared.NativeMethodInfoPtr_GetCurrentCastTime_Public_Single_Double_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float GetCurrentPostCastTime(double serverTime)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref serverTime;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityBar_Shared.NativeMethodInfoPtr_GetCurrentPostCastTime_Private_Single_Double_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float GetCurrentTotalCastTime(double serverTime)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref serverTime;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityBar_Shared.NativeMethodInfoPtr_GetCurrentTotalCastTime_Public_Single_Double_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool IsCasting()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityBar_Shared.NativeMethodInfoPtr_IsCasting_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool IsPreCasting(double serverTime)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref serverTime;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityBar_Shared.NativeMethodInfoPtr_IsPreCasting_Public_Boolean_Double_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool IsPostCasting(double serverTime)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref serverTime;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityBar_Shared.NativeMethodInfoPtr_IsPostCasting_Public_Boolean_Double_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool HasPostCast()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityBar_Shared.NativeMethodInfoPtr_HasPostCast_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LimitAbilityPriority;
	private static readonly IntPtr NativeFieldInfoPtr_GlobalCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_CastStartTime;
	private static readonly IntPtr NativeFieldInfoPtr_CastTime;
	private static readonly IntPtr NativeFieldInfoPtr_PostCastTime;
	private static readonly IntPtr NativeFieldInfoPtr_InterruptTypes;
	private static readonly IntPtr NativeFieldInfoPtr_CooldownOnInterrupt;
	private static readonly IntPtr NativeFieldInfoPtr_FrameCompensation;
	private static readonly IntPtr NativeFieldInfoPtr_ServerInterruptCounter;
	private static readonly IntPtr NativeFieldInfoPtr_CastStartedCounter;
	private static readonly IntPtr NativeFieldInfoPtr_CastCompletedCounter;
	private static readonly IntPtr NativeFieldInfoPtr_ServerCastCounter;
	private static readonly IntPtr NativeFieldInfoPtr_ForceCastGroup;
	private static readonly IntPtr NativeFieldInfoPtr_CastGroup;
	private static readonly IntPtr NativeFieldInfoPtr_ThisFrameState;
	private static readonly IntPtr NativeFieldInfoPtr_CastAbility;
	private static readonly IntPtr NativeFieldInfoPtr_CastGroupPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_CastAbilityPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_CooldownRecoveryRate;
	private static readonly IntPtr NativeFieldInfoPtr_PrimaryCooldownRecoveryRate;
	private static readonly IntPtr NativeFieldInfoPtr_TravelCooldownRecoveryRate;
	private static readonly IntPtr NativeFieldInfoPtr_FeedCooldownRecoveryRate;
	private static readonly IntPtr NativeFieldInfoPtr_WeaponCooldownRecoveryRate;
	private static readonly IntPtr NativeFieldInfoPtr_SpellCooldownRecoveryRate;
	private static readonly IntPtr NativeFieldInfoPtr_UltimateCooldownRecoveryRate;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityAttackSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_PrimaryAttackSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_SyncedIsCasting;
	private static readonly IntPtr NativeFieldInfoPtr_IsChargeUp;
	private static readonly IntPtr NativeFieldInfoPtr_ChargeUpData;
	private static readonly IntPtr NativeMethodInfoPtr_get_TotalCastTime_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCurrentCastTime_Public_Single_Double_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCurrentPostCastTime_Private_Single_Double_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCurrentTotalCastTime_Public_Single_Double_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsCasting_Public_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsPreCasting_Public_Boolean_Double_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsPostCasting_Public_Boolean_Double_0;
	private static readonly IntPtr NativeMethodInfoPtr_HasPostCast_Public_Boolean_0;

	public ModifiableInt LimitAbilityPriority;

	public float GlobalCooldown;

	public double CastStartTime;

	public float CastTime;

	public float PostCastTime;

	public InterruptTypes InterruptTypes;

	public float CooldownOnInterrupt;

	public float FrameCompensation;

	public int ServerInterruptCounter;

	public int CastStartedCounter;

	public int CastCompletedCounter;

	public int ServerCastCounter;

	public PrefabGUID ForceCastGroup;

	public NetworkedEntity CastGroup;

	public AbilityCastingState ThisFrameState;

	public NetworkedEntity CastAbility;

	public PrefabGUID CastGroupPrefabGuid;

	public PrefabGUID CastAbilityPrefabGuid;

	public ModifiableFloat CooldownRecoveryRate;

	public ModifiableFloat PrimaryCooldownRecoveryRate;

	public ModifiableFloat TravelCooldownRecoveryRate;

	public ModifiableFloat FeedCooldownRecoveryRate;

	public ModifiableFloat WeaponCooldownRecoveryRate;

	public ModifiableFloat SpellCooldownRecoveryRate;

	public ModifiableFloat UltimateCooldownRecoveryRate;

	public ModifiableFloat AbilityAttackSpeed;

	public ModifiableFloat PrimaryAttackSpeed;

	public bool SyncedIsCasting;

	public bool IsChargeUp;

	public AbilityBar_Shared.ChargeUpState ChargeUpData;

	public struct ChargeUpState
	{
		static ChargeUpState()
		{
			Il2CppClassPointerStore<AbilityBar_Shared.ChargeUpState>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<AbilityBar_Shared>.NativeClassPtr, "ChargeUpState");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityBar_Shared.ChargeUpState>.NativeClassPtr);
			AbilityBar_Shared.ChargeUpState.NativeFieldInfoPtr_MinChargeTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared.ChargeUpState>.NativeClassPtr, "MinChargeTime");
			AbilityBar_Shared.ChargeUpState.NativeFieldInfoPtr_MaxChargeTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared.ChargeUpState>.NativeClassPtr, "MaxChargeTime");
			AbilityBar_Shared.ChargeUpState.NativeFieldInfoPtr_AllowReleaseBeforeMinTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared.ChargeUpState>.NativeClassPtr, "AllowReleaseBeforeMinTime");
			AbilityBar_Shared.ChargeUpState.NativeFieldInfoPtr_CastOnMaxTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Shared.ChargeUpState>.NativeClassPtr, "CastOnMaxTime");
			AbilityBar_Shared.ChargeUpState.NativeMethodInfoPtr_GetChargeUpTime_Public_Single_Double_Double_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityBar_Shared.ChargeUpState>.NativeClassPtr, 100663710);
			AbilityBar_Shared.ChargeUpState.NativeMethodInfoPtr_GetChargeUpTime_Public_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityBar_Shared.ChargeUpState>.NativeClassPtr, 100663711);
			AbilityBar_Shared.ChargeUpState.NativeMethodInfoPtr_GetChargeUpTimeMinMax_Public_Single_Double_Double_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityBar_Shared.ChargeUpState>.NativeClassPtr, 100663712);
		}

		public unsafe float GetChargeUpTime(double serverTime, double castStartTime)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref serverTime;
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref castStartTime;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityBar_Shared.ChargeUpState.NativeMethodInfoPtr_GetChargeUpTime_Public_Single_Double_Double_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		public unsafe float GetChargeUpTime(float timeSinceCast)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref timeSinceCast;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityBar_Shared.ChargeUpState.NativeMethodInfoPtr_GetChargeUpTime_Public_Single_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		public unsafe float GetChargeUpTimeMinMax(double serverTime, double castStartTime)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref serverTime;
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref castStartTime;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityBar_Shared.ChargeUpState.NativeMethodInfoPtr_GetChargeUpTimeMinMax_Public_Single_Double_Double_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityBar_Shared.ChargeUpState>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_MinChargeTime;
		private static readonly IntPtr NativeFieldInfoPtr_MaxChargeTime;
		private static readonly IntPtr NativeFieldInfoPtr_AllowReleaseBeforeMinTime;
		private static readonly IntPtr NativeFieldInfoPtr_CastOnMaxTime;
		private static readonly IntPtr NativeMethodInfoPtr_GetChargeUpTime_Public_Single_Double_Double_0;
		private static readonly IntPtr NativeMethodInfoPtr_GetChargeUpTime_Public_Single_Single_0;
		private static readonly IntPtr NativeMethodInfoPtr_GetChargeUpTimeMinMax_Public_Single_Double_Double_0;

		public float MinChargeTime;

		public float MaxChargeTime;

		public bool AllowReleaseBeforeMinTime;

		public bool CastOnMaxTime;
	}
}
```

## Client Systems

- [AbilityBarParentBinderSystem]({{% relref "systems/client/AbilityBarParentBinderSystem.md" %}})
