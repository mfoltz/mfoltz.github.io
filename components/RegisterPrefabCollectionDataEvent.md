---
nav_exclude: true
search_exclude: true
---

# RegisterPrefabCollectionDataEvent

```csharp
public struct RegisterPrefabCollectionDataEvent
{
	static RegisterPrefabCollectionDataEvent()
	{
		Il2CppClassPointerStore<RegisterPrefabCollectionDataEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core", "RegisterPrefabCollectionDataEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RegisterPrefabCollectionDataEvent>.NativeClassPtr);
		RegisterPrefabCollectionDataEvent.NativeFieldInfoPtr_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterPrefabCollectionDataEvent>.NativeClassPtr, "PrefabGUID");
		RegisterPrefabCollectionDataEvent.NativeFieldInfoPtr_ConversionState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterPrefabCollectionDataEvent>.NativeClassPtr, "ConversionState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RegisterPrefabCollectionDataEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_ConversionState;

	public PrefabGUID PrefabGUID;

	public AssetConversionState ConversionState;
}
```
