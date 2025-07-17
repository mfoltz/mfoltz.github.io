---
nav_exclude: true
search_exclude: true
---

# ModifyStunCloth_Data

```csharp
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

	public int ModType;

	public CurveReference SimulationWeightCurve;

	public float Weight;

	public float EndWeight;
}
```
