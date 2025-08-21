---
nav_exclude: true
search_exclude: true
---

```csharp
public struct PlayerLevelDamageSettings
{
	static PlayerLevelDamageSettings()
	{
		Il2CppClassPointerStore<PlayerLevelDamageSettings>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PlayerLevelDamageSettings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlayerLevelDamageSettings>.NativeClassPtr);
		PlayerLevelDamageSettings.NativeFieldInfoPtr_LevelDiff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayerLevelDamageSettings>.NativeClassPtr, "LevelDiff");
		PlayerLevelDamageSettings.NativeFieldInfoPtr_DamageModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayerLevelDamageSettings>.NativeClassPtr, "DamageModifier");
		PlayerLevelDamageSettings.NativeMethodInfoPtr_Lerp_Public_Static_PlayerLevelDamageSettings_PlayerLevelDamageSettings_PlayerLevelDamageSettings_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PlayerLevelDamageSettings>.NativeClassPtr, 100675060);
	}

	public unsafe static PlayerLevelDamageSettings Lerp(PlayerLevelDamageSettings from, PlayerLevelDamageSettings to, float s)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref from;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref to;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref s;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PlayerLevelDamageSettings.NativeMethodInfoPtr_Lerp_Public_Static_PlayerLevelDamageSettings_PlayerLevelDamageSettings_PlayerLevelDamageSettings_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlayerLevelDamageSettings>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LevelDiff;
	private static readonly IntPtr NativeFieldInfoPtr_DamageModifier;
	private static readonly IntPtr NativeMethodInfoPtr_Lerp_Public_Static_PlayerLevelDamageSettings_PlayerLevelDamageSettings_PlayerLevelDamageSettings_Single_0;

	public float LevelDiff;

	public float DamageModifier;
}
```
