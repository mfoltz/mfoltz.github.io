---
nav_exclude: true
search_exclude: true
---

```csharp
public struct MicroPOIConfig
{
	static MicroPOIConfig()
	{
		Il2CppClassPointerStore<MicroPOIConfig>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MicroPOIConfig");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MicroPOIConfig>.NativeClassPtr);
		MicroPOIConfig.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MicroPOIConfig>.NativeClassPtr, "Blob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MicroPOIConfig>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Blob;

	public BlobAssetReference<MicroPOIBlob> Blob;
}
```
