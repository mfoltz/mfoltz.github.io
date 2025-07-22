---
nav_exclude: true
search_exclude: false
---

# Health

```csharp
public struct Health
{
	static Health()
	{
		Il2CppClassPointerStore<Health>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Health");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Health>.NativeClassPtr);
		Health.NativeFieldInfoPtr_MaxHealth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Health>.NativeClassPtr, "MaxHealth");
		Health.NativeFieldInfoPtr_TimeOfDeath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Health>.NativeClassPtr, "TimeOfDeath");
		Health.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Health>.NativeClassPtr, "Value");
		Health.NativeFieldInfoPtr_MaxRecoveryHealth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Health>.NativeClassPtr, "MaxRecoveryHealth");
		Health.NativeFieldInfoPtr_IsDead = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Health>.NativeClassPtr, "IsDead");
		Health.NativeFieldInfoPtr_MAX_HEALTH_THRESHOLD = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Health>.NativeClassPtr, "MAX_HEALTH_THRESHOLD");
		Health.NativeMethodInfoPtr_IsAtMaxHealth_Public_Static_Boolean_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Health>.NativeClassPtr, 100664572);
		Health.NativeMethodInfoPtr_IsAtMaxHealth_Public_Static_Boolean_byref_Health_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Health>.NativeClassPtr, 100664573);
	}

	public unsafe static bool IsAtMaxHealth(float health, float maxHealth)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref health;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxHealth;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Health.NativeMethodInfoPtr_IsAtMaxHealth_Public_Static_Boolean_Single_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool IsAtMaxHealth([In] ref Health health)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &health;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Health.NativeMethodInfoPtr_IsAtMaxHealth_Public_Static_Boolean_byref_Health_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Health>.NativeClassPtr, ref this));
	}
	public unsafe static float MAX_HEALTH_THRESHOLD
	{
		get
		{
			float result;
			IL2CPP.il2cpp_field_static_get_value(Health.NativeFieldInfoPtr_MAX_HEALTH_THRESHOLD, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(Health.NativeFieldInfoPtr_MAX_HEALTH_THRESHOLD, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaxHealth;
	private static readonly IntPtr NativeFieldInfoPtr_TimeOfDeath;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRecoveryHealth;
	private static readonly IntPtr NativeFieldInfoPtr_IsDead;
	private static readonly IntPtr NativeFieldInfoPtr_MAX_HEALTH_THRESHOLD;
	private static readonly IntPtr NativeMethodInfoPtr_IsAtMaxHealth_Public_Static_Boolean_Single_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsAtMaxHealth_Public_Static_Boolean_byref_Health_0;

	public ModifiableFloat MaxHealth;

	public double TimeOfDeath;

	public float Value;

	public float MaxRecoveryHealth;

	public bool IsDead;
}
```

## Server Systems

- [MinionSpawnSystem](/systems/server/MinionSpawnSystem)
- [ServantPowerSystem](/systems/server/ServantPowerSystem)
