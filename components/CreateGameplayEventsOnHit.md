---
nav_exclude: true
search_exclude: false
---

# CreateGameplayEventsOnHit

```csharp
public struct CreateGameplayEventsOnHit
{
	static CreateGameplayEventsOnHit()
	{
		Il2CppClassPointerStore<CreateGameplayEventsOnHit>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventsOnHit");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventsOnHit>.NativeClassPtr);
		CreateGameplayEventsOnHit.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnHit>.NativeClassPtr, "EventId");
		CreateGameplayEventsOnHit.NativeFieldInfoPtr_HitGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnHit>.NativeClassPtr, "HitGroup");
		CreateGameplayEventsOnHit.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnHit>.NativeClassPtr, "Condition");
		CreateGameplayEventsOnHit.NativeFieldInfoPtr_ColliderCastIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnHit>.NativeClassPtr, "ColliderCastIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventsOnHit>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	private static readonly IntPtr NativeFieldInfoPtr_HitGroup;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_ColliderCastIndex;

	public GameplayEventId EventId;

	public HitGroup HitGroup;

	public BlobAssetReference<ConditionBlob> Condition;

	public int ColliderCastIndex;
}
```
