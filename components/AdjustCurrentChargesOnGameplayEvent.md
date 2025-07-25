---
nav_exclude: true
search_exclude: true
---

# AdjustCurrentChargesOnGameplayEvent

```csharp
public struct AdjustCurrentChargesOnGameplayEvent
{
	static AdjustCurrentChargesOnGameplayEvent()
	{
		Il2CppClassPointerStore<AdjustCurrentChargesOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AdjustCurrentChargesOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AdjustCurrentChargesOnGameplayEvent>.NativeClassPtr);
		AdjustCurrentChargesOnGameplayEvent.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdjustCurrentChargesOnGameplayEvent>.NativeClassPtr, "Type");
		AdjustCurrentChargesOnGameplayEvent.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdjustCurrentChargesOnGameplayEvent>.NativeClassPtr, "Count");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AdjustCurrentChargesOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_Count;

	public AdjustType Type;

	public int Count;
}
```
