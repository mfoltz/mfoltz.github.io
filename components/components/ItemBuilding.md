---
nav_exclude: true
search_exclude: true
---

# ItemBuilding

```csharp
[StructLayout(2)]
public struct ItemBuilding
{
	static ItemBuilding()
	{
		Il2CppClassPointerStore<ItemBuilding>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding.Items", "ItemBuilding");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ItemBuilding>.NativeClassPtr);
		ItemBuilding.NativeFieldInfoPtr_BuildingGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemBuilding>.NativeClassPtr, "BuildingGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ItemBuilding>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuildingGuid;
	[FieldOffset(0)]
	public PrefabGUID BuildingGuid;
}
