---
nav_exclude: true
search_exclude: true
---

# AdaptiveTriggerCollection

```csharp
public struct AdaptiveTriggerCollection
{
	static AdaptiveTriggerCollection()
	{
		Il2CppClassPointerStore<AdaptiveTriggerCollection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Haptics.dll", "ProjectM.Haptics", "AdaptiveTriggerCollection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AdaptiveTriggerCollection>.NativeClassPtr);
		AdaptiveTriggerCollection.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdaptiveTriggerCollection>.NativeClassPtr, "Data");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AdaptiveTriggerCollection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;

	public BlobAssetReference<AdaptiveTriggerBlob> Data;
}
```
