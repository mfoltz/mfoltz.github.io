---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ChangedTeamEvent
{
	static ChangedTeamEvent()
	{
		Il2CppClassPointerStore<ChangedTeamEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ChangedTeamEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChangedTeamEvent>.NativeClassPtr);
		ChangedTeamEvent.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangedTeamEvent>.NativeClassPtr, "Entity");
		ChangedTeamEvent.NativeMethodInfoPtr_CreateEvent_Public_Static_Void_EntityManager_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChangedTeamEvent>.NativeClassPtr, 100664958);
		ChangedTeamEvent.NativeMethodInfoPtr_CreateEvent_Public_Static_Void_EntityCommandBuffer_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChangedTeamEvent>.NativeClassPtr, 100664959);
	}

	public unsafe static void CreateEvent(EntityManager entityManager, Entity userEntity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref userEntity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChangedTeamEvent.NativeMethodInfoPtr_CreateEvent_Public_Static_Void_EntityManager_Entity_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe static void CreateEvent(EntityCommandBuffer commandBuffer, Entity userEntity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref commandBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref userEntity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChangedTeamEvent.NativeMethodInfoPtr_CreateEvent_Public_Static_Void_EntityCommandBuffer_Entity_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChangedTeamEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeMethodInfoPtr_CreateEvent_Public_Static_Void_EntityManager_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateEvent_Public_Static_Void_EntityCommandBuffer_Entity_0;

	public Entity Entity;
}
```

## Server Systems

- [SendAlliedUserInfoOnChangedTeamEventSystem]({{% relref "systems/server/SendAlliedUserInfoOnChangedTeamEventSystem.md" %}})
