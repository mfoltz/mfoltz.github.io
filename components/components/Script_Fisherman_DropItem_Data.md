---
nav_exclude: true
search_exclude: true
---

# Script_Fisherman_DropItem_Data

```csharp
[StructLayout(2)]
public struct Script_Fisherman_DropItem_Data
{
	static Script_Fisherman_DropItem_Data()
	{
		Il2CppClassPointerStore<Script_Fisherman_DropItem_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Fisherman_DropItem_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Fisherman_DropItem_Data>.NativeClassPtr);
		Script_Fisherman_DropItem_Data.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Fisherman_DropItem_Data>.NativeClassPtr, "Amount");
		Script_Fisherman_DropItem_Data.NativeFieldInfoPtr_DropItem = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Fisherman_DropItem_Data>.NativeClassPtr, "DropItem");
		Script_Fisherman_DropItem_Data.NativeFieldInfoPtr_MinRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Fisherman_DropItem_Data>.NativeClassPtr, "MinRange");
		Script_Fisherman_DropItem_Data.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Fisherman_DropItem_Data>.NativeClassPtr, "MaxRange");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Fisherman_DropItem_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeFieldInfoPtr_DropItem;
	private static readonly IntPtr NativeFieldInfoPtr_MinRange;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;
	[FieldOffset(0)]
	public int Amount;
	[FieldOffset(4)]
	public PrefabGUID DropItem;
	[FieldOffset(8)]
	public float MinRange;
	[FieldOffset(12)]
	public float MaxRange;
}
