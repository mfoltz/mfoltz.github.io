# CreateTileModelSelection

```csharp
[StructLayout(2)]
public struct CreateTileModelSelection
{
	static CreateTileModelSelection()
	{
		Il2CppClassPointerStore<CreateTileModelSelection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CreateTileModelSelection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateTileModelSelection>.NativeClassPtr);
		CreateTileModelSelection.NativeFieldInfoPtr_Prefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateTileModelSelection>.NativeClassPtr, "Prefab");
		CreateTileModelSelection.NativeFieldInfoPtr_UniqueKey = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateTileModelSelection>.NativeClassPtr, "UniqueKey");
		CreateTileModelSelection.NativeFieldInfoPtr_VariationIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateTileModelSelection>.NativeClassPtr, "VariationIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateTileModelSelection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Prefab;
	private static readonly IntPtr NativeFieldInfoPtr_UniqueKey;
	private static readonly IntPtr NativeFieldInfoPtr_VariationIndex;
	[FieldOffset(0)]
	public PrefabGUID Prefab;
	[FieldOffset(4)]
	public CastleRebuildUniqueKey UniqueKey;
	[FieldOffset(8)]
	public byte VariationIndex;
}
