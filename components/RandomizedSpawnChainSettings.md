---
nav_exclude: true
search_exclude: false
---

# RandomizedSpawnChainSettings

```csharp
public struct RandomizedSpawnChainSettings
{
	static RandomizedSpawnChainSettings()
	{
		Il2CppClassPointerStore<RandomizedSpawnChainSettings>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RandomizedSpawnChainSettings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RandomizedSpawnChainSettings>.NativeClassPtr);
		RandomizedSpawnChainSettings.NativeFieldInfoPtr_BlobAsset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RandomizedSpawnChainSettings>.NativeClassPtr, "BlobAsset");
		RandomizedSpawnChainSettings.NativeMethodInfoPtr_ConvertOnDemand_Public_Void_PrefabCollectionSystem_Entity_Boolean_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RandomizedSpawnChainSettings>.NativeClassPtr, 100664766);
	}

	public unsafe void ConvertOnDemand(PrefabCollectionSystem prefabCollectionSystem, Entity parentEntity, bool convertSynchronously, bool runConvert)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(prefabCollectionSystem);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref parentEntity;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref convertSynchronously;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref runConvert;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RandomizedSpawnChainSettings.NativeMethodInfoPtr_ConvertOnDemand_Public_Void_PrefabCollectionSystem_Entity_Boolean_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RandomizedSpawnChainSettings>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BlobAsset;
	private static readonly IntPtr NativeMethodInfoPtr_ConvertOnDemand_Public_Void_PrefabCollectionSystem_Entity_Boolean_Boolean_0;

	public BlobAssetReference<RandomizedSpawnChainSettingsBlobAsset> BlobAsset;
}
```
