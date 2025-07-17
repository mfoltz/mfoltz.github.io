---
nav_exclude: true
search_exclude: true
---

# LightningStormType

```csharp
[StructLayout(2)]
public struct LightningStormType
{
	static LightningStormType()
	{
		Il2CppClassPointerStore<LightningStormType>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.LightningStorm", "LightningStormType");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LightningStormType>.NativeClassPtr);
		LightningStormType.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningStormType>.NativeClassPtr, "Data");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LightningStormType>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;
	[FieldOffset(0)]
	public BlobAssetReference<LightningStormTypeBlob> Data;
}
