---
nav_exclude: true
search_exclude: true
---

# Script_Wounded_DataShared

```csharp
[StructLayout(2)]
public struct Script_Wounded_DataShared
{
	static Script_Wounded_DataShared()
	{
		Il2CppClassPointerStore<Script_Wounded_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Wounded_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Wounded_DataShared>.NativeClassPtr);
		Script_Wounded_DataShared.NativeFieldInfoPtr_OnDamageTakenListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Wounded_DataShared>.NativeClassPtr, "OnDamageTakenListener");
		Script_Wounded_DataShared.NativeFieldInfoPtr_WoundedSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Wounded_DataShared>.NativeClassPtr, "WoundedSequenceState");
		Script_Wounded_DataShared.NativeFieldInfoPtr_KnockbackModification = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Wounded_DataShared>.NativeClassPtr, "KnockbackModification");
		Script_Wounded_DataShared.NativeFieldInfoPtr_IsWounded = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Wounded_DataShared>.NativeClassPtr, "IsWounded");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Wounded_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageTakenListener;
	private static readonly IntPtr NativeFieldInfoPtr_WoundedSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_KnockbackModification;
	private static readonly IntPtr NativeFieldInfoPtr_IsWounded;
	[FieldOffset(0)]
	public ListenerId OnDamageTakenListener;
	[FieldOffset(8)]
	public SequenceState WoundedSequenceState;
	[FieldOffset(16)]
	public ModificationId KnockbackModification;
	[FieldOffset(20)]
	[MarshalAs(4)]
	public bool IsWounded;
}
