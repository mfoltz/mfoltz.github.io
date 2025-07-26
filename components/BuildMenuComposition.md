# BuildMenuComposition

```csharp
[StructLayout(2)]
public struct BuildMenuComposition
{
	static BuildMenuComposition()
	{
		Il2CppClassPointerStore<BuildMenuComposition>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.UI", "BuildMenuComposition");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuildMenuComposition>.NativeClassPtr);
		BuildMenuComposition.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildMenuComposition>.NativeClassPtr, "Blob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuildMenuComposition>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Blob;
	[FieldOffset(0)]
	public BlobAssetReference<BuildMenuCompositionBlob> Blob;
}
