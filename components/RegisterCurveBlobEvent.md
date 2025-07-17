---
nav_exclude: true
search_exclude: true
---

# RegisterCurveBlobEvent

```csharp
[StructLayout(2)]
public struct RegisterCurveBlobEvent
{
	static RegisterCurveBlobEvent()
	{
		Il2CppClassPointerStore<RegisterCurveBlobEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RegisterCurveBlobEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RegisterCurveBlobEvent>.NativeClassPtr);
		RegisterCurveBlobEvent.NativeFieldInfoPtr_CurveGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterCurveBlobEvent>.NativeClassPtr, "CurveGUID");
		RegisterCurveBlobEvent.NativeFieldInfoPtr_CurveBlob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterCurveBlobEvent>.NativeClassPtr, "CurveBlob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RegisterCurveBlobEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CurveGUID;
	private static readonly IntPtr NativeFieldInfoPtr_CurveBlob;
	[FieldOffset(0)]
	public PrefabGUID CurveGUID;
	[FieldOffset(8)]
	public BlobAssetReference<CurveBlobData> CurveBlob;
}
