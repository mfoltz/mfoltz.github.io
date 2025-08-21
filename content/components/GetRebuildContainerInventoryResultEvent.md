---
nav_exclude: true
search_exclude: true
---

```csharp
public struct GetRebuildContainerInventoryResultEvent
{
	static GetRebuildContainerInventoryResultEvent()
	{
		Il2CppClassPointerStore<GetRebuildContainerInventoryResultEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "GetRebuildContainerInventoryResultEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GetRebuildContainerInventoryResultEvent>.NativeClassPtr);
		GetRebuildContainerInventoryResultEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetRebuildContainerInventoryResultEvent>.NativeClassPtr, "Target");
		GetRebuildContainerInventoryResultEvent.NativeFieldInfoPtr_InventoryResult = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetRebuildContainerInventoryResultEvent>.NativeClassPtr, "InventoryResult");
		GetRebuildContainerInventoryResultEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GetRebuildContainerInventoryResultEvent>.NativeClassPtr, 100684561);
		GetRebuildContainerInventoryResultEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GetRebuildContainerInventoryResultEvent>.NativeClassPtr, 100684562);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GetRebuildContainerInventoryResultEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GetRebuildContainerInventoryResultEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GetRebuildContainerInventoryResultEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_InventoryResult;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public NetworkId Target;

	public FixedList512Bytes<GetRebuildContainerInventoryResultEvent.InventorySlot> InventoryResult;

	public struct InventorySlot
	{
		static InventorySlot()
		{
			Il2CppClassPointerStore<GetRebuildContainerInventoryResultEvent.InventorySlot>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<GetRebuildContainerInventoryResultEvent>.NativeClassPtr, "InventorySlot");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GetRebuildContainerInventoryResultEvent.InventorySlot>.NativeClassPtr);
			GetRebuildContainerInventoryResultEvent.InventorySlot.NativeFieldInfoPtr_ItemType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetRebuildContainerInventoryResultEvent.InventorySlot>.NativeClassPtr, "ItemType");
			GetRebuildContainerInventoryResultEvent.InventorySlot.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetRebuildContainerInventoryResultEvent.InventorySlot>.NativeClassPtr, "Amount");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GetRebuildContainerInventoryResultEvent.InventorySlot>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_ItemType;
		private static readonly IntPtr NativeFieldInfoPtr_Amount;

		public PrefabGUID ItemType;

		public int Amount;
	}
}
```

## Client Systems

- [CastleRebuildContainerInventorySystem_Client]({{% relref "systems/client/CastleRebuildContainerInventorySystem_Client.md" %}})
