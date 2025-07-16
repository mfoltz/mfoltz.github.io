# ModifyStunCloth_Data

```csharp
[StructLayout(2)]
public struct ModifyStunCloth_Data
{
	static ModifyStunCloth_Data()
	{
		Il2CppClassPointerStore<ModifyStunCloth_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ModifyStunCloth_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyStunCloth_Data>.NativeClassPtr);
		ModifyStunCloth_Data.NativeFieldInfoPtr_ModType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyStunCloth_Data>.NativeClassPtr, "ModType");
		ModifyStunCloth_Data.NativeFieldInfoPtr_SimulationWeightCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyStunCloth_Data>.NativeClassPtr, "SimulationWeightCurve");
		ModifyStunCloth_Data.NativeFieldInfoPtr_Weight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyStunCloth_Data>.NativeClassPtr, "Weight");
		ModifyStunCloth_Data.NativeFieldInfoPtr_EndWeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyStunCloth_Data>.NativeClassPtr, "EndWeight");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyStunCloth_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ModType;
	private static readonly IntPtr NativeFieldInfoPtr_SimulationWeightCurve;
	private static readonly IntPtr NativeFieldInfoPtr_Weight;
	private static readonly IntPtr NativeFieldInfoPtr_EndWeight;
	[FieldOffset(0)]
	public int ModType;
	[FieldOffset(4)]
	public CurveReference SimulationWeightCurve;
	[FieldOffset(12)]
	public float Weight;
	[FieldOffset(16)]
	public float EndWeight;
}
