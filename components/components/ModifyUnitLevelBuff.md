---
nav_exclude: true
search_exclude: true
---

# ModifyUnitLevelBuff

```csharp
[StructLayout(2)]
public struct ModifyUnitLevelBuff
{
	static ModifyUnitLevelBuff()
	{
		Il2CppClassPointerStore<ModifyUnitLevelBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ModifyUnitLevelBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyUnitLevelBuff>.NativeClassPtr);
		ModifyUnitLevelBuff.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitLevelBuff>.NativeClassPtr, "Priority");
		ModifyUnitLevelBuff.NativeFieldInfoPtr_UnitLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitLevelBuff>.NativeClassPtr, "UnitLevel");
		ModifyUnitLevelBuff.NativeFieldInfoPtr_Addition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitLevelBuff>.NativeClassPtr, "Addition");
		ModifyUnitLevelBuff.NativeFieldInfoPtr_UnitLevelModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitLevelBuff>.NativeClassPtr, "UnitLevelModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyUnitLevelBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Priority;
	private static readonly IntPtr NativeFieldInfoPtr_UnitLevel;
	private static readonly IntPtr NativeFieldInfoPtr_Addition;
	private static readonly IntPtr NativeFieldInfoPtr_UnitLevelModId;
	[FieldOffset(0)]
	public int Priority;
	[FieldOffset(4)]
	public int UnitLevel;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool Addition;
	[FieldOffset(12)]
	public ModificationId UnitLevelModId;
}
