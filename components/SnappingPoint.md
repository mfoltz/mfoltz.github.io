# SnappingPoint

```csharp
[StructLayout(2)]
public struct SnappingPoint
{
	static SnappingPoint()
	{
		Il2CppClassPointerStore<SnappingPoint>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Tiles", "SnappingPoint");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SnappingPoint>.NativeClassPtr);
		SnappingPoint.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SnappingPoint>.NativeClassPtr, "Data");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SnappingPoint>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;
	[FieldOffset(0)]
	public BlobAssetReference<SnappingPointBlob> Data;
}
