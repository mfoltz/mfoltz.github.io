---
nav_exclude: true
search_exclude: true
---

```csharp
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

	public ModifyDynamicCollisionTargets Targets;

	public float Hardness;

	public float PushStrengthMin;

	public float PushStrengthMax;

	public Script_Buff_ModifyDynamicCollision_DataServer.Modifications AgainstPlayerMods;

	public Script_Buff_ModifyDynamicCollision_DataServer.Modifications AgainstUnitsMods;

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

		public ModificationId Hardness;

		public ModificationId PushStrengthMin;

		public ModificationId PushStrengthMax;
	}
}
```
