# Script_Knockback_Wall_Buff_DataServer

```csharp
[StructLayout(2)]
public struct Script_Knockback_Wall_Buff_DataServer
{
	static Script_Knockback_Wall_Buff_DataServer()
	{
		Il2CppClassPointerStore<Script_Knockback_Wall_Buff_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Knockback_Wall_Buff_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Knockback_Wall_Buff_DataServer>.NativeClassPtr);
		Script_Knockback_Wall_Buff_DataServer.NativeFieldInfoPtr_LastPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Knockback_Wall_Buff_DataServer>.NativeClassPtr, "LastPosition");
		Script_Knockback_Wall_Buff_DataServer.NativeFieldInfoPtr_HitOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Knockback_Wall_Buff_DataServer>.NativeClassPtr, "HitOffset");
		Script_Knockback_Wall_Buff_DataServer.NativeFieldInfoPtr_BuffDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Knockback_Wall_Buff_DataServer>.NativeClassPtr, "BuffDuration");
		Script_Knockback_Wall_Buff_DataServer.NativeFieldInfoPtr_HitRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Knockback_Wall_Buff_DataServer>.NativeClassPtr, "HitRadius");
		Script_Knockback_Wall_Buff_DataServer.NativeFieldInfoPtr_BuffType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Knockback_Wall_Buff_DataServer>.NativeClassPtr, "BuffType");
		Script_Knockback_Wall_Buff_DataServer.NativeFieldInfoPtr_TriggerSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Knockback_Wall_Buff_DataServer>.NativeClassPtr, "TriggerSequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Knockback_Wall_Buff_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastPosition;
	private static readonly IntPtr NativeFieldInfoPtr_HitOffset;
	private static readonly IntPtr NativeFieldInfoPtr_BuffDuration;
	private static readonly IntPtr NativeFieldInfoPtr_HitRadius;
	private static readonly IntPtr NativeFieldInfoPtr_BuffType;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerSequence;
	[FieldOffset(0)]
	public float3 LastPosition;
	[FieldOffset(12)]
	public float3 HitOffset;
	[FieldOffset(24)]
	public float BuffDuration;
	[FieldOffset(28)]
	public float HitRadius;
	[FieldOffset(32)]
	public PrefabGUID BuffType;
	[FieldOffset(36)]
	public SequenceGUID TriggerSequence;
}
