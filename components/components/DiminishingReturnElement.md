---
nav_exclude: true
search_exclude: true
---

# DiminishingReturnElement

```csharp
[Serializable]
[StructLayout(2)]
public struct DiminishingReturnElement
{
	static DiminishingReturnElement()
	{
		Il2CppClassPointerStore<DiminishingReturnElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DiminishingReturnElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DiminishingReturnElement>.NativeClassPtr);
		DiminishingReturnElement.NativeFieldInfoPtr_DurationFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DiminishingReturnElement>.NativeClassPtr, "DurationFactor");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DiminishingReturnElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DurationFactor;
	[FieldOffset(0)]
	public float DurationFactor;
}
