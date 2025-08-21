---
nav_exclude: true
search_exclude: true
---

```csharp
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

	public PrefabGUID SpawnEntity;

	public int Amount;

	public float Spacing;

	public float DelayBetween_Min;

	public float DelayBetween_Max;

	public float RoomSizeOffset;

	public float Timer;

	public float3 CenterPosition;

	public float3 Direction;
}
```
