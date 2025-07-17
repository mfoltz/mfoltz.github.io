---
nav_exclude: true
search_exclude: true
---

# Script_ApplyBuffOnAggroListTarget_DataServer

```csharp
[StructLayout(2)]
public struct Script_ApplyBuffOnAggroListTarget_DataServer
{
	static Script_ApplyBuffOnAggroListTarget_DataServer()
	{
		Il2CppClassPointerStore<Script_ApplyBuffOnAggroListTarget_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_ApplyBuffOnAggroListTarget_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_ApplyBuffOnAggroListTarget_DataServer>.NativeClassPtr);
		Script_ApplyBuffOnAggroListTarget_DataServer.NativeFieldInfoPtr_MaxDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffOnAggroListTarget_DataServer>.NativeClassPtr, "MaxDistance");
		Script_ApplyBuffOnAggroListTarget_DataServer.NativeFieldInfoPtr_NewBuffEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffOnAggroListTarget_DataServer>.NativeClassPtr, "NewBuffEntity");
		Script_ApplyBuffOnAggroListTarget_DataServer.NativeFieldInfoPtr_LowPrioBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffOnAggroListTarget_DataServer>.NativeClassPtr, "LowPrioBuff");
		Script_ApplyBuffOnAggroListTarget_DataServer.NativeFieldInfoPtr_OnFailGameplayEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffOnAggroListTarget_DataServer>.NativeClassPtr, "OnFailGameplayEventId");
		Script_ApplyBuffOnAggroListTarget_DataServer.NativeFieldInfoPtr_RandomTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffOnAggroListTarget_DataServer>.NativeClassPtr, "RandomTarget");
		Script_ApplyBuffOnAggroListTarget_DataServer.NativeFieldInfoPtr_ExcludeBuffTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyBuffOnAggroListTarget_DataServer>.NativeClassPtr, "ExcludeBuffTarget");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_ApplyBuffOnAggroListTarget_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaxDistance;
	private static readonly IntPtr NativeFieldInfoPtr_NewBuffEntity;
	private static readonly IntPtr NativeFieldInfoPtr_LowPrioBuff;
	private static readonly IntPtr NativeFieldInfoPtr_OnFailGameplayEventId;
	private static readonly IntPtr NativeFieldInfoPtr_RandomTarget;
	private static readonly IntPtr NativeFieldInfoPtr_ExcludeBuffTarget;
	[FieldOffset(0)]
	public float MaxDistance;
	[FieldOffset(4)]
	public PrefabGUID NewBuffEntity;
	[FieldOffset(8)]
	public PrefabGUID LowPrioBuff;
	[FieldOffset(12)]
	public GameplayEventId OnFailGameplayEventId;
	[FieldOffset(20)]
	[MarshalAs(4)]
	public bool RandomTarget;
	[FieldOffset(21)]
	[MarshalAs(4)]
	public bool ExcludeBuffTarget;
}
