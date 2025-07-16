# ServantTypeData

```csharp
[StructLayout(2)]
public struct ServantTypeData
{
	static ServantTypeData()
	{
		Il2CppClassPointerStore<ServantTypeData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServantTypeData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantTypeData>.NativeClassPtr);
		ServantTypeData.NativeFieldInfoPtr_ServantType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantTypeData>.NativeClassPtr, "ServantType");
		ServantTypeData.NativeFieldInfoPtr_GenderType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantTypeData>.NativeClassPtr, "GenderType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantTypeData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ServantType;
	private static readonly IntPtr NativeFieldInfoPtr_GenderType;
	[FieldOffset(0)]
	public ServantType ServantType;
	[FieldOffset(4)]
	public GenderType GenderType;
}
