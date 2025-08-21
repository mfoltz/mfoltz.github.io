---
nav_exclude: true
search_exclude: true
---

```csharp
public struct AiDamageTakenEvent
{
	static AiDamageTakenEvent()
	{
		Il2CppClassPointerStore<AiDamageTakenEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AiDamageTakenEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AiDamageTakenEvent>.NativeClassPtr);
		AiDamageTakenEvent.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiDamageTakenEvent>.NativeClassPtr, "Amount");
		AiDamageTakenEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiDamageTakenEvent>.NativeClassPtr, "Target");
		AiDamageTakenEvent.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiDamageTakenEvent>.NativeClassPtr, "Source");
		AiDamageTakenEvent.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiDamageTakenEvent>.NativeClassPtr, "Time");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AiDamageTakenEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_Time;

	public float Amount;

	public Entity Target;

	public Entity Source;

	public double Time;
}
```
