---
nav_exclude: true
search_exclude: true
---

# Script_SCTChatOnAggro_Data

```csharp
[StructLayout(2)]
public struct Script_SCTChatOnAggro_Data
{
	static Script_SCTChatOnAggro_Data()
	{
		Il2CppClassPointerStore<Script_SCTChatOnAggro_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SCTChatOnAggro_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SCTChatOnAggro_Data>.NativeClassPtr);
		Script_SCTChatOnAggro_Data.NativeFieldInfoPtr_SCTPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SCTChatOnAggro_Data>.NativeClassPtr, "SCTPrefab");
		Script_SCTChatOnAggro_Data.NativeFieldInfoPtr_PreviousAggroTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SCTChatOnAggro_Data>.NativeClassPtr, "PreviousAggroTarget");
		Script_SCTChatOnAggro_Data.NativeFieldInfoPtr_PreviousAlertTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SCTChatOnAggro_Data>.NativeClassPtr, "PreviousAlertTarget");
		Script_SCTChatOnAggro_Data.NativeFieldInfoPtr_Cooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SCTChatOnAggro_Data>.NativeClassPtr, "Cooldown");
		Script_SCTChatOnAggro_Data.NativeFieldInfoPtr_NextAvailableAggroChatTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SCTChatOnAggro_Data>.NativeClassPtr, "NextAvailableAggroChatTime");
		Script_SCTChatOnAggro_Data.NativeFieldInfoPtr_NextAvailableAggroDroppedChatTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SCTChatOnAggro_Data>.NativeClassPtr, "NextAvailableAggroDroppedChatTime");
		Script_SCTChatOnAggro_Data.NativeFieldInfoPtr_NextAvailableAlertChatTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SCTChatOnAggro_Data>.NativeClassPtr, "NextAvailableAlertChatTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SCTChatOnAggro_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SCTPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_PreviousAggroTarget;
	private static readonly IntPtr NativeFieldInfoPtr_PreviousAlertTarget;
	private static readonly IntPtr NativeFieldInfoPtr_Cooldown;
	private static readonly IntPtr NativeFieldInfoPtr_NextAvailableAggroChatTime;
	private static readonly IntPtr NativeFieldInfoPtr_NextAvailableAggroDroppedChatTime;
	private static readonly IntPtr NativeFieldInfoPtr_NextAvailableAlertChatTime;
	[FieldOffset(0)]
	public PrefabGUID SCTPrefab;
	[FieldOffset(4)]
	public Entity PreviousAggroTarget;
	[FieldOffset(12)]
	public Entity PreviousAlertTarget;
	[FieldOffset(20)]
	public float Cooldown;
	[FieldOffset(24)]
	public double NextAvailableAggroChatTime;
	[FieldOffset(32)]
	public double NextAvailableAggroDroppedChatTime;
	[FieldOffset(40)]
	public double NextAvailableAlertChatTime;
}
