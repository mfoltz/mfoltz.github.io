---
nav_exclude: true
search_exclude: true
---

# CurrentGender

```csharp
[StructLayout(2)]
public struct CurrentGender
{
	static CurrentGender()
	{
		Il2CppClassPointerStore<CurrentGender>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CurrentGender");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CurrentGender>.NativeClassPtr);
		CurrentGender.NativeFieldInfoPtr_GenderIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CurrentGender>.NativeClassPtr, "GenderIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CurrentGender>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GenderIndex;
	[FieldOffset(0)]
	public byte GenderIndex;
}
