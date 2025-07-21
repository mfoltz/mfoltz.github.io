---
nav_exclude: true
search_exclude: false
---

# RefreshTeamEvent

```csharp
public struct RefreshTeamEvent
{
	static RefreshTeamEvent()
	{
		Il2CppClassPointerStore<RefreshTeamEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RefreshTeamEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RefreshTeamEvent>.NativeClassPtr);
		RefreshTeamEvent.NativeFieldInfoPtr_TeamEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RefreshTeamEvent>.NativeClassPtr, "TeamEntity");
		RefreshTeamEvent.NativeMethodInfoPtr_CreateEvent_Public_Static_Void_EntityManager_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RefreshTeamEvent>.NativeClassPtr, 100664960);
	}

	public unsafe static void CreateEvent(EntityManager entityManager, Entity teamEntity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref teamEntity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RefreshTeamEvent.NativeMethodInfoPtr_CreateEvent_Public_Static_Void_EntityManager_Entity_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RefreshTeamEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TeamEntity;
	private static readonly IntPtr NativeMethodInfoPtr_CreateEvent_Public_Static_Void_EntityManager_Entity_0;

	public Entity TeamEntity;
}
```
