---
nav_exclude: true
search_exclude: true
---

# Pull_BuffTarget

```csharp
[StructLayout(2)]
public struct Pull_BuffTarget
{
	static Pull_BuffTarget()
	{
		Il2CppClassPointerStore<Pull_BuffTarget>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer", "Pull_BuffTarget");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Pull_BuffTarget>.NativeClassPtr);
		Pull_BuffTarget.NativeFieldInfoPtr_FromEntityRegister = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Pull_BuffTarget>.NativeClassPtr, "FromEntityRegister");
		Pull_BuffTarget.NativeFieldInfoPtr_ToEntityRegister = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Pull_BuffTarget>.NativeClassPtr, "ToEntityRegister");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Pull_BuffTarget>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FromEntityRegister;
	private static readonly IntPtr NativeFieldInfoPtr_ToEntityRegister;
	[FieldOffset(0)]
	public int FromEntityRegister;
	[FieldOffset(4)]
	public int ToEntityRegister;
}
