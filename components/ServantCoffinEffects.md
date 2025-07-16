# ServantCoffinEffects

```csharp
[StructLayout(2)]
public struct ServantCoffinEffects
{
	static ServantCoffinEffects()
	{
		Il2CppClassPointerStore<ServantCoffinEffects>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServantCoffinEffects");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantCoffinEffects>.NativeClassPtr);
		ServantCoffinEffects.NativeFieldInfoPtr_SpawnExitOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinEffects>.NativeClassPtr, "SpawnExitOffset");
		ServantCoffinEffects.NativeFieldInfoPtr_SpawnTravelBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinEffects>.NativeClassPtr, "SpawnTravelBuff");
		ServantCoffinEffects.NativeFieldInfoPtr_SpawnAnimationGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinEffects>.NativeClassPtr, "SpawnAnimationGuid");
		ServantCoffinEffects.NativeFieldInfoPtr_ActiveConversionGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinEffects>.NativeClassPtr, "ActiveConversionGuid");
		ServantCoffinEffects.NativeFieldInfoPtr_ActiveConversionState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinEffects>.NativeClassPtr, "ActiveConversionState");
		ServantCoffinEffects.NativeFieldInfoPtr_ActiveServantGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinEffects>.NativeClassPtr, "ActiveServantGuid");
		ServantCoffinEffects.NativeFieldInfoPtr_ActiveServantState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinEffects>.NativeClassPtr, "ActiveServantState");
		ServantCoffinEffects.NativeFieldInfoPtr_WakeUpReadyGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinEffects>.NativeClassPtr, "WakeUpReadyGuid");
		ServantCoffinEffects.NativeFieldInfoPtr_WakeUpReadyState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinEffects>.NativeClassPtr, "WakeUpReadyState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantCoffinEffects>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnExitOffset;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnTravelBuff;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnAnimationGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveConversionGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveConversionState;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveServantGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveServantState;
	private static readonly IntPtr NativeFieldInfoPtr_WakeUpReadyGuid;
	private static readonly IntPtr NativeFieldInfoPtr_WakeUpReadyState;
	[FieldOffset(0)]
	public float3 SpawnExitOffset;
	[FieldOffset(12)]
	public PrefabGUID SpawnTravelBuff;
	[FieldOffset(16)]
	public SequenceGUID SpawnAnimationGuid;
	[FieldOffset(20)]
	public SequenceGUID ActiveConversionGuid;
	[FieldOffset(24)]
	public SequenceState ActiveConversionState;
	[FieldOffset(32)]
	public SequenceGUID ActiveServantGuid;
	[FieldOffset(36)]
	public SequenceState ActiveServantState;
	[FieldOffset(44)]
	public SequenceGUID WakeUpReadyGuid;
	[FieldOffset(48)]
	public SequenceState WakeUpReadyState;
}
