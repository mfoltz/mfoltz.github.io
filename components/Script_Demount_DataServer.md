---
nav_exclude: true
search_exclude: true
---

# Script_Demount_DataServer

```csharp
[StructLayout(2)]
public struct Script_Demount_DataServer
{
	static Script_Demount_DataServer()
	{
		Il2CppClassPointerStore<Script_Demount_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Demount_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Demount_DataServer>.NativeClassPtr);
		Script_Demount_DataServer.NativeFieldInfoPtr_DemountMinDamageFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Demount_DataServer>.NativeClassPtr, "DemountMinDamageFactor");
		Script_Demount_DataServer.NativeFieldInfoPtr_OnDamageTakenListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Demount_DataServer>.NativeClassPtr, "OnDamageTakenListener");
		Script_Demount_DataServer.NativeFieldInfoPtr_DemountSpellType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Demount_DataServer>.NativeClassPtr, "DemountSpellType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Demount_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DemountMinDamageFactor;
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageTakenListener;
	private static readonly IntPtr NativeFieldInfoPtr_DemountSpellType;
	[FieldOffset(0)]
	public float DemountMinDamageFactor;
	[FieldOffset(4)]
	public ListenerId OnDamageTakenListener;
	[FieldOffset(12)]
	public PrefabGUID DemountSpellType;
}
