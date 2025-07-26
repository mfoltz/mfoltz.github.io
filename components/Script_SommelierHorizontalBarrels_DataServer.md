# Script_SommelierHorizontalBarrels_DataServer

```csharp
[StructLayout(2)]
public struct Script_SommelierHorizontalBarrels_DataServer
{
	static Script_SommelierHorizontalBarrels_DataServer()
	{
		Il2CppClassPointerStore<Script_SommelierHorizontalBarrels_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SommelierHorizontalBarrels_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SommelierHorizontalBarrels_DataServer>.NativeClassPtr);
		Script_SommelierHorizontalBarrels_DataServer.NativeFieldInfoPtr_SpawnEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierHorizontalBarrels_DataServer>.NativeClassPtr, "SpawnEntity");
		Script_SommelierHorizontalBarrels_DataServer.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierHorizontalBarrels_DataServer>.NativeClassPtr, "Amount");
		Script_SommelierHorizontalBarrels_DataServer.NativeFieldInfoPtr_Waves = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierHorizontalBarrels_DataServer>.NativeClassPtr, "Waves");
		Script_SommelierHorizontalBarrels_DataServer.NativeFieldInfoPtr_Spacing = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierHorizontalBarrels_DataServer>.NativeClassPtr, "Spacing");
		Script_SommelierHorizontalBarrels_DataServer.NativeFieldInfoPtr_DelayBetweenWaves = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierHorizontalBarrels_DataServer>.NativeClassPtr, "DelayBetweenWaves");
		Script_SommelierHorizontalBarrels_DataServer.NativeFieldInfoPtr_DelayBetween_Min = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierHorizontalBarrels_DataServer>.NativeClassPtr, "DelayBetween_Min");
		Script_SommelierHorizontalBarrels_DataServer.NativeFieldInfoPtr_DelayBetween_Max = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierHorizontalBarrels_DataServer>.NativeClassPtr, "DelayBetween_Max");
		Script_SommelierHorizontalBarrels_DataServer.NativeFieldInfoPtr_RoomSizeOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierHorizontalBarrels_DataServer>.NativeClassPtr, "RoomSizeOffset");
		Script_SommelierHorizontalBarrels_DataServer.NativeFieldInfoPtr_Timer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierHorizontalBarrels_DataServer>.NativeClassPtr, "Timer");
		Script_SommelierHorizontalBarrels_DataServer.NativeFieldInfoPtr_WaveTimer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierHorizontalBarrels_DataServer>.NativeClassPtr, "WaveTimer");
		Script_SommelierHorizontalBarrels_DataServer.NativeFieldInfoPtr_CenterPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierHorizontalBarrels_DataServer>.NativeClassPtr, "CenterPosition");
		Script_SommelierHorizontalBarrels_DataServer.NativeFieldInfoPtr_Direction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SommelierHorizontalBarrels_DataServer>.NativeClassPtr, "Direction");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SommelierHorizontalBarrels_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeFieldInfoPtr_Waves;
	private static readonly IntPtr NativeFieldInfoPtr_Spacing;
	private static readonly IntPtr NativeFieldInfoPtr_DelayBetweenWaves;
	private static readonly IntPtr NativeFieldInfoPtr_DelayBetween_Min;
	private static readonly IntPtr NativeFieldInfoPtr_DelayBetween_Max;
	private static readonly IntPtr NativeFieldInfoPtr_RoomSizeOffset;
	private static readonly IntPtr NativeFieldInfoPtr_Timer;
	private static readonly IntPtr NativeFieldInfoPtr_WaveTimer;
	private static readonly IntPtr NativeFieldInfoPtr_CenterPosition;
	private static readonly IntPtr NativeFieldInfoPtr_Direction;
	[FieldOffset(0)]
	public PrefabGUID SpawnEntity;
	[FieldOffset(4)]
	public int Amount;
	[FieldOffset(8)]
	public int Waves;
	[FieldOffset(12)]
	public float Spacing;
	[FieldOffset(16)]
	public float DelayBetweenWaves;
	[FieldOffset(20)]
	public float DelayBetween_Min;
	[FieldOffset(24)]
	public float DelayBetween_Max;
	[FieldOffset(28)]
	public float RoomSizeOffset;
	[FieldOffset(32)]
	public float Timer;
	[FieldOffset(36)]
	public float WaveTimer;
	[FieldOffset(40)]
	public float3 CenterPosition;
	[FieldOffset(52)]
	public float3 Direction;
}
