---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SyncToUserBuffer
{
	static SyncToUserBuffer()
	{
		Il2CppClassPointerStore<SyncToUserBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "SyncToUserBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SyncToUserBuffer>.NativeClassPtr);
		SyncToUserBuffer.NativeFieldInfoPtr_UserEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncToUserBuffer>.NativeClassPtr, "UserEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SyncToUserBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UserEntity;

	public Entity UserEntity;
}
```

## Server Systems

- [AbilitySpawnSystem]({{% relref "systems/server/AbilitySpawnSystem.md" %}})
- [CastleHeartSharedInventorySystem]({{% relref "systems/server/CastleHeartSharedInventorySystem.md" %}})
- [SyncToUserBitMaskSystem_OnPersistenceLoad]({{% relref "systems/server/SyncToUserBitMaskSystem_OnPersistenceLoad.md" %}})
