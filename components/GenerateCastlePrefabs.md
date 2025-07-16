# GenerateCastlePrefabs

```csharp
[StructLayout(2)]
public struct GenerateCastlePrefabs
{
	static GenerateCastlePrefabs()
	{
		Il2CppClassPointerStore<GenerateCastlePrefabs>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "GenerateCastlePrefabs");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GenerateCastlePrefabs>.NativeClassPtr);
		GenerateCastlePrefabs.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenerateCastlePrefabs>.NativeClassPtr, "Blob");
		GenerateCastlePrefabs.NativeMethodInfoPtr_ConvertOnDemand_Public_Void_PrefabCollectionSystem_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GenerateCastlePrefabs>.NativeClassPtr, 100681844);
	}
	[CallerCount(6)]
	[CachedScanResults(RefRangeStart = 40, RefRangeEnd = 46, XrefRangeStart = 40, XrefRangeEnd = 46, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ConvertOnDemand(PrefabCollectionSystem prefabCollectionSystem)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(prefabCollectionSystem);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GenerateCastlePrefabs.NativeMethodInfoPtr_ConvertOnDemand_Public_Void_PrefabCollectionSystem_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GenerateCastlePrefabs>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Blob;
	private static readonly IntPtr NativeMethodInfoPtr_ConvertOnDemand_Public_Void_PrefabCollectionSystem_0;
	[FieldOffset(0)]
	public BlobAssetReference<GenerateCastleBlob> Blob;
}
