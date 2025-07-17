---
nav_exclude: true
search_exclude: true
---

# InventoryInstanceElement

```csharp
[StructLayout(2)]
public struct InventoryInstanceElement
{
	static InventoryInstanceElement()
	{
		Il2CppClassPointerStore<InventoryInstanceElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "InventoryInstanceElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InventoryInstanceElement>.NativeClassPtr);
		InventoryInstanceElement.NativeFieldInfoPtr_Category = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryInstanceElement>.NativeClassPtr, "Category");
		InventoryInstanceElement.NativeFieldInfoPtr_Slots = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryInstanceElement>.NativeClassPtr, "Slots");
		InventoryInstanceElement.NativeFieldInfoPtr_MaxSlots = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryInstanceElement>.NativeClassPtr, "MaxSlots");
		InventoryInstanceElement.NativeFieldInfoPtr_ExternalInventoryEntityPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryInstanceElement>.NativeClassPtr, "ExternalInventoryEntityPrefabGuid");
		InventoryInstanceElement.NativeFieldInfoPtr_ExternalInventoryEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryInstanceElement>.NativeClassPtr, "ExternalInventoryEntity");
		InventoryInstanceElement.NativeFieldInfoPtr_RestrictedType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryInstanceElement>.NativeClassPtr, "RestrictedType");
		InventoryInstanceElement.NativeFieldInfoPtr_RestrictedCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryInstanceElement>.NativeClassPtr, "RestrictedCategory");
		InventoryInstanceElement.NativeFieldInfoPtr_StartItems = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryInstanceElement>.NativeClassPtr, "StartItems");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InventoryInstanceElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Category;
	private static readonly IntPtr NativeFieldInfoPtr_Slots;
	private static readonly IntPtr NativeFieldInfoPtr_MaxSlots;
	private static readonly IntPtr NativeFieldInfoPtr_ExternalInventoryEntityPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ExternalInventoryEntity;
	private static readonly IntPtr NativeFieldInfoPtr_RestrictedType;
	private static readonly IntPtr NativeFieldInfoPtr_RestrictedCategory;
	private static readonly IntPtr NativeFieldInfoPtr_StartItems;
	[FieldOffset(0)]
	public InventoryInstanceElement.InstanceCategory Category;
	[FieldOffset(4)]
	public int Slots;
	[FieldOffset(8)]
	public int MaxSlots;
	[FieldOffset(12)]
	public PrefabGUID ExternalInventoryEntityPrefabGuid;
	[FieldOffset(16)]
	public NetworkedEntity ExternalInventoryEntity;
	[FieldOffset(28)]
	public PrefabGUID RestrictedType;
	[FieldOffset(32)]
	public long RestrictedCategory;
	[FieldOffset(40)]
	public BlobAssetReference<ExternalInventoryStartItems> StartItems;
	public enum InstanceCategory
	{
		Main,
		Bag
	}
}
