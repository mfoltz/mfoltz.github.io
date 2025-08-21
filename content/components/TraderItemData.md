---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TraderItemData
{
	static TraderItemData()
	{
		Il2CppClassPointerStore<TraderItemData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TraderItemData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TraderItemData>.NativeClassPtr);
		TraderItemData.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderItemData>.NativeClassPtr, "Entity");
		TraderItemData.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderItemData>.NativeClassPtr, "Guid");
		TraderItemData.NativeFieldInfoPtr_ItemCostGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderItemData>.NativeClassPtr, "ItemCostGuid");
		TraderItemData.NativeFieldInfoPtr_ItemCostAmount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderItemData>.NativeClassPtr, "ItemCostAmount");
		TraderItemData.NativeFieldInfoPtr_OutItemGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderItemData>.NativeClassPtr, "OutItemGuid");
		TraderItemData.NativeFieldInfoPtr_OutItemAmount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderItemData>.NativeClassPtr, "OutItemAmount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TraderItemData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	private static readonly IntPtr NativeFieldInfoPtr_ItemCostGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ItemCostAmount;
	private static readonly IntPtr NativeFieldInfoPtr_OutItemGuid;
	private static readonly IntPtr NativeFieldInfoPtr_OutItemAmount;

	public Entity Entity;

	public PrefabGUID Guid;

	public PrefabGUID ItemCostGuid;

	public int ItemCostAmount;

	public PrefabGUID OutItemGuid;

	public int OutItemAmount;
}
```
