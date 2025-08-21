---
nav_exclude: true
search_exclude: true
---

```csharp
public struct AbilityDirectionInaccuracy
{
	static AbilityDirectionInaccuracy()
	{
		Il2CppClassPointerStore<AbilityDirectionInaccuracy>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbilityDirectionInaccuracy");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityDirectionInaccuracy>.NativeClassPtr);
		AbilityDirectionInaccuracy.NativeFieldInfoPtr_MaxDegrees = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityDirectionInaccuracy>.NativeClassPtr, "MaxDegrees");
		AbilityDirectionInaccuracy.NativeFieldInfoPtr_CurrentDegrees = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityDirectionInaccuracy>.NativeClassPtr, "CurrentDegrees");
		AbilityDirectionInaccuracy.NativeFieldInfoPtr_OnlyOnMovingTargets = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityDirectionInaccuracy>.NativeClassPtr, "OnlyOnMovingTargets");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityDirectionInaccuracy>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaxDegrees;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentDegrees;
	private static readonly IntPtr NativeFieldInfoPtr_OnlyOnMovingTargets;

	public float MaxDegrees;

	public float CurrentDegrees;

	public bool OnlyOnMovingTargets;
}
```
