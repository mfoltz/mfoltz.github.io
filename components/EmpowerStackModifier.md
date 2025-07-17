---
nav_exclude: true
search_exclude: true
---

# EmpowerStackModifier

```csharp
[StructLayout(2)]
public struct EmpowerStackModifier
{
	static EmpowerStackModifier()
	{
		Il2CppClassPointerStore<EmpowerStackModifier>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EmpowerStackModifier");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EmpowerStackModifier>.NativeClassPtr);
		EmpowerStackModifier.NativeFieldInfoPtr_BaseValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EmpowerStackModifier>.NativeClassPtr, "BaseValue");
		EmpowerStackModifier.NativeFieldInfoPtr_PerStackValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EmpowerStackModifier>.NativeClassPtr, "PerStackValue");
		EmpowerStackModifier.NativeFieldInfoPtr_Modifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EmpowerStackModifier>.NativeClassPtr, "Modifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EmpowerStackModifier>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BaseValue;
	private static readonly IntPtr NativeFieldInfoPtr_PerStackValue;
	private static readonly IntPtr NativeFieldInfoPtr_Modifier;
	[FieldOffset(0)]
	public float BaseValue;
	[FieldOffset(4)]
	public float PerStackValue;
	[FieldOffset(8)]
	public float Modifier;
}
