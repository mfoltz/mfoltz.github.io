# Buff_HealthThreshold_DataServer

```csharp
[StructLayout(2)]
public struct Buff_HealthThreshold_DataServer
{
	static Buff_HealthThreshold_DataServer()
	{
		Il2CppClassPointerStore<Buff_HealthThreshold_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Buff_HealthThreshold_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Buff_HealthThreshold_DataServer>.NativeClassPtr);
		Buff_HealthThreshold_DataServer.NativeFieldInfoPtr_NewBuffEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_HealthThreshold_DataServer>.NativeClassPtr, "NewBuffEntity");
		Buff_HealthThreshold_DataServer.NativeFieldInfoPtr_HealthFactor1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_HealthThreshold_DataServer>.NativeClassPtr, "HealthFactor1");
		Buff_HealthThreshold_DataServer.NativeFieldInfoPtr_HealthFactor2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_HealthThreshold_DataServer>.NativeClassPtr, "HealthFactor2");
		Buff_HealthThreshold_DataServer.NativeFieldInfoPtr_HealthFactor3 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_HealthThreshold_DataServer>.NativeClassPtr, "HealthFactor3");
		Buff_HealthThreshold_DataServer.NativeFieldInfoPtr_Threshold1Met = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_HealthThreshold_DataServer>.NativeClassPtr, "Threshold1Met");
		Buff_HealthThreshold_DataServer.NativeFieldInfoPtr_Threshold2Met = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_HealthThreshold_DataServer>.NativeClassPtr, "Threshold2Met");
		Buff_HealthThreshold_DataServer.NativeFieldInfoPtr_Threshold3Met = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_HealthThreshold_DataServer>.NativeClassPtr, "Threshold3Met");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Buff_HealthThreshold_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NewBuffEntity;
	private static readonly IntPtr NativeFieldInfoPtr_HealthFactor1;
	private static readonly IntPtr NativeFieldInfoPtr_HealthFactor2;
	private static readonly IntPtr NativeFieldInfoPtr_HealthFactor3;
	private static readonly IntPtr NativeFieldInfoPtr_Threshold1Met;
	private static readonly IntPtr NativeFieldInfoPtr_Threshold2Met;
	private static readonly IntPtr NativeFieldInfoPtr_Threshold3Met;
	[FieldOffset(0)]
	public PrefabGUID NewBuffEntity;
	[FieldOffset(4)]
	public float HealthFactor1;
	[FieldOffset(8)]
	public float HealthFactor2;
	[FieldOffset(12)]
	public float HealthFactor3;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool Threshold1Met;
	[FieldOffset(17)]
	[MarshalAs(4)]
	public bool Threshold2Met;
	[FieldOffset(18)]
	[MarshalAs(4)]
	public bool Threshold3Met;
}
