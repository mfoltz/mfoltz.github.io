---
nav_exclude: true
search_exclude: true
---

# ServantCoffinstation

```csharp
[StructLayout(2)]
public struct ServantCoffinstation
{
	static ServantCoffinstation()
	{
		Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServantCoffinstation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr);
		ServantCoffinstation.NativeFieldInfoPtr_InjuryEndTimeTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr, "InjuryEndTimeTicks");
		ServantCoffinstation.NativeFieldInfoPtr_BloodQuality = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr, "BloodQuality");
		ServantCoffinstation.NativeFieldInfoPtr_ConvertionProgress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr, "ConvertionProgress");
		ServantCoffinstation.NativeFieldInfoPtr_ServantName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr, "ServantName");
		ServantCoffinstation.NativeFieldInfoPtr_ConvertFromUnit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr, "ConvertFromUnit");
		ServantCoffinstation.NativeFieldInfoPtr_ConvertToUnit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr, "ConvertToUnit");
		ServantCoffinstation.NativeFieldInfoPtr_ConnectedServant = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr, "ConnectedServant");
		ServantCoffinstation.NativeFieldInfoPtr_Injury = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr, "Injury");
		ServantCoffinstation.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr, "State");
		ServantCoffinstation.NativeFieldInfoPtr_ConnectedServantState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr, "ConnectedServantState");
		ServantCoffinstation.NativeFieldInfoPtr_ServantSeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr, "ServantSeed");
		ServantCoffinstation.NativeFieldInfoPtr_ServantEyeColorIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr, "ServantEyeColorIndex");
		ServantCoffinstation.NativeFieldInfoPtr_ServantProficiency = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr, "ServantProficiency");
		ServantCoffinstation.NativeFieldInfoPtr_ServantGearLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr, "ServantGearLevel");
		ServantCoffinstation.NativeMethodInfoPtr_Reset_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr, 100675011);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 171841, RefRangeEnd = 171843, XrefRangeStart = 171838, XrefRangeEnd = 171841, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Reset()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantCoffinstation.NativeMethodInfoPtr_Reset_Public_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantCoffinstation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_InjuryEndTimeTicks;
	private static readonly IntPtr NativeFieldInfoPtr_BloodQuality;
	private static readonly IntPtr NativeFieldInfoPtr_ConvertionProgress;
	private static readonly IntPtr NativeFieldInfoPtr_ServantName;
	private static readonly IntPtr NativeFieldInfoPtr_ConvertFromUnit;
	private static readonly IntPtr NativeFieldInfoPtr_ConvertToUnit;
	private static readonly IntPtr NativeFieldInfoPtr_ConnectedServant;
	private static readonly IntPtr NativeFieldInfoPtr_Injury;
	private static readonly IntPtr NativeFieldInfoPtr_State;
	private static readonly IntPtr NativeFieldInfoPtr_ConnectedServantState;
	private static readonly IntPtr NativeFieldInfoPtr_ServantSeed;
	private static readonly IntPtr NativeFieldInfoPtr_ServantEyeColorIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ServantProficiency;
	private static readonly IntPtr NativeFieldInfoPtr_ServantGearLevel;
	private static readonly IntPtr NativeMethodInfoPtr_Reset_Public_Void_0;
	[FieldOffset(0)]
	public long InjuryEndTimeTicks;
	[FieldOffset(8)]
	public float BloodQuality;
	[FieldOffset(12)]
	public float ConvertionProgress;
	[FieldOffset(16)]
	public FixedString64Bytes ServantName;
	[FieldOffset(80)]
	public PrefabGUID ConvertFromUnit;
	[FieldOffset(84)]
	public PrefabGUID ConvertToUnit;
	[FieldOffset(88)]
	public NetworkedEntity ConnectedServant;
	[FieldOffset(100)]
	public PrefabGUID Injury;
	[FieldOffset(104)]
	public ServantCoffinState State;
	[FieldOffset(108)]
	public GenericEnemyState ConnectedServantState;
	[FieldOffset(112)]
	public ushort ServantSeed;
	[FieldOffset(114)]
	public byte ServantEyeColorIndex;
	[FieldOffset(116)]
	public float ServantProficiency;
	[FieldOffset(120)]
	public float ServantGearLevel;
}
