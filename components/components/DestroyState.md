---
nav_exclude: true
search_exclude: true
---

# DestroyState

```csharp
[StructLayout(2)]
public struct DestroyState
{
	static DestroyState()
	{
		Il2CppClassPointerStore<DestroyState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DestroyState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyState>.NativeClassPtr);
		DestroyState.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyState>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public DestroyStateEnum Value;
}
