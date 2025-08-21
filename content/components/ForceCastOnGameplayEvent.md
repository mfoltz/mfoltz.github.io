---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ForceCastOnGameplayEvent
{
	static ForceCastOnGameplayEvent()
	{
		Il2CppClassPointerStore<ForceCastOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ForceCastOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ForceCastOnGameplayEvent>.NativeClassPtr);
		ForceCastOnGameplayEvent.NativeFieldInfoPtr_ForceCastAbility = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ForceCastOnGameplayEvent>.NativeClassPtr, "ForceCastAbility");
		ForceCastOnGameplayEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ForceCastOnGameplayEvent>.NativeClassPtr, "Target");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ForceCastOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ForceCastAbility;
	private static readonly IntPtr NativeFieldInfoPtr_Target;

	public PrefabGUID ForceCastAbility;

	public ForceCastTarget Target;
}
```
