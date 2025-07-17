---
nav_exclude: true
search_exclude: true
---

# EquipItemFromInventoryEvent

```csharp
public struct EquipItemFromInventoryEvent
{
	static EquipItemFromInventoryEvent()
	{
		Il2CppClassPointerStore<EquipItemFromInventoryEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "EquipItemFromInventoryEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EquipItemFromInventoryEvent>.NativeClassPtr);
		EquipItemFromInventoryEvent.NativeFieldInfoPtr_FromInventory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipItemFromInventoryEvent>.NativeClassPtr, "FromInventory");
		EquipItemFromInventoryEvent.NativeFieldInfoPtr_SlotIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipItemFromInventoryEvent>.NativeClassPtr, "SlotIndex");
		EquipItemFromInventoryEvent.NativeFieldInfoPtr_IsCosmetic = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipItemFromInventoryEvent>.NativeClassPtr, "IsCosmetic");
		EquipItemFromInventoryEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EquipItemFromInventoryEvent>.NativeClassPtr, 100684277);
		EquipItemFromInventoryEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EquipItemFromInventoryEvent>.NativeClassPtr, 100684278);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EquipItemFromInventoryEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EquipItemFromInventoryEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EquipItemFromInventoryEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FromInventory;
	private static readonly IntPtr NativeFieldInfoPtr_SlotIndex;
	private static readonly IntPtr NativeFieldInfoPtr_IsCosmetic;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public NetworkId FromInventory;

	public int SlotIndex;

	public bool IsCosmetic;
}
```
