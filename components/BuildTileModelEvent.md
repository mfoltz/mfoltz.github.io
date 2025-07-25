---
nav_exclude: true
search_exclude: true
---

# BuildTileModelEvent

```csharp
public struct BuildTileModelEvent
{
	static BuildTileModelEvent()
	{
		Il2CppClassPointerStore<BuildTileModelEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "BuildTileModelEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuildTileModelEvent>.NativeClassPtr);
		BuildTileModelEvent.NativeFieldInfoPtr_PrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildTileModelEvent>.NativeClassPtr, "PrefabGuid");
		BuildTileModelEvent.NativeFieldInfoPtr_SpawnTranslation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildTileModelEvent>.NativeClassPtr, "SpawnTranslation");
		BuildTileModelEvent.NativeFieldInfoPtr_SpawnTileRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildTileModelEvent>.NativeClassPtr, "SpawnTileRotation");
		BuildTileModelEvent.NativeFieldInfoPtr_VariationIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildTileModelEvent>.NativeClassPtr, "VariationIndex");
		BuildTileModelEvent.NativeFieldInfoPtr_ResourceConsumeType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildTileModelEvent>.NativeClassPtr, "ResourceConsumeType");
		BuildTileModelEvent.NativeFieldInfoPtr_RebuildUniqueKey = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildTileModelEvent>.NativeClassPtr, "RebuildUniqueKey");
		BuildTileModelEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildTileModelEvent>.NativeClassPtr, 100670559);
		BuildTileModelEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildTileModelEvent>.NativeClassPtr, 100670560);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildTileModelEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildTileModelEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuildTileModelEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnTranslation;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnTileRotation;
	private static readonly IntPtr NativeFieldInfoPtr_VariationIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ResourceConsumeType;
	private static readonly IntPtr NativeFieldInfoPtr_RebuildUniqueKey;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public PrefabGUID PrefabGuid;

	public Translation SpawnTranslation;

	public TileRotation SpawnTileRotation;

	public byte VariationIndex;

	public BuildResourceConsumeType ResourceConsumeType;

	public CastleRebuildUniqueKey RebuildUniqueKey;
}
```

## Server Systems

- [PlaceTileModelSystem](/systems/server/PlaceTileModelSystem)
