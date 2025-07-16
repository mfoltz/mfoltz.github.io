# DeformedMeshIndex

```csharp
[StructLayout(2)]
public struct DeformedMeshIndex
{
	static DeformedMeshIndex()
	{
		Il2CppClassPointerStore<DeformedMeshIndex>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "DeformedMeshIndex");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DeformedMeshIndex>.NativeClassPtr);
		DeformedMeshIndex.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeformedMeshIndex>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DeformedMeshIndex>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public uint4 Value;
}
