# Script_CurseAreaDebuff_DataShared

```csharp
[StructLayout(2)]
public struct Script_CurseAreaDebuff_DataShared
{
	static Script_CurseAreaDebuff_DataShared()
	{
		Il2CppClassPointerStore<Script_CurseAreaDebuff_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Gameplay.Scripting", "Script_CurseAreaDebuff_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_CurseAreaDebuff_DataShared>.NativeClassPtr);
		Script_CurseAreaDebuff_DataShared.NativeFieldInfoPtr_IsInArea = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CurseAreaDebuff_DataShared>.NativeClassPtr, "IsInArea");
		Script_CurseAreaDebuff_DataShared.NativeFieldInfoPtr_StackSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CurseAreaDebuff_DataShared>.NativeClassPtr, "StackSize");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_CurseAreaDebuff_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IsInArea;
	private static readonly IntPtr NativeFieldInfoPtr_StackSize;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool IsInArea;
	[FieldOffset(1)]
	public byte StackSize;
}
