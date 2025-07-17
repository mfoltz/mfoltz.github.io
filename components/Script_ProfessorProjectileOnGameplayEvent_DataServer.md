---
nav_exclude: true
search_exclude: true
---

# Script_ProfessorProjectileOnGameplayEvent_DataServer

```csharp
[StructLayout(2)]
public struct Script_ProfessorProjectileOnGameplayEvent_DataServer
{
	static Script_ProfessorProjectileOnGameplayEvent_DataServer()
	{
		Il2CppClassPointerStore<Script_ProfessorProjectileOnGameplayEvent_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_ProfessorProjectileOnGameplayEvent_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_ProfessorProjectileOnGameplayEvent_DataServer>.NativeClassPtr);
		Script_ProfessorProjectileOnGameplayEvent_DataServer.NativeFieldInfoPtr_Angle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ProfessorProjectileOnGameplayEvent_DataServer>.NativeClassPtr, "Angle");
		Script_ProfessorProjectileOnGameplayEvent_DataServer.NativeFieldInfoPtr_RandomOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ProfessorProjectileOnGameplayEvent_DataServer>.NativeClassPtr, "RandomOffset");
		Script_ProfessorProjectileOnGameplayEvent_DataServer.NativeFieldInfoPtr_IndividualRandom = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ProfessorProjectileOnGameplayEvent_DataServer>.NativeClassPtr, "IndividualRandom");
		Script_ProfessorProjectileOnGameplayEvent_DataServer.NativeFieldInfoPtr_NewProjectileEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ProfessorProjectileOnGameplayEvent_DataServer>.NativeClassPtr, "NewProjectileEntity");
		Script_ProfessorProjectileOnGameplayEvent_DataServer.NativeFieldInfoPtr_NewProjectileEntityAlternate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ProfessorProjectileOnGameplayEvent_DataServer>.NativeClassPtr, "NewProjectileEntityAlternate");
		Script_ProfessorProjectileOnGameplayEvent_DataServer.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ProfessorProjectileOnGameplayEvent_DataServer>.NativeClassPtr, "Count");
		Script_ProfessorProjectileOnGameplayEvent_DataServer.NativeFieldInfoPtr_TickCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ProfessorProjectileOnGameplayEvent_DataServer>.NativeClassPtr, "TickCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_ProfessorProjectileOnGameplayEvent_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Angle;
	private static readonly IntPtr NativeFieldInfoPtr_RandomOffset;
	private static readonly IntPtr NativeFieldInfoPtr_IndividualRandom;
	private static readonly IntPtr NativeFieldInfoPtr_NewProjectileEntity;
	private static readonly IntPtr NativeFieldInfoPtr_NewProjectileEntityAlternate;
	private static readonly IntPtr NativeFieldInfoPtr_Count;
	private static readonly IntPtr NativeFieldInfoPtr_TickCount;
	[FieldOffset(0)]
	public float Angle;
	[FieldOffset(4)]
	public float RandomOffset;
	[FieldOffset(8)]
	public float IndividualRandom;
	[FieldOffset(12)]
	public PrefabGUID NewProjectileEntity;
	[FieldOffset(16)]
	public PrefabGUID NewProjectileEntityAlternate;
	[FieldOffset(20)]
	public int Count;
	[FieldOffset(24)]
	public int TickCount;
}
