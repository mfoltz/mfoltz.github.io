# RoofRootBlobElement

```csharp
[StructLayout(2)]
public struct RoofRootBlobElement
{
	static RoofRootBlobElement()
	{
		Il2CppClassPointerStore<RoofRootBlobElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Roofs", "RoofRootBlobElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RoofRootBlobElement>.NativeClassPtr);
		RoofRootBlobElement.NativeFieldInfoPtr_VariationStart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoofRootBlobElement>.NativeClassPtr, "VariationStart");
		RoofRootBlobElement.NativeFieldInfoPtr_VariationCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoofRootBlobElement>.NativeClassPtr, "VariationCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RoofRootBlobElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VariationStart;
	private static readonly IntPtr NativeFieldInfoPtr_VariationCount;
	[FieldOffset(0)]
	public int VariationStart;
	[FieldOffset(4)]
	public int VariationCount;
}
