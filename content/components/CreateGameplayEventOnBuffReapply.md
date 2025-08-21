---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CreateGameplayEventOnBuffReapply
{
	static CreateGameplayEventOnBuffReapply()
	{
		Il2CppClassPointerStore<CreateGameplayEventOnBuffReapply>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventOnBuffReapply");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventOnBuffReapply>.NativeClassPtr);
		CreateGameplayEventOnBuffReapply.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnBuffReapply>.NativeClassPtr, "EventId");
		CreateGameplayEventOnBuffReapply.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnBuffReapply>.NativeClassPtr, "Target");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventOnBuffReapply>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	private static readonly IntPtr NativeFieldInfoPtr_Target;

	public GameplayEventId EventId;

	public GameplayEventTarget Target;
}
```
