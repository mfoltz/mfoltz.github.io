---
nav_exclude: true
search_exclude: true
---

```csharp
public struct UserDestroyedEntityBuffer
{
	static UserDestroyedEntityBuffer()
	{
		Il2CppClassPointerStore<UserDestroyedEntityBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "UserDestroyedEntityBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UserDestroyedEntityBuffer>.NativeClassPtr);
		UserDestroyedEntityBuffer.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserDestroyedEntityBuffer>.NativeClassPtr, "Entity");
		UserDestroyedEntityBuffer.NativeFieldInfoPtr_NetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserDestroyedEntityBuffer>.NativeClassPtr, "NetworkId");
		UserDestroyedEntityBuffer.NativeFieldInfoPtr_FrameDestroyed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserDestroyedEntityBuffer>.NativeClassPtr, "FrameDestroyed");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UserDestroyedEntityBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_FrameDestroyed;

	public Entity Entity;

	public NetworkId NetworkId;

	public int FrameDestroyed;
}
```
