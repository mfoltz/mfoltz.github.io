# StampTextureBuffer

```csharp
[StructLayout(2)]
public struct StampTextureBuffer
{
	static StampTextureBuffer()
	{
		Il2CppClassPointerStore<StampTextureBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "StampTextureBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StampTextureBuffer>.NativeClassPtr);
		StampTextureBuffer.NativeFieldInfoPtr_Strength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StampTextureBuffer>.NativeClassPtr, "Strength");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StampTextureBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Strength;
	[FieldOffset(0)]
	public byte Strength;
}
