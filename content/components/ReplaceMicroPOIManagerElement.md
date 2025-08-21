---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ReplaceMicroPOIManagerElement
{
	static ReplaceMicroPOIManagerElement()
	{
		Il2CppClassPointerStore<ReplaceMicroPOIManagerElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ReplaceMicroPOIManagerElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ReplaceMicroPOIManagerElement>.NativeClassPtr);
		ReplaceMicroPOIManagerElement.NativeFieldInfoPtr_OriginalMicroPOIManager = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceMicroPOIManagerElement>.NativeClassPtr, "OriginalMicroPOIManager");
		ReplaceMicroPOIManagerElement.NativeFieldInfoPtr_ReplacedMicroPOIManager = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceMicroPOIManagerElement>.NativeClassPtr, "ReplacedMicroPOIManager");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ReplaceMicroPOIManagerElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OriginalMicroPOIManager;
	private static readonly IntPtr NativeFieldInfoPtr_ReplacedMicroPOIManager;

	public PrefabGUID OriginalMicroPOIManager;

	public PrefabGUID ReplacedMicroPOIManager;
}
```
