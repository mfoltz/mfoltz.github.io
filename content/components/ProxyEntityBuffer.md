---
nav_exclude: true
search_exclude: true
---

# ProxyEntityBuffer

```csharp
public struct ProxyEntityBuffer
{
	static ProxyEntityBuffer()
	{
		Il2CppClassPointerStore<ProxyEntityBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "ProxyEntityBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProxyEntityBuffer>.NativeClassPtr);
		ProxyEntityBuffer.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProxyEntityBuffer>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProxyEntityBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;

	public Entity Entity;
}
```
