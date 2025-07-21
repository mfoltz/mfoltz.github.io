---
nav_exclude: true
search_exclude: false
---

# StartTrackVBloodUnitEventV2

```csharp
public struct StartTrackVBloodUnitEventV2
{
	static StartTrackVBloodUnitEventV2()
	{
		Il2CppClassPointerStore<StartTrackVBloodUnitEventV2>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "StartTrackVBloodUnitEventV2");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StartTrackVBloodUnitEventV2>.NativeClassPtr);
		StartTrackVBloodUnitEventV2.NativeFieldInfoPtr_HuntTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StartTrackVBloodUnitEventV2>.NativeClassPtr, "HuntTarget");
		StartTrackVBloodUnitEventV2.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StartTrackVBloodUnitEventV2>.NativeClassPtr, 100684345);
		StartTrackVBloodUnitEventV2.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StartTrackVBloodUnitEventV2>.NativeClassPtr, 100684346);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StartTrackVBloodUnitEventV2.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StartTrackVBloodUnitEventV2.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StartTrackVBloodUnitEventV2>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HuntTarget;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public PrefabGUID HuntTarget;
}
```

## Server Systems

- [BloodAltarSystem_StartTrackVBloodUnit_System_V2](/systems/server/BloodAltarSystem_StartTrackVBloodUnit_System_V2)
