---
nav_exclude: true
search_exclude: true
---

# AiPointOfInterest

```csharp
public struct AiPointOfInterest
{
	static AiPointOfInterest()
	{
		Il2CppClassPointerStore<AiPointOfInterest>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AiPointOfInterest");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AiPointOfInterest>.NativeClassPtr);
		AiPointOfInterest.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiPointOfInterest>.NativeClassPtr, "Type");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AiPointOfInterest>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Type;

	public AiPointOfInterestType Type;
}
```
