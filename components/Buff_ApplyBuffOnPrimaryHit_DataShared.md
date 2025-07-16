# Buff_ApplyBuffOnPrimaryHit_DataShared

```csharp
[StructLayout(2)]
public struct Buff_ApplyBuffOnPrimaryHit_DataShared
{
	static Buff_ApplyBuffOnPrimaryHit_DataShared()
	{
		Il2CppClassPointerStore<Buff_ApplyBuffOnPrimaryHit_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Buff_ApplyBuffOnPrimaryHit_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Buff_ApplyBuffOnPrimaryHit_DataShared>.NativeClassPtr);
		Buff_ApplyBuffOnPrimaryHit_DataShared.NativeFieldInfoPtr_ProcChance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_ApplyBuffOnPrimaryHit_DataShared>.NativeClassPtr, "ProcChance");
		Buff_ApplyBuffOnPrimaryHit_DataShared.NativeFieldInfoPtr_ProcBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_ApplyBuffOnPrimaryHit_DataShared>.NativeClassPtr, "ProcBuff");
		Buff_ApplyBuffOnPrimaryHit_DataShared.NativeFieldInfoPtr_OnDamageDealtListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_ApplyBuffOnPrimaryHit_DataShared>.NativeClassPtr, "OnDamageDealtListener");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Buff_ApplyBuffOnPrimaryHit_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ProcChance;
	private static readonly IntPtr NativeFieldInfoPtr_ProcBuff;
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageDealtListener;
	[FieldOffset(0)]
	public float ProcChance;
	[FieldOffset(4)]
	public PrefabGUID ProcBuff;
	[FieldOffset(8)]
	public ListenerId OnDamageDealtListener;
}
