---
nav_exclude: true
search_exclude: true
---

# RespawnPointOwner

```csharp
public struct RespawnPointOwner
{
	static RespawnPointOwner()
	{
		Il2CppClassPointerStore<RespawnPointOwner>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RespawnPointOwner");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RespawnPointOwner>.NativeClassPtr);
		RespawnPointOwner.NativeFieldInfoPtr_RespawnPoint = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnPointOwner>.NativeClassPtr, "RespawnPoint");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RespawnPointOwner>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RespawnPoint;

	public NetworkedEntity RespawnPoint;
}
```
