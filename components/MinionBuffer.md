---
nav_exclude: true
search_exclude: true
---

# MinionBuffer

```csharp
public struct MinionBuffer
{
	static MinionBuffer()
	{
		Il2CppClassPointerStore<MinionBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MinionBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MinionBuffer>.NativeClassPtr);
		MinionBuffer.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MinionBuffer>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MinionBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;

	public Entity Entity;
}
```
