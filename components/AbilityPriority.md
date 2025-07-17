---
nav_exclude: true
search_exclude: true
---

# AbilityPriority

```csharp
[StructLayout(2)]
public struct AbilityPriority
{
	static AbilityPriority()
	{
		Il2CppClassPointerStore<AbilityPriority>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbilityPriority");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityPriority>.NativeClassPtr);
		AbilityPriority.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPriority>.NativeClassPtr, "Priority");
		AbilityPriority.NativeFieldInfoPtr_InterruptLowerPriority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPriority>.NativeClassPtr, "InterruptLowerPriority");
		AbilityPriority.NativeFieldInfoPtr_InterruptHigherPriority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityPriority>.NativeClassPtr, "InterruptHigherPriority");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityPriority>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Priority;
	private static readonly IntPtr NativeFieldInfoPtr_InterruptLowerPriority;
	private static readonly IntPtr NativeFieldInfoPtr_InterruptHigherPriority;
	[FieldOffset(0)]
	public int Priority;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool InterruptLowerPriority;
	[FieldOffset(5)]
	[MarshalAs(4)]
	public bool InterruptHigherPriority;
}
