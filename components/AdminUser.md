# AdminUser

```csharp
[StructLayout(2)]
public struct AdminUser
{
	static AdminUser()
	{
		Il2CppClassPointerStore<AdminUser>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AdminUser");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AdminUser>.NativeClassPtr);
		AdminUser.NativeFieldInfoPtr_AuthMethod = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdminUser>.NativeClassPtr, "AuthMethod");
		AdminUser.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdminUser>.NativeClassPtr, "Level");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AdminUser>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AuthMethod;
	private static readonly IntPtr NativeFieldInfoPtr_Level;
	[FieldOffset(0)]
	public AdminAuthMethod AuthMethod;
	[FieldOffset(4)]
	public AdminLevel Level;
}
