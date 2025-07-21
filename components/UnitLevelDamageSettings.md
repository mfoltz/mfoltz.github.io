---
nav_exclude: true
search_exclude: false
---

# UnitLevelDamageSettings

```csharp
public struct UnitLevelDamageSettings
{
	static UnitLevelDamageSettings()
	{
		Il2CppClassPointerStore<UnitLevelDamageSettings>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UnitLevelDamageSettings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnitLevelDamageSettings>.NativeClassPtr);
		UnitLevelDamageSettings.NativeFieldInfoPtr_LevelDiff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitLevelDamageSettings>.NativeClassPtr, "LevelDiff");
		UnitLevelDamageSettings.NativeFieldInfoPtr_IncomingDamageModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitLevelDamageSettings>.NativeClassPtr, "IncomingDamageModifier");
		UnitLevelDamageSettings.NativeFieldInfoPtr_OutgoingDamageModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitLevelDamageSettings>.NativeClassPtr, "OutgoingDamageModifier");
		UnitLevelDamageSettings.NativeMethodInfoPtr_Lerp_Public_Static_UnitLevelDamageSettings_UnitLevelDamageSettings_UnitLevelDamageSettings_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnitLevelDamageSettings>.NativeClassPtr, 100675067);
	}

	public unsafe static UnitLevelDamageSettings Lerp(UnitLevelDamageSettings from, UnitLevelDamageSettings to, float s)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref from;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref to;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref s;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnitLevelDamageSettings.NativeMethodInfoPtr_Lerp_Public_Static_UnitLevelDamageSettings_UnitLevelDamageSettings_UnitLevelDamageSettings_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnitLevelDamageSettings>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LevelDiff;
	private static readonly IntPtr NativeFieldInfoPtr_IncomingDamageModifier;
	private static readonly IntPtr NativeFieldInfoPtr_OutgoingDamageModifier;
	private static readonly IntPtr NativeMethodInfoPtr_Lerp_Public_Static_UnitLevelDamageSettings_UnitLevelDamageSettings_UnitLevelDamageSettings_Single_0;

	public float LevelDiff;

	public float IncomingDamageModifier;

	public float OutgoingDamageModifier;
}
```
