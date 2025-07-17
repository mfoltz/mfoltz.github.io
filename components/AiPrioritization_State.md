---
nav_exclude: true
search_exclude: true
---

# AiPrioritization_State

```csharp
public struct AiPrioritization_State
{
	static AiPrioritization_State()
	{
		Il2CppClassPointerStore<AiPrioritization_State>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AiPrioritization_State");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AiPrioritization_State>.NativeClassPtr);
		AiPrioritization_State.NativeFieldInfoPtr_AccumulatedDeltaTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiPrioritization_State>.NativeClassPtr, "AccumulatedDeltaTime");
		AiPrioritization_State.NativeFieldInfoPtr_AccumulatedPriority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiPrioritization_State>.NativeClassPtr, "AccumulatedPriority");
		AiPrioritization_State.NativeFieldInfoPtr_Updated = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiPrioritization_State>.NativeClassPtr, "Updated");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AiPrioritization_State>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AccumulatedDeltaTime;
	private static readonly IntPtr NativeFieldInfoPtr_AccumulatedPriority;
	private static readonly IntPtr NativeFieldInfoPtr_Updated;

	public float AccumulatedDeltaTime;

	public int AccumulatedPriority;

	public bool Updated;
}
```
