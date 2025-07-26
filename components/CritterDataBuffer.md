# CritterDataBuffer

```csharp
[StructLayout(2)]
public struct CritterDataBuffer
{
	static CritterDataBuffer()
	{
		Il2CppClassPointerStore<CritterDataBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CritterDataBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CritterDataBuffer>.NativeClassPtr);
		CritterDataBuffer.NativeFieldInfoPtr_CritterEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterDataBuffer>.NativeClassPtr, "CritterEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CritterDataBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CritterEntity;
	[FieldOffset(0)]
	public Entity CritterEntity;
}
