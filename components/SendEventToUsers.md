# SendEventToUsers

```csharp
[StructLayout(2)]
public struct SendEventToUsers
{
	static SendEventToUsers()
	{
		Il2CppClassPointerStore<SendEventToUsers>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "SendEventToUsers");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SendEventToUsers>.NativeClassPtr);
		SendEventToUsers.NativeFieldInfoPtr_Users = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SendEventToUsers>.NativeClassPtr, "Users");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SendEventToUsers>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Users;
	[FieldOffset(0)]
	public UserBitMask128 Users;
}
