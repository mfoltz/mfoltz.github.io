---
nav_exclude: true
search_exclude: true
---

```csharp
public struct GainAlertByVicinity
{
	static GainAlertByVicinity()
	{
		Il2CppClassPointerStore<GainAlertByVicinity>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "GainAlertByVicinity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GainAlertByVicinity>.NativeClassPtr);
		GainAlertByVicinity.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GainAlertByVicinity>.NativeClassPtr, "Value");
		GainAlertByVicinity.NativeFieldInfoPtr_AggregatedCircleRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GainAlertByVicinity>.NativeClassPtr, "AggregatedCircleRadius");
		GainAlertByVicinity.NativeFieldInfoPtr_AggregatedConeRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GainAlertByVicinity>.NativeClassPtr, "AggregatedConeRadius");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GainAlertByVicinity>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_AggregatedCircleRadius;
	private static readonly IntPtr NativeFieldInfoPtr_AggregatedConeRadius;

	public AggroData Value;

	public float AggregatedCircleRadius;

	public float AggregatedConeRadius;
}
```
