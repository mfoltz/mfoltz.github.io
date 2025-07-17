---
nav_exclude: true
search_exclude: true
---

# ServantCoffinstation

```csharp
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

	public long InjuryEndTimeTicks;

	public float BloodQuality;

	public float ConvertionProgress;

	public FixedString64Bytes ServantName;

	public PrefabGUID ConvertFromUnit;

	public PrefabGUID ConvertToUnit;

	public NetworkedEntity ConnectedServant;

	public PrefabGUID Injury;

	public ServantCoffinState State;

	public GenericEnemyState ConnectedServantState;

	public ushort ServantSeed;

	public byte ServantEyeColorIndex;

	public float ServantProficiency;

	public float ServantGearLevel;
}
```

## Server Systems

- [ProjectM.ServantCoffinstationUpdateSystem](/systems/ProjectM.ServantCoffinstationUpdateSystem)
