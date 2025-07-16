# CameraUser

```csharp
[StructLayout(2)]
public struct CameraUser
{
	static CameraUser()
	{
		Il2CppClassPointerStore<CameraUser>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CameraUser");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CameraUser>.NativeClassPtr);
		CameraUser.NativeFieldInfoPtr_CameraEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CameraUser>.NativeClassPtr, "CameraEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CameraUser>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CameraEntity;
	[FieldOffset(0)]
	public Entity CameraEntity;
}
