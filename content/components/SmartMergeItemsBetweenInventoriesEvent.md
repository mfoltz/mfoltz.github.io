---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SmartMergeItemsBetweenInventoriesEvent
{
	static SmartMergeItemsBetweenInventoriesEvent()
	{
		Il2CppClassPointerStore<SmartMergeItemsBetweenInventoriesEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "SmartMergeItemsBetweenInventoriesEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SmartMergeItemsBetweenInventoriesEvent>.NativeClassPtr);
		SmartMergeItemsBetweenInventoriesEvent.NativeFieldInfoPtr_FromInventory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SmartMergeItemsBetweenInventoriesEvent>.NativeClassPtr, "FromInventory");
		SmartMergeItemsBetweenInventoriesEvent.NativeFieldInfoPtr_ToInventory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SmartMergeItemsBetweenInventoriesEvent>.NativeClassPtr, "ToInventory");
		SmartMergeItemsBetweenInventoriesEvent.NativeFieldInfoPtr_Options = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SmartMergeItemsBetweenInventoriesEvent>.NativeClassPtr, "Options");
		SmartMergeItemsBetweenInventoriesEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SmartMergeItemsBetweenInventoriesEvent>.NativeClassPtr, 100684305);
		SmartMergeItemsBetweenInventoriesEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SmartMergeItemsBetweenInventoriesEvent>.NativeClassPtr, 100684306);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SmartMergeItemsBetweenInventoriesEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SmartMergeItemsBetweenInventoriesEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SmartMergeItemsBetweenInventoriesEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FromInventory;
	private static readonly IntPtr NativeFieldInfoPtr_ToInventory;
	private static readonly IntPtr NativeFieldInfoPtr_Options;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public NetworkId FromInventory;

	public NetworkId ToInventory;

	public SmartMergeOptions Options;
}
```

## Server Systems

- [SmartMergeItemsBetweenInventoriesSystem]({{% relref "systems/server/SmartMergeItemsBetweenInventoriesSystem.md" %}})
