# WeakAssetReferenceLoadingData

```csharp
[StructLayout(2)]
public struct WeakAssetReferenceLoadingData
{
	static WeakAssetReferenceLoadingData()
	{
		Il2CppClassPointerStore<WeakAssetReferenceLoadingData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "WeakAssetReferenceLoadingData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WeakAssetReferenceLoadingData>.NativeClassPtr);
		WeakAssetReferenceLoadingData.NativeFieldInfoPtr_InProgressLoads = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WeakAssetReferenceLoadingData>.NativeClassPtr, "InProgressLoads");
		WeakAssetReferenceLoadingData.NativeFieldInfoPtr_LoadedPrefabs = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WeakAssetReferenceLoadingData>.NativeClassPtr, "LoadedPrefabs");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WeakAssetReferenceLoadingData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_InProgressLoads;
	private static readonly IntPtr NativeFieldInfoPtr_LoadedPrefabs;
	[FieldOffset(0)]
	public NativeParallelMultiHashMap<EntityPrefabReference, Entity> InProgressLoads;
	[FieldOffset(16)]
	public NativeParallelHashMap<EntityPrefabReference, WeakAssetReferenceLoadingData.LoadedPrefab> LoadedPrefabs;
	[StructLayout(2)]
	public struct LoadedPrefab
	{
		static LoadedPrefab()
		{
			Il2CppClassPointerStore<WeakAssetReferenceLoadingData.LoadedPrefab>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<WeakAssetReferenceLoadingData>.NativeClassPtr, "LoadedPrefab");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WeakAssetReferenceLoadingData.LoadedPrefab>.NativeClassPtr);
			WeakAssetReferenceLoadingData.LoadedPrefab.NativeFieldInfoPtr_RefCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WeakAssetReferenceLoadingData.LoadedPrefab>.NativeClassPtr, "RefCount");
			WeakAssetReferenceLoadingData.LoadedPrefab.NativeFieldInfoPtr_SceneEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WeakAssetReferenceLoadingData.LoadedPrefab>.NativeClassPtr, "SceneEntity");
			WeakAssetReferenceLoadingData.LoadedPrefab.NativeFieldInfoPtr_PrefabRoot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WeakAssetReferenceLoadingData.LoadedPrefab>.NativeClassPtr, "PrefabRoot");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WeakAssetReferenceLoadingData.LoadedPrefab>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_RefCount;
		private static readonly IntPtr NativeFieldInfoPtr_SceneEntity;
		private static readonly IntPtr NativeFieldInfoPtr_PrefabRoot;
		[FieldOffset(0)]
		public int RefCount;
		[FieldOffset(4)]
		public Entity SceneEntity;
		[FieldOffset(12)]
		public Entity PrefabRoot;
	}
}
