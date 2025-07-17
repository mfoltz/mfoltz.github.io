---
nav_exclude: true
search_exclude: true
---

# CastleRebuildUpdateUniqueDataEvent

```csharp
public struct CastleRebuildUpdateUniqueDataEvent
{
	static CastleRebuildUpdateUniqueDataEvent()
	{
		Il2CppClassPointerStore<CastleRebuildUpdateUniqueDataEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CastleRebuildUpdateUniqueDataEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildUpdateUniqueDataEvent>.NativeClassPtr);
		CastleRebuildUpdateUniqueDataEvent.NativeFieldInfoPtr_RebuildTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildUpdateUniqueDataEvent>.NativeClassPtr, "RebuildTerritory");
		CastleRebuildUpdateUniqueDataEvent.NativeFieldInfoPtr_Items = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildUpdateUniqueDataEvent>.NativeClassPtr, "Items");
		CastleRebuildUpdateUniqueDataEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildUpdateUniqueDataEvent>.NativeClassPtr, 100684707);
		CastleRebuildUpdateUniqueDataEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildUpdateUniqueDataEvent>.NativeClassPtr, 100684708);
		CastleRebuildUpdateUniqueDataEvent.NativeMethodInfoPtr_GetRebuildTerritory_Public_Virtual_Final_New_MapZoneId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildUpdateUniqueDataEvent>.NativeClassPtr, 100684709);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUpdateUniqueDataEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUpdateUniqueDataEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe MapZoneId GetRebuildTerritory()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUpdateUniqueDataEvent.NativeMethodInfoPtr_GetRebuildTerritory_Public_Virtual_Final_New_MapZoneId_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildUpdateUniqueDataEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RebuildTerritory;
	private static readonly IntPtr NativeFieldInfoPtr_Items;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRebuildTerritory_Public_Virtual_Final_New_MapZoneId_0;

	public MapZoneId RebuildTerritory;

	public FixedList512Bytes<CastleRebuildUpdateUniqueDataEvent.Data> Items;

	public struct Data
	{
		static Data()
		{
			Il2CppClassPointerStore<CastleRebuildUpdateUniqueDataEvent.Data>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<CastleRebuildUpdateUniqueDataEvent>.NativeClassPtr, "Data");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildUpdateUniqueDataEvent.Data>.NativeClassPtr);
			CastleRebuildUpdateUniqueDataEvent.Data.NativeFieldInfoPtr_Key = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildUpdateUniqueDataEvent.Data>.NativeClassPtr, "Key");
			CastleRebuildUpdateUniqueDataEvent.Data.NativeFieldInfoPtr_Item = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildUpdateUniqueDataEvent.Data>.NativeClassPtr, "Item");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildUpdateUniqueDataEvent.Data>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_Key;
		private static readonly IntPtr NativeFieldInfoPtr_Item;

		public CastleRebuildUniqueKey Key;

		public CastleRebuildUniqueItem Item;
	}
}
```
