---
nav_exclude: true
search_exclude: false
---

# UserConnectionChangedEvent

```csharp
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

	public Entity UserEntity;

	public ConnectedUser ConnectedUser;

	public UserConnectionChangedType Type;

	public bool IsFromPersistenceLoading;
}
```

## Server Systems

- [ClanSystem_Server](/systems/server/ClanSystem_Server)
- [PlaceTileModelSystem](/systems/server/PlaceTileModelSystem)
- [SpellModSyncSystem_Server](/systems/server/SpellModSyncSystem_Server)
- [UserConnectionChangedEventSystem](/systems/server/UserConnectionChangedEventSystem)
