---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TransmogData
{
	static TransmogData()
	{
		Il2CppClassPointerStore<TransmogData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Transmog", "TransmogData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TransmogData>.NativeClassPtr);
		TransmogData.NativeFieldInfoPtr_ActiveTransmogIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransmogData>.NativeClassPtr, "ActiveTransmogIndex");
		TransmogData.NativeFieldInfoPtr_NumColorOptions = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransmogData>.NativeClassPtr, "NumColorOptions");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TransmogData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ActiveTransmogIndex;
	private static readonly IntPtr NativeFieldInfoPtr_NumColorOptions;

	public byte ActiveTransmogIndex;

	public byte NumColorOptions;
}
```
