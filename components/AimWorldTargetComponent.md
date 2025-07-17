---
nav_exclude: true
search_exclude: true
---

# AimWorldTargetComponent

```csharp
[StructLayout(2)]
public struct AimWorldTargetComponent
{
	static AimWorldTargetComponent()
	{
		Il2CppClassPointerStore<AimWorldTargetComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "AimWorldTargetComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimWorldTargetComponent>.NativeClassPtr);
		AimWorldTargetComponent.NativeFieldInfoPtr_Sequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimWorldTargetComponent>.NativeClassPtr, "Sequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimWorldTargetComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Sequence;
	[FieldOffset(0)]
	public SequenceGUID Sequence;
}
