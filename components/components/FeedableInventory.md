---
nav_exclude: true
search_exclude: true
---

# FeedableInventory

```csharp
[StructLayout(2)]
public struct FeedableInventory
{
	static FeedableInventory()
	{
		Il2CppClassPointerStore<FeedableInventory>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "FeedableInventory");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FeedableInventory>.NativeClassPtr);
		FeedableInventory.NativeFieldInfoPtr_FeedableInventoryEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedableInventory>.NativeClassPtr, "FeedableInventoryEntity");
		FeedableInventory.NativeFieldInfoPtr_InventoryPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedableInventory>.NativeClassPtr, "InventoryPrefabGuid");
		FeedableInventory.NativeFieldInfoPtr_RequiredItemType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedableInventory>.NativeClassPtr, "RequiredItemType");
		FeedableInventory.NativeFieldInfoPtr_RequiredItemCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedableInventory>.NativeClassPtr, "RequiredItemCount");
		FeedableInventory.NativeFieldInfoPtr_FeedTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedableInventory>.NativeClassPtr, "FeedTime");
		FeedableInventory.NativeFieldInfoPtr_FeedProgressTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedableInventory>.NativeClassPtr, "FeedProgressTime");
		FeedableInventory.NativeFieldInfoPtr_DamageTickDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedableInventory>.NativeClassPtr, "DamageTickDuration");
		FeedableInventory.NativeFieldInfoPtr_DamageTickTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedableInventory>.NativeClassPtr, "DamageTickTime");
		FeedableInventory.NativeFieldInfoPtr_DamageTickPercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedableInventory>.NativeClassPtr, "DamageTickPercentage");
		FeedableInventory.NativeFieldInfoPtr_HealthRegenModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedableInventory>.NativeClassPtr, "HealthRegenModifier");
		FeedableInventory.NativeFieldInfoPtr_IsActive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedableInventory>.NativeClassPtr, "IsActive");
		FeedableInventory.NativeFieldInfoPtr_IsFed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedableInventory>.NativeClassPtr, "IsFed");
		FeedableInventory.NativeFieldInfoPtr_AllowTakingItemsFromInventory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FeedableInventory>.NativeClassPtr, "AllowTakingItemsFromInventory");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FeedableInventory>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FeedableInventoryEntity;
	private static readonly IntPtr NativeFieldInfoPtr_InventoryPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredItemType;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredItemCount;
	private static readonly IntPtr NativeFieldInfoPtr_FeedTime;
	private static readonly IntPtr NativeFieldInfoPtr_FeedProgressTime;
	private static readonly IntPtr NativeFieldInfoPtr_DamageTickDuration;
	private static readonly IntPtr NativeFieldInfoPtr_DamageTickTime;
	private static readonly IntPtr NativeFieldInfoPtr_DamageTickPercentage;
	private static readonly IntPtr NativeFieldInfoPtr_HealthRegenModifier;
	private static readonly IntPtr NativeFieldInfoPtr_IsActive;
	private static readonly IntPtr NativeFieldInfoPtr_IsFed;
	private static readonly IntPtr NativeFieldInfoPtr_AllowTakingItemsFromInventory;
	[FieldOffset(0)]
	public NetworkedEntity FeedableInventoryEntity;
	[FieldOffset(12)]
	public PrefabGUID InventoryPrefabGuid;
	[FieldOffset(16)]
	public PrefabGUID RequiredItemType;
	[FieldOffset(20)]
	public int RequiredItemCount;
	[FieldOffset(24)]
	public float FeedTime;
	[FieldOffset(28)]
	public float FeedProgressTime;
	[FieldOffset(32)]
	public float DamageTickDuration;
	[FieldOffset(36)]
	public float DamageTickTime;
	[FieldOffset(40)]
	public float DamageTickPercentage;
	[FieldOffset(44)]
	public ModificationId HealthRegenModifier;
	[FieldOffset(48)]
	[MarshalAs(4)]
	public bool IsActive;
	[FieldOffset(49)]
	[MarshalAs(4)]
	public bool IsFed;
	[FieldOffset(50)]
	[MarshalAs(4)]
	public bool AllowTakingItemsFromInventory;
}
