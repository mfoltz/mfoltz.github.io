# CastHistoryData

```csharp
[StructLayout(2)]
public struct CastHistoryData
{
	static CastHistoryData()
	{
		Il2CppClassPointerStore<CastHistoryData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CastHistoryData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastHistoryData>.NativeClassPtr);
		CastHistoryData.NativeFieldInfoPtr_StorageTimeSeconds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastHistoryData>.NativeClassPtr, "StorageTimeSeconds");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastHistoryData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StorageTimeSeconds;
	[FieldOffset(0)]
	public float StorageTimeSeconds;
}
