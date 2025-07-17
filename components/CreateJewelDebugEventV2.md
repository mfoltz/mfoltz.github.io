---
nav_exclude: true
search_exclude: true
---

# CreateJewelDebugEventV2

```csharp
public struct CreateJewelDebugEventV2
{
	static CreateJewelDebugEventV2()
	{
		Il2CppClassPointerStore<CreateJewelDebugEventV2>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CreateJewelDebugEventV2");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateJewelDebugEventV2>.NativeClassPtr);
		CreateJewelDebugEventV2.NativeFieldInfoPtr_AbilityPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateJewelDebugEventV2>.NativeClassPtr, "AbilityPrefabGuid");
		CreateJewelDebugEventV2.NativeFieldInfoPtr_Tier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateJewelDebugEventV2>.NativeClassPtr, "Tier");
		CreateJewelDebugEventV2.NativeFieldInfoPtr_SpellMod1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateJewelDebugEventV2>.NativeClassPtr, "SpellMod1");
		CreateJewelDebugEventV2.NativeFieldInfoPtr_SpellMod1Power = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateJewelDebugEventV2>.NativeClassPtr, "SpellMod1Power");
		CreateJewelDebugEventV2.NativeFieldInfoPtr_SpellMod2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateJewelDebugEventV2>.NativeClassPtr, "SpellMod2");
		CreateJewelDebugEventV2.NativeFieldInfoPtr_SpellMod2Power = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateJewelDebugEventV2>.NativeClassPtr, "SpellMod2Power");
		CreateJewelDebugEventV2.NativeFieldInfoPtr_SpellMod3 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateJewelDebugEventV2>.NativeClassPtr, "SpellMod3");
		CreateJewelDebugEventV2.NativeFieldInfoPtr_SpellMod3Power = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateJewelDebugEventV2>.NativeClassPtr, "SpellMod3Power");
		CreateJewelDebugEventV2.NativeFieldInfoPtr_SpellMod4 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateJewelDebugEventV2>.NativeClassPtr, "SpellMod4");
		CreateJewelDebugEventV2.NativeFieldInfoPtr_SpellMod4Power = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateJewelDebugEventV2>.NativeClassPtr, "SpellMod4Power");
		CreateJewelDebugEventV2.NativeFieldInfoPtr_Equip = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateJewelDebugEventV2>.NativeClassPtr, "Equip");
		CreateJewelDebugEventV2.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CreateJewelDebugEventV2>.NativeClassPtr, 100684177);
		CreateJewelDebugEventV2.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CreateJewelDebugEventV2>.NativeClassPtr, 100684178);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CreateJewelDebugEventV2.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CreateJewelDebugEventV2.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateJewelDebugEventV2>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Tier;
	private static readonly IntPtr NativeFieldInfoPtr_SpellMod1;
	private static readonly IntPtr NativeFieldInfoPtr_SpellMod1Power;
	private static readonly IntPtr NativeFieldInfoPtr_SpellMod2;
	private static readonly IntPtr NativeFieldInfoPtr_SpellMod2Power;
	private static readonly IntPtr NativeFieldInfoPtr_SpellMod3;
	private static readonly IntPtr NativeFieldInfoPtr_SpellMod3Power;
	private static readonly IntPtr NativeFieldInfoPtr_SpellMod4;
	private static readonly IntPtr NativeFieldInfoPtr_SpellMod4Power;
	private static readonly IntPtr NativeFieldInfoPtr_Equip;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public PrefabGUID AbilityPrefabGuid;

	public int Tier;

	public PrefabGUID SpellMod1;

	public float SpellMod1Power;

	public PrefabGUID SpellMod2;

	public float SpellMod2Power;

	public PrefabGUID SpellMod3;

	public float SpellMod3Power;

	public PrefabGUID SpellMod4;

	public float SpellMod4Power;

	public bool Equip;
}
```
