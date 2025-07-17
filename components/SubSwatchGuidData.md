---
nav_exclude: true
search_exclude: true
---

# SubSwatchGuidData

```csharp
public struct SubSwatchGuidData
{
	static SubSwatchGuidData()
	{
		Il2CppClassPointerStore<SubSwatchGuidData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "", "SubSwatchGuidData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SubSwatchGuidData>.NativeClassPtr);
		SubSwatchGuidData.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SubSwatchGuidData>.NativeClassPtr, "Blob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SubSwatchGuidData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Blob;

	public BlobAssetReference<SubSwatchAssetGuidBlob> Blob;
}
```
