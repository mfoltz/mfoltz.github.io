---
nav_exclude: true
search_exclude: true
---

# ModifyAIMoveSpeedsBuff

```csharp
[StructLayout(2)]
public struct ModifyAIMoveSpeedsBuff
{
	static ModifyAIMoveSpeedsBuff()
	{
		Il2CppClassPointerStore<ModifyAIMoveSpeedsBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyAIMoveSpeedsBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyAIMoveSpeedsBuff>.NativeClassPtr);
		ModifyAIMoveSpeedsBuff.NativeFieldInfoPtr_Walk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAIMoveSpeedsBuff>.NativeClassPtr, "Walk");
		ModifyAIMoveSpeedsBuff.NativeFieldInfoPtr_WalkModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAIMoveSpeedsBuff>.NativeClassPtr, "WalkModId");
		ModifyAIMoveSpeedsBuff.NativeFieldInfoPtr_Run = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAIMoveSpeedsBuff>.NativeClassPtr, "Run");
		ModifyAIMoveSpeedsBuff.NativeFieldInfoPtr_RunModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAIMoveSpeedsBuff>.NativeClassPtr, "RunModId");
		ModifyAIMoveSpeedsBuff.NativeFieldInfoPtr_Circle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAIMoveSpeedsBuff>.NativeClassPtr, "Circle");
		ModifyAIMoveSpeedsBuff.NativeFieldInfoPtr_CircleModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAIMoveSpeedsBuff>.NativeClassPtr, "CircleModId");
		ModifyAIMoveSpeedsBuff.NativeFieldInfoPtr_Return = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAIMoveSpeedsBuff>.NativeClassPtr, "Return");
		ModifyAIMoveSpeedsBuff.NativeFieldInfoPtr_ReturnModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAIMoveSpeedsBuff>.NativeClassPtr, "ReturnModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyAIMoveSpeedsBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Walk;
	private static readonly IntPtr NativeFieldInfoPtr_WalkModId;
	private static readonly IntPtr NativeFieldInfoPtr_Run;
	private static readonly IntPtr NativeFieldInfoPtr_RunModId;
	private static readonly IntPtr NativeFieldInfoPtr_Circle;
	private static readonly IntPtr NativeFieldInfoPtr_CircleModId;
	private static readonly IntPtr NativeFieldInfoPtr_Return;
	private static readonly IntPtr NativeFieldInfoPtr_ReturnModId;
	[FieldOffset(0)]
	public float Walk;
	[FieldOffset(4)]
	public ModificationId WalkModId;
	[FieldOffset(8)]
	public float Run;
	[FieldOffset(12)]
	public ModificationId RunModId;
	[FieldOffset(16)]
	public float Circle;
	[FieldOffset(20)]
	public ModificationId CircleModId;
	[FieldOffset(24)]
	public float Return;
	[FieldOffset(28)]
	public ModificationId ReturnModId;
}
