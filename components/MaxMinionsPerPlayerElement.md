---
nav_exclude: true
search_exclude: true
---

# MaxMinionsPerPlayerElement

```csharp
[StructLayout(2)]
public struct MaxMinionsPerPlayerElement
{
	static MaxMinionsPerPlayerElement()
	{
		Il2CppClassPointerStore<MaxMinionsPerPlayerElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MaxMinionsPerPlayerElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MaxMinionsPerPlayerElement>.NativeClassPtr);
		MaxMinionsPerPlayerElement.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MaxMinionsPerPlayerElement>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MaxMinionsPerPlayerElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public int Value;
}
