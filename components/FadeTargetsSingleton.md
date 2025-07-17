---
nav_exclude: true
search_exclude: true
---

# FadeTargetsSingleton

```csharp
[StructLayout(2)]
public struct FadeTargetsSingleton
{
	static FadeTargetsSingleton()
	{
		Il2CppClassPointerStore<FadeTargetsSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "FadeTargetsSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FadeTargetsSingleton>.NativeClassPtr);
		FadeTargetsSingleton.NativeFieldInfoPtr_Positions = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeTargetsSingleton>.NativeClassPtr, "Positions");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FadeTargetsSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Positions;
	[FieldOffset(0)]
	public FixedList512Bytes<float3> Positions;
}
