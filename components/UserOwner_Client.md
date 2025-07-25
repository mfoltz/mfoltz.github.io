---
nav_exclude: true
search_exclude: true
---

# UserOwner_Client

```csharp
public struct UserOwner_Client
{
	static UserOwner_Client()
	{
		Il2CppClassPointerStore<UserOwner_Client>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UserOwner_Client");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UserOwner_Client>.NativeClassPtr);
		UserOwner_Client.NativeFieldInfoPtr_SyncedHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserOwner_Client>.NativeClassPtr, "SyncedHash");
		UserOwner_Client.NativeFieldInfoPtr_OwnerId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserOwner_Client>.NativeClassPtr, "OwnerId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UserOwner_Client>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SyncedHash;
	private static readonly IntPtr NativeFieldInfoPtr_OwnerId;

	public int SyncedHash;

	public NetworkId OwnerId;
}
```
