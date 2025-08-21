---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CreateLegendaryWeaponDebugEvent
{
	static CreateLegendaryWeaponDebugEvent()
	{
		Il2CppClassPointerStore<CreateLegendaryWeaponDebugEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CreateLegendaryWeaponDebugEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateLegendaryWeaponDebugEvent>.NativeClassPtr);
		CreateLegendaryWeaponDebugEvent.NativeFieldInfoPtr_WeaponPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateLegendaryWeaponDebugEvent>.NativeClassPtr, "WeaponPrefabGuid");
		CreateLegendaryWeaponDebugEvent.NativeFieldInfoPtr_Tier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateLegendaryWeaponDebugEvent>.NativeClassPtr, "Tier");
		CreateLegendaryWeaponDebugEvent.NativeFieldInfoPtr_InfuseSpellMod = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateLegendaryWeaponDebugEvent>.NativeClassPtr, "InfuseSpellMod");
		CreateLegendaryWeaponDebugEvent.NativeFieldInfoPtr_StatMod1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateLegendaryWeaponDebugEvent>.NativeClassPtr, "StatMod1");
		CreateLegendaryWeaponDebugEvent.NativeFieldInfoPtr_StatMod1Power = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateLegendaryWeaponDebugEvent>.NativeClassPtr, "StatMod1Power");
		CreateLegendaryWeaponDebugEvent.NativeFieldInfoPtr_StatMod2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateLegendaryWeaponDebugEvent>.NativeClassPtr, "StatMod2");
		CreateLegendaryWeaponDebugEvent.NativeFieldInfoPtr_StatMod2Power = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateLegendaryWeaponDebugEvent>.NativeClassPtr, "StatMod2Power");
		CreateLegendaryWeaponDebugEvent.NativeFieldInfoPtr_StatMod3 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateLegendaryWeaponDebugEvent>.NativeClassPtr, "StatMod3");
		CreateLegendaryWeaponDebugEvent.NativeFieldInfoPtr_StatMod3Power = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateLegendaryWeaponDebugEvent>.NativeClassPtr, "StatMod3Power");
		CreateLegendaryWeaponDebugEvent.NativeFieldInfoPtr_StatMod4 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateLegendaryWeaponDebugEvent>.NativeClassPtr, "StatMod4");
		CreateLegendaryWeaponDebugEvent.NativeFieldInfoPtr_StatMod4Power = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateLegendaryWeaponDebugEvent>.NativeClassPtr, "StatMod4Power");
		CreateLegendaryWeaponDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CreateLegendaryWeaponDebugEvent>.NativeClassPtr, 100684183);
		CreateLegendaryWeaponDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CreateLegendaryWeaponDebugEvent>.NativeClassPtr, 100684184);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CreateLegendaryWeaponDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CreateLegendaryWeaponDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateLegendaryWeaponDebugEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WeaponPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Tier;
	private static readonly IntPtr NativeFieldInfoPtr_InfuseSpellMod;
	private static readonly IntPtr NativeFieldInfoPtr_StatMod1;
	private static readonly IntPtr NativeFieldInfoPtr_StatMod1Power;
	private static readonly IntPtr NativeFieldInfoPtr_StatMod2;
	private static readonly IntPtr NativeFieldInfoPtr_StatMod2Power;
	private static readonly IntPtr NativeFieldInfoPtr_StatMod3;
	private static readonly IntPtr NativeFieldInfoPtr_StatMod3Power;
	private static readonly IntPtr NativeFieldInfoPtr_StatMod4;
	private static readonly IntPtr NativeFieldInfoPtr_StatMod4Power;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public PrefabGUID WeaponPrefabGuid;

	public int Tier;

	public PrefabGUID InfuseSpellMod;

	public PrefabGUID StatMod1;

	public float StatMod1Power;

	public PrefabGUID StatMod2;

	public float StatMod2Power;

	public PrefabGUID StatMod3;

	public float StatMod3Power;

	public PrefabGUID StatMod4;

	public float StatMod4Power;
}
```
