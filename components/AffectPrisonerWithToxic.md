# AffectPrisonerWithToxic

```csharp
[StructLayout(2)]
public struct AffectPrisonerWithToxic
{
	static AffectPrisonerWithToxic()
	{
		Il2CppClassPointerStore<AffectPrisonerWithToxic>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AffectPrisonerWithToxic");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AffectPrisonerWithToxic>.NativeClassPtr);
		AffectPrisonerWithToxic.NativeFieldInfoPtr_ChanceToBecomeMutant = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AffectPrisonerWithToxic>.NativeClassPtr, "ChanceToBecomeMutant");
		AffectPrisonerWithToxic.NativeFieldInfoPtr_IncreaseBloodQuality_Min = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AffectPrisonerWithToxic>.NativeClassPtr, "IncreaseBloodQuality_Min");
		AffectPrisonerWithToxic.NativeFieldInfoPtr_IncreaseBloodQuality_Max = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AffectPrisonerWithToxic>.NativeClassPtr, "IncreaseBloodQuality_Max");
		AffectPrisonerWithToxic.NativeFieldInfoPtr_MutantType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AffectPrisonerWithToxic>.NativeClassPtr, "MutantType");
		AffectPrisonerWithToxic.NativeFieldInfoPtr_SpawnBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AffectPrisonerWithToxic>.NativeClassPtr, "SpawnBuff");
		AffectPrisonerWithToxic.NativeFieldInfoPtr_BuffSuccess = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AffectPrisonerWithToxic>.NativeClassPtr, "BuffSuccess");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AffectPrisonerWithToxic>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ChanceToBecomeMutant;
	private static readonly IntPtr NativeFieldInfoPtr_IncreaseBloodQuality_Min;
	private static readonly IntPtr NativeFieldInfoPtr_IncreaseBloodQuality_Max;
	private static readonly IntPtr NativeFieldInfoPtr_MutantType;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnBuff;
	private static readonly IntPtr NativeFieldInfoPtr_BuffSuccess;
	[FieldOffset(0)]
	public float ChanceToBecomeMutant;
	[FieldOffset(4)]
	public float IncreaseBloodQuality_Min;
	[FieldOffset(8)]
	public float IncreaseBloodQuality_Max;
	[FieldOffset(12)]
	public PrefabGUID MutantType;
	[FieldOffset(16)]
	public PrefabGUID SpawnBuff;
	[FieldOffset(20)]
	public PrefabGUID BuffSuccess;
}
