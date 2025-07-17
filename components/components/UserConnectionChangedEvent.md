---
nav_exclude: true
search_exclude: true
---

# UserConnectionChangedEvent

```csharp
[StructLayout(2)]
public struct UserConnectionChangedEvent
{
	static UserConnectionChangedEvent()
	{
		Il2CppClassPointerStore<UserConnectionChangedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UserConnectionChangedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UserConnectionChangedEvent>.NativeClassPtr);
		UserConnectionChangedEvent.NativeFieldInfoPtr_UserEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserConnectionChangedEvent>.NativeClassPtr, "UserEntity");
		UserConnectionChangedEvent.NativeFieldInfoPtr_ConnectedUser = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserConnectionChangedEvent>.NativeClassPtr, "ConnectedUser");
		UserConnectionChangedEvent.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserConnectionChangedEvent>.NativeClassPtr, "Type");
		UserConnectionChangedEvent.NativeFieldInfoPtr_IsFromPersistenceLoading = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserConnectionChangedEvent>.NativeClassPtr, "IsFromPersistenceLoading");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UserConnectionChangedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UserEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ConnectedUser;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_IsFromPersistenceLoading;
	[FieldOffset(0)]
	public Entity UserEntity;
	[FieldOffset(8)]
	public ConnectedUser ConnectedUser;
	[FieldOffset(12)]
	public UserConnectionChangedType Type;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool IsFromPersistenceLoading;
}
