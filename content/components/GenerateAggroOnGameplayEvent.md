---
nav_exclude: true
search_exclude: true
---

# GenerateAggroOnGameplayEvent

```csharp
public struct GenerateAggroOnGameplayEvent
{
	static GenerateAggroOnGameplayEvent()
	{
		Il2CppClassPointerStore<GenerateAggroOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "GenerateAggroOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GenerateAggroOnGameplayEvent>.NativeClassPtr);
		GenerateAggroOnGameplayEvent.NativeFieldInfoPtr_From = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenerateAggroOnGameplayEvent>.NativeClassPtr, "From");
		GenerateAggroOnGameplayEvent.NativeFieldInfoPtr_Towards = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenerateAggroOnGameplayEvent>.NativeClassPtr, "Towards");
		GenerateAggroOnGameplayEvent.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenerateAggroOnGameplayEvent>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GenerateAggroOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_From;
	private static readonly IntPtr NativeFieldInfoPtr_Towards;
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public AggroGameplayEventWho From;

	public AggroGameplayEventWho Towards;

	public float Value;
}
```
