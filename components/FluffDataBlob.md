---
nav_exclude: true
search_exclude: true
---

# FluffDataBlob

```csharp
public struct FluffDataBlob
{
	static FluffDataBlob()
	{
		Il2CppClassPointerStore<FluffDataBlob>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "FluffDataBlob");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FluffDataBlob>.NativeClassPtr);
		FluffDataBlob.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FluffDataBlob>.NativeClassPtr, "Data");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FluffDataBlob>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;

	public BlobAssetReference<FluffDataArray> Data;
}
```
