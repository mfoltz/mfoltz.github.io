---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_SommelierBarrelFountain_DataServer
{
	static Script_SommelierBarrelFountain_DataServer()
	{
		Il2CppClassPointerStore<Script_SommelierBarrelFountain_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SommelierBarrelFountain_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SommelierBarrelFountain_DataServer>.NativeClassPtr);
		Script_SommelierBarrelFountain_DataServer.NativeFieldInfoPtr_SpawnEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierBarrelFountain_DataServer>.NativeClassPtr, "SpawnEntity");
		Script_SommelierBarrelFountain_DataServer.NativeFieldInfoPtr_DelayBetween_Min = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierBarrelFountain_DataServer>.NativeClassPtr, "DelayBetween_Min");
		Script_SommelierBarrelFountain_DataServer.NativeFieldInfoPtr_DelayBetween_Max = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierBarrelFountain_DataServer>.NativeClassPtr, "DelayBetween_Max");
		Script_SommelierBarrelFountain_DataServer.NativeFieldInfoPtr_OffsetDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierBarrelFountain_DataServer>.NativeClassPtr, "OffsetDistance");
		Script_SommelierBarrelFountain_DataServer.NativeFieldInfoPtr_Timer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierBarrelFountain_DataServer>.NativeClassPtr, "Timer");
		Script_SommelierBarrelFountain_DataServer.NativeFieldInfoPtr_CenterPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierBarrelFountain_DataServer>.NativeClassPtr, "CenterPosition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SommelierBarrelFountain_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnEntity;
	private static readonly IntPtr NativeFieldInfoPtr_DelayBetween_Min;
	private static readonly IntPtr NativeFieldInfoPtr_DelayBetween_Max;
	private static readonly IntPtr NativeFieldInfoPtr_OffsetDistance;
	private static readonly IntPtr NativeFieldInfoPtr_Timer;
	private static readonly IntPtr NativeFieldInfoPtr_CenterPosition;

	public PrefabGUID SpawnEntity;

	public float DelayBetween_Min;

	public float DelayBetween_Max;

	public float OffsetDistance;

	public float Timer;

	public float3 CenterPosition;
}
```
