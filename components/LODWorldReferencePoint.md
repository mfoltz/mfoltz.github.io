# LODWorldReferencePoint

```csharp
[StructLayout(2)]
public struct LODWorldReferencePoint
{
	static LODWorldReferencePoint()
	{
		Il2CppClassPointerStore<LODWorldReferencePoint>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "LODWorldReferencePoint");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LODWorldReferencePoint>.NativeClassPtr);
		LODWorldReferencePoint.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LODWorldReferencePoint>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LODWorldReferencePoint>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float3 Value;
}
