# Height

```csharp
[StructLayout(2)]
public struct Height
{
	static Height()
	{
		Il2CppClassPointerStore<Height>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Height");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Height>.NativeClassPtr);
		Height.NativeFieldInfoPtr_LastPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Height>.NativeClassPtr, "LastPosition");
		Height.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Height>.NativeClassPtr, "Value");
		Height.NativeFieldInfoPtr_ServerHeightLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Height>.NativeClassPtr, "ServerHeightLevel");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Height>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastPosition;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_ServerHeightLevel;
	[FieldOffset(0)]
	public float3 LastPosition;
	[FieldOffset(12)]
	public float Value;
	[FieldOffset(16)]
	public byte ServerHeightLevel;
}
