---
nav_exclude: true
search_exclude: true
---

# Script_SommelierBarrelDance_DataServer

```csharp
[StructLayout(2)]
public struct Script_SommelierBarrelDance_DataServer
{
	static Script_SommelierBarrelDance_DataServer()
	{
		Il2CppClassPointerStore<Script_SommelierBarrelDance_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SommelierBarrelDance_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SommelierBarrelDance_DataServer>.NativeClassPtr);
		Script_SommelierBarrelDance_DataServer.NativeFieldInfoPtr_SpawnEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierBarrelDance_DataServer>.NativeClassPtr, "SpawnEntity");
		Script_SommelierBarrelDance_DataServer.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierBarrelDance_DataServer>.NativeClassPtr, "Amount");
		Script_SommelierBarrelDance_DataServer.NativeFieldInfoPtr_Spacing = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierBarrelDance_DataServer>.NativeClassPtr, "Spacing");
		Script_SommelierBarrelDance_DataServer.NativeFieldInfoPtr_DelayBetween_Min = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierBarrelDance_DataServer>.NativeClassPtr, "DelayBetween_Min");
		Script_SommelierBarrelDance_DataServer.NativeFieldInfoPtr_DelayBetween_Max = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierBarrelDance_DataServer>.NativeClassPtr, "DelayBetween_Max");
		Script_SommelierBarrelDance_DataServer.NativeFieldInfoPtr_RoomSizeOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierBarrelDance_DataServer>.NativeClassPtr, "RoomSizeOffset");
		Script_SommelierBarrelDance_DataServer.NativeFieldInfoPtr_Timer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierBarrelDance_DataServer>.NativeClassPtr, "Timer");
		Script_SommelierBarrelDance_DataServer.NativeFieldInfoPtr_CenterPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierBarrelDance_DataServer>.NativeClassPtr, "CenterPosition");
		Script_SommelierBarrelDance_DataServer.NativeFieldInfoPtr_Direction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierBarrelDance_DataServer>.NativeClassPtr, "Direction");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SommelierBarrelDance_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeFieldInfoPtr_Spacing;
	private static readonly IntPtr NativeFieldInfoPtr_DelayBetween_Min;
	private static readonly IntPtr NativeFieldInfoPtr_DelayBetween_Max;
	private static readonly IntPtr NativeFieldInfoPtr_RoomSizeOffset;
	private static readonly IntPtr NativeFieldInfoPtr_Timer;
	private static readonly IntPtr NativeFieldInfoPtr_CenterPosition;
	private static readonly IntPtr NativeFieldInfoPtr_Direction;
	[FieldOffset(0)]
	public PrefabGUID SpawnEntity;
	[FieldOffset(4)]
	public int Amount;
	[FieldOffset(8)]
	public float Spacing;
	[FieldOffset(12)]
	public float DelayBetween_Min;
	[FieldOffset(16)]
	public float DelayBetween_Max;
	[FieldOffset(20)]
	public float RoomSizeOffset;
	[FieldOffset(24)]
	public float Timer;
	[FieldOffset(28)]
	public float3 CenterPosition;
	[FieldOffset(40)]
	public float3 Direction;
}
