---
nav_exclude: true
search_exclude: true
---

# Emoter

```csharp
[StructLayout(2)]
public struct Emoter
{
	static Emoter()
	{
		Il2CppClassPointerStore<Emoter>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Emoter");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Emoter>.NativeClassPtr);
		Emoter.NativeFieldInfoPtr_IsEmoting = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Emoter>.NativeClassPtr, "IsEmoting");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Emoter>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IsEmoting;
	[FieldOffset(0)]
	public ModifiableBool IsEmoting;
}
