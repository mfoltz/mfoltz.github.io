# Script_GarlicFeverDebuff_DataServer

```csharp
[StructLayout(2)]
public struct Script_GarlicFeverDebuff_DataServer
{
	static Script_GarlicFeverDebuff_DataServer()
	{
		Il2CppClassPointerStore<Script_GarlicFeverDebuff_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_GarlicFeverDebuff_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_GarlicFeverDebuff_DataServer>.NativeClassPtr);
		Script_GarlicFeverDebuff_DataServer.NativeFieldInfoPtr_WeaponLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicFeverDebuff_DataServer>.NativeClassPtr, "WeaponLevel");
		Script_GarlicFeverDebuff_DataServer.NativeFieldInfoPtr_WeaponModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicFeverDebuff_DataServer>.NativeClassPtr, "WeaponModificationId");
		Script_GarlicFeverDebuff_DataServer.NativeFieldInfoPtr_SpellLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicFeverDebuff_DataServer>.NativeClassPtr, "SpellLevel");
		Script_GarlicFeverDebuff_DataServer.NativeFieldInfoPtr_SpellModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicFeverDebuff_DataServer>.NativeClassPtr, "SpellModificationId");
		Script_GarlicFeverDebuff_DataServer.NativeFieldInfoPtr_ArmorLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicFeverDebuff_DataServer>.NativeClassPtr, "ArmorLevel");
		Script_GarlicFeverDebuff_DataServer.NativeFieldInfoPtr_ArmorModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicFeverDebuff_DataServer>.NativeClassPtr, "ArmorModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_GarlicFeverDebuff_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WeaponLevel;
	private static readonly IntPtr NativeFieldInfoPtr_WeaponModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_SpellLevel;
	private static readonly IntPtr NativeFieldInfoPtr_SpellModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_ArmorLevel;
	private static readonly IntPtr NativeFieldInfoPtr_ArmorModificationId;
	[FieldOffset(0)]
	public float WeaponLevel;
	[FieldOffset(4)]
	public ModificationId WeaponModificationId;
	[FieldOffset(8)]
	public float SpellLevel;
	[FieldOffset(12)]
	public ModificationId SpellModificationId;
	[FieldOffset(16)]
	public float ArmorLevel;
	[FieldOffset(20)]
	public ModificationId ArmorModificationId;
}
