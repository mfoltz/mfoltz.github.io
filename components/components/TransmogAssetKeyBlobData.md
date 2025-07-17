---
nav_exclude: true
search_exclude: true
---

# TransmogAssetKeyBlobData

```csharp
[StructLayout(2)]
public struct TransmogAssetKeyBlobData
{
	static TransmogAssetKeyBlobData()
	{
		Il2CppClassPointerStore<TransmogAssetKeyBlobData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Transmog", "TransmogAssetKeyBlobData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TransmogAssetKeyBlobData>.NativeClassPtr);
		TransmogAssetKeyBlobData.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransmogAssetKeyBlobData>.NativeClassPtr, "Blob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TransmogAssetKeyBlobData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Blob;
	[FieldOffset(0)]
	public BlobAssetReference<TransmogAssetKeyBlob> Blob;
}
