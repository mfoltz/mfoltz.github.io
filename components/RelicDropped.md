---
nav_exclude: true
search_exclude: true
---

# RelicDropped

```csharp
[StructLayout(2)]
public struct RelicDropped
{
	static RelicDropped()
	{
		Il2CppClassPointerStore<RelicDropped>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "RelicDropped");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RelicDropped>.NativeClassPtr);
		RelicDropped.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RelicDropped>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RelicDropped>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool Value;
}
