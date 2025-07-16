# GameDatas

```csharp
[StructLayout(2)]
public struct GameDatas
{
	static GameDatas()
	{
		Il2CppClassPointerStore<GameDatas>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "GameDatas");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GameDatas>.NativeClassPtr);
		GameDatas.NativeFieldInfoPtr_ItemHashLookupMap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameDatas>.NativeClassPtr, "ItemHashLookupMap");
		GameDatas.NativeFieldInfoPtr_ItemGroupHashLookupMap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameDatas>.NativeClassPtr, "ItemGroupHashLookupMap");
		GameDatas.NativeFieldInfoPtr_DropTableDataHashLookupMap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameDatas>.NativeClassPtr, "DropTableDataHashLookupMap");
		GameDatas.NativeFieldInfoPtr_BlueprintHashLookupMap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameDatas>.NativeClassPtr, "BlueprintHashLookupMap");
		GameDatas.NativeFieldInfoPtr_RecipeHashLookupMap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameDatas>.NativeClassPtr, "RecipeHashLookupMap");
		GameDatas.NativeFieldInfoPtr_StationBonusLookupMap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameDatas>.NativeClassPtr, "StationBonusLookupMap");
		GameDatas.NativeFieldInfoPtr_RoofCategoryLookupMap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameDatas>.NativeClassPtr, "RoofCategoryLookupMap");
		GameDatas.NativeFieldInfoPtr_RandomLocalizationKeys = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameDatas>.NativeClassPtr, "RandomLocalizationKeys");
		GameDatas.NativeMethodInfoPtr__ctor_Public_Void_Int32_RandomLocalizationKeysUnmanaged_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GameDatas>.NativeClassPtr, 100667047);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1091837, RefRangeEnd = 1091838, XrefRangeStart = 1091811, XrefRangeEnd = 1091837, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe GameDatas(int maxPrefabs, RandomLocalizationKeysUnmanaged randomLocalizationKeys)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref maxPrefabs;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref randomLocalizationKeys;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GameDatas.NativeMethodInfoPtr__ctor_Public_Void_Int32_RandomLocalizationKeysUnmanaged_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GameDatas>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ItemHashLookupMap;
	private static readonly IntPtr NativeFieldInfoPtr_ItemGroupHashLookupMap;
	private static readonly IntPtr NativeFieldInfoPtr_DropTableDataHashLookupMap;
	private static readonly IntPtr NativeFieldInfoPtr_BlueprintHashLookupMap;
	private static readonly IntPtr NativeFieldInfoPtr_RecipeHashLookupMap;
	private static readonly IntPtr NativeFieldInfoPtr_StationBonusLookupMap;
	private static readonly IntPtr NativeFieldInfoPtr_RoofCategoryLookupMap;
	private static readonly IntPtr NativeFieldInfoPtr_RandomLocalizationKeys;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Int32_RandomLocalizationKeysUnmanaged_0;
	[FieldOffset(0)]
	public readonly NativeParallelHashMap<PrefabGUID, ItemData> ItemHashLookupMap;
	[FieldOffset(16)]
	public readonly NativeParallelHashMap<PrefabGUID, ItemDataDropGroup> ItemGroupHashLookupMap;
	[FieldOffset(32)]
	public readonly NativeParallelHashMap<PrefabGUID, DropTableData> DropTableDataHashLookupMap;
	[FieldOffset(48)]
	public readonly NativeParallelHashMap<PrefabGUID, BlueprintData> BlueprintHashLookupMap;
	[FieldOffset(64)]
	public readonly NativeParallelHashMap<PrefabGUID, RecipeData> RecipeHashLookupMap;
	[FieldOffset(80)]
	public readonly NativeParallelHashMap<PrefabGUID, StationBonusData> StationBonusLookupMap;
	[FieldOffset(96)]
	public readonly NativeParallelHashMap<int, Entity> RoofCategoryLookupMap;
	[FieldOffset(112)]
	public readonly RandomLocalizationKeysUnmanaged RandomLocalizationKeys;
}
