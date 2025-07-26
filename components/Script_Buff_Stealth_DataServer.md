# Script_Buff_Stealth_DataServer

```csharp
[StructLayout(2)]
public struct Script_Buff_Stealth_DataServer
{
	static Script_Buff_Stealth_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_Stealth_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_Stealth_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_Stealth_DataServer>.NativeClassPtr);
		Script_Buff_Stealth_DataServer.NativeFieldInfoPtr_StealthModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Stealth_DataServer>.NativeClassPtr, "StealthModificationId");
		Script_Buff_Stealth_DataServer.NativeFieldInfoPtr_InvisibleModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Stealth_DataServer>.NativeClassPtr, "InvisibleModificationId");
		Script_Buff_Stealth_DataServer.NativeFieldInfoPtr_AlwaysShowVFXModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Stealth_DataServer>.NativeClassPtr, "AlwaysShowVFXModificationId");
		Script_Buff_Stealth_DataServer.NativeFieldInfoPtr_ModelInvisible = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Stealth_DataServer>.NativeClassPtr, "ModelInvisible");
		Script_Buff_Stealth_DataServer.NativeFieldInfoPtr_AlwaysShowVFX = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Stealth_DataServer>.NativeClassPtr, "AlwaysShowVFX");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_Stealth_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StealthModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_InvisibleModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_AlwaysShowVFXModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_ModelInvisible;
	private static readonly IntPtr NativeFieldInfoPtr_AlwaysShowVFX;
	[FieldOffset(0)]
	public ModificationId StealthModificationId;
	[FieldOffset(4)]
	public ModificationId InvisibleModificationId;
	[FieldOffset(8)]
	public ModificationId AlwaysShowVFXModificationId;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool ModelInvisible;
	[FieldOffset(13)]
	[MarshalAs(4)]
	public bool AlwaysShowVFX;
}
