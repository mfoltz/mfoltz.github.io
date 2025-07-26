# BlendWeightBufferIndex

```csharp
[StructLayout(2)]
public struct BlendWeightBufferIndex
{
	static BlendWeightBufferIndex()
	{
		Il2CppClassPointerStore<BlendWeightBufferIndex>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "BlendWeightBufferIndex");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BlendWeightBufferIndex>.NativeClassPtr);
		BlendWeightBufferIndex.NativeFieldInfoPtr_Null = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlendWeightBufferIndex>.NativeClassPtr, "Null");
		BlendWeightBufferIndex.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlendWeightBufferIndex>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BlendWeightBufferIndex>.NativeClassPtr, ref this));
	}
	public unsafe static int Null
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(BlendWeightBufferIndex.NativeFieldInfoPtr_Null, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(BlendWeightBufferIndex.NativeFieldInfoPtr_Null, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_Null;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public int Value;
}
