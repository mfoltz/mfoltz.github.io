---
nav_exclude: true
search_exclude: true
---

# MiscAiGameplayData

```csharp
[StructLayout(2)]
public struct MiscAiGameplayData
{
	static MiscAiGameplayData()
	{
		Il2CppClassPointerStore<MiscAiGameplayData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MiscAiGameplayData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MiscAiGameplayData>.NativeClassPtr);
		MiscAiGameplayData.NativeFieldInfoPtr_StationaryWhenIdle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MiscAiGameplayData>.NativeClassPtr, "StationaryWhenIdle");
		MiscAiGameplayData.NativeFieldInfoPtr_AlertAlliesOnDeath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MiscAiGameplayData>.NativeClassPtr, "AlertAlliesOnDeath");
		MiscAiGameplayData.NativeFieldInfoPtr_IgnoresPathfindingLineOfSight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MiscAiGameplayData>.NativeClassPtr, "IgnoresPathfindingLineOfSight");
		MiscAiGameplayData.NativeFieldInfoPtr_StopPatrol = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MiscAiGameplayData>.NativeClassPtr, "StopPatrol");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MiscAiGameplayData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StationaryWhenIdle;
	private static readonly IntPtr NativeFieldInfoPtr_AlertAlliesOnDeath;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoresPathfindingLineOfSight;
	private static readonly IntPtr NativeFieldInfoPtr_StopPatrol;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool StationaryWhenIdle;
	[FieldOffset(1)]
	[MarshalAs(4)]
	public bool AlertAlliesOnDeath;
	[FieldOffset(2)]
	public ModifiableBool IgnoresPathfindingLineOfSight;
	[FieldOffset(3)]
	public ModifiableBool StopPatrol;
}
