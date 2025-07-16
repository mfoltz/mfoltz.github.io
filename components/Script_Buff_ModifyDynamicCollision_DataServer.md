# Script_Buff_ModifyDynamicCollision_DataServer

```csharp
[StructLayout(2)]
public struct Script_Buff_ModifyDynamicCollision_DataServer
{
	static Script_Buff_ModifyDynamicCollision_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_ModifyDynamicCollision_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_ModifyDynamicCollision_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_ModifyDynamicCollision_DataServer>.NativeClassPtr);
		Script_Buff_ModifyDynamicCollision_DataServer.NativeFieldInfoPtr_Targets = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyDynamicCollision_DataServer>.NativeClassPtr, "Targets");
		Script_Buff_ModifyDynamicCollision_DataServer.NativeFieldInfoPtr_Hardness = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyDynamicCollision_DataServer>.NativeClassPtr, "Hardness");
		Script_Buff_ModifyDynamicCollision_DataServer.NativeFieldInfoPtr_PushStrengthMin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyDynamicCollision_DataServer>.NativeClassPtr, "PushStrengthMin");
		Script_Buff_ModifyDynamicCollision_DataServer.NativeFieldInfoPtr_PushStrengthMax = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyDynamicCollision_DataServer>.NativeClassPtr, "PushStrengthMax");
		Script_Buff_ModifyDynamicCollision_DataServer.NativeFieldInfoPtr_AgainstPlayerMods = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyDynamicCollision_DataServer>.NativeClassPtr, "AgainstPlayerMods");
		Script_Buff_ModifyDynamicCollision_DataServer.NativeFieldInfoPtr_AgainstUnitsMods = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyDynamicCollision_DataServer>.NativeClassPtr, "AgainstUnitsMods");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_ModifyDynamicCollision_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Targets;
	private static readonly IntPtr NativeFieldInfoPtr_Hardness;
	private static readonly IntPtr NativeFieldInfoPtr_PushStrengthMin;
	private static readonly IntPtr NativeFieldInfoPtr_PushStrengthMax;
	private static readonly IntPtr NativeFieldInfoPtr_AgainstPlayerMods;
	private static readonly IntPtr NativeFieldInfoPtr_AgainstUnitsMods;
	[FieldOffset(0)]
	public ModifyDynamicCollisionTargets Targets;
	[FieldOffset(4)]
	public float Hardness;
	[FieldOffset(8)]
	public float PushStrengthMin;
	[FieldOffset(12)]
	public float PushStrengthMax;
	[FieldOffset(16)]
	public Script_Buff_ModifyDynamicCollision_DataServer.Modifications AgainstPlayerMods;
	[FieldOffset(28)]
	public Script_Buff_ModifyDynamicCollision_DataServer.Modifications AgainstUnitsMods;
	[StructLayout(2)]
	public struct Modifications
	{
		static Modifications()
		{
			Il2CppClassPointerStore<Script_Buff_ModifyDynamicCollision_DataServer.Modifications>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<Script_Buff_ModifyDynamicCollision_DataServer>.NativeClassPtr, "Modifications");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_ModifyDynamicCollision_DataServer.Modifications>.NativeClassPtr);
			Script_Buff_ModifyDynamicCollision_DataServer.Modifications.NativeFieldInfoPtr_Hardness = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyDynamicCollision_DataServer.Modifications>.NativeClassPtr, "Hardness");
			Script_Buff_ModifyDynamicCollision_DataServer.Modifications.NativeFieldInfoPtr_PushStrengthMin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyDynamicCollision_DataServer.Modifications>.NativeClassPtr, "PushStrengthMin");
			Script_Buff_ModifyDynamicCollision_DataServer.Modifications.NativeFieldInfoPtr_PushStrengthMax = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyDynamicCollision_DataServer.Modifications>.NativeClassPtr, "PushStrengthMax");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_ModifyDynamicCollision_DataServer.Modifications>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_Hardness;
		private static readonly IntPtr NativeFieldInfoPtr_PushStrengthMin;
		private static readonly IntPtr NativeFieldInfoPtr_PushStrengthMax;
		[FieldOffset(0)]
		public ModificationId Hardness;
		[FieldOffset(4)]
		public ModificationId PushStrengthMin;
		[FieldOffset(8)]
		public ModificationId PushStrengthMax;
	}
}
