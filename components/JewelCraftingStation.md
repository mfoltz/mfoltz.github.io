---
nav_exclude: true
search_exclude: false
---

# JewelCraftingStation

```csharp
public struct JewelCraftingStation
{
	static JewelCraftingStation()
	{
		Il2CppClassPointerStore<JewelCraftingStation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "JewelCraftingStation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<JewelCraftingStation>.NativeClassPtr);
		JewelCraftingStation.NativeFieldInfoPtr_ActiveRecipeGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelCraftingStation>.NativeClassPtr, "ActiveRecipeGuid");
		JewelCraftingStation.NativeFieldInfoPtr_CraftProgress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelCraftingStation>.NativeClassPtr, "CraftProgress");
		JewelCraftingStation.NativeFieldInfoPtr_Status = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelCraftingStation>.NativeClassPtr, "Status");
		JewelCraftingStation.NativeFieldInfoPtr_CraftedItem = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelCraftingStation>.NativeClassPtr, "CraftedItem");
		JewelCraftingStation.NativeFieldInfoPtr_CraftedItemTypeGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelCraftingStation>.NativeClassPtr, "CraftedItemTypeGuid");
		JewelCraftingStation.NativeFieldInfoPtr_ActiveSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelCraftingStation>.NativeClassPtr, "ActiveSequenceGuid");
		JewelCraftingStation.NativeFieldInfoPtr_ActiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelCraftingStation>.NativeClassPtr, "ActiveSequenceState");
		JewelCraftingStation.NativeFieldInfoPtr_InactiveSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelCraftingStation>.NativeClassPtr, "InactiveSequenceGuid");
		JewelCraftingStation.NativeFieldInfoPtr_InactiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelCraftingStation>.NativeClassPtr, "InactiveSequenceState");
		JewelCraftingStation.NativeMethodInfoPtr_get_IsCrafting_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<JewelCraftingStation>.NativeClassPtr, 100672516);
		JewelCraftingStation.NativeMethodInfoPtr_get_HasItemWaiting_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<JewelCraftingStation>.NativeClassPtr, 100672517);
	}
	public unsafe bool IsCrafting
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(JewelCraftingStation.NativeMethodInfoPtr_get_IsCrafting_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool HasItemWaiting
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(JewelCraftingStation.NativeMethodInfoPtr_get_HasItemWaiting_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<JewelCraftingStation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ActiveRecipeGuid;
	private static readonly IntPtr NativeFieldInfoPtr_CraftProgress;
	private static readonly IntPtr NativeFieldInfoPtr_Status;
	private static readonly IntPtr NativeFieldInfoPtr_CraftedItem;
	private static readonly IntPtr NativeFieldInfoPtr_CraftedItemTypeGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_InactiveSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_InactiveSequenceState;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsCrafting_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_HasItemWaiting_Public_get_Boolean_0;

	public PrefabGUID ActiveRecipeGuid;

	public float CraftProgress;

	public CraftingStatus Status;

	public NetworkedEntity CraftedItem;

	public PrefabGUID CraftedItemTypeGuid;

	public SequenceGUID ActiveSequenceGuid;

	public SequenceState ActiveSequenceState;

	public SequenceGUID InactiveSequenceGuid;

	public SequenceState InactiveSequenceState;
}
```

## Server Systems

- [JewelCraftingUpdateSystem](/systems/server/JewelCraftingUpdateSystem)

## Client Systems

- [ActiveJewelCraftingStationSequenceSystem](/systems/client/ActiveJewelCraftingStationSequenceSystem)
