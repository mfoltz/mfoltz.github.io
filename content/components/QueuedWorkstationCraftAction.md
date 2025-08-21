---
nav_exclude: true
search_exclude: true
---

```csharp
public struct QueuedWorkstationCraftAction
{
	static QueuedWorkstationCraftAction()
	{
		Il2CppClassPointerStore<QueuedWorkstationCraftAction>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "QueuedWorkstationCraftAction");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<QueuedWorkstationCraftAction>.NativeClassPtr);
		QueuedWorkstationCraftAction.NativeFieldInfoPtr_InitiateUser = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<QueuedWorkstationCraftAction>.NativeClassPtr, "InitiateUser");
		QueuedWorkstationCraftAction.NativeFieldInfoPtr_RecipeGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<QueuedWorkstationCraftAction>.NativeClassPtr, "RecipeGuid");
		QueuedWorkstationCraftAction.NativeFieldInfoPtr_ProgressTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<QueuedWorkstationCraftAction>.NativeClassPtr, "ProgressTime");
		QueuedWorkstationCraftAction.NativeFieldInfoPtr_Status = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<QueuedWorkstationCraftAction>.NativeClassPtr, "Status");
		QueuedWorkstationCraftAction.NativeFieldInfoPtr_ItemsStartIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<QueuedWorkstationCraftAction>.NativeClassPtr, "ItemsStartIndex");
		QueuedWorkstationCraftAction.NativeFieldInfoPtr_ItemRequirementsCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<QueuedWorkstationCraftAction>.NativeClassPtr, "ItemRequirementsCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<QueuedWorkstationCraftAction>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_InitiateUser;
	private static readonly IntPtr NativeFieldInfoPtr_RecipeGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ProgressTime;
	private static readonly IntPtr NativeFieldInfoPtr_Status;
	private static readonly IntPtr NativeFieldInfoPtr_ItemsStartIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ItemRequirementsCount;

	public Entity InitiateUser;

	public PrefabGUID RecipeGuid;

	public float ProgressTime;

	public CraftingStatus Status;

	public int ItemsStartIndex;

	public int ItemRequirementsCount;
}
```

## Server Systems

- [UpdateCharacterCraftingSystem]({{% relref "systems/server/UpdateCharacterCraftingSystem.md" %}})
- [UpdateCraftingSystem]({{% relref "systems/server/UpdateCraftingSystem.md" %}})
- [UpdatePrisonSystem]({{% relref "systems/server/UpdatePrisonSystem.md" %}})
