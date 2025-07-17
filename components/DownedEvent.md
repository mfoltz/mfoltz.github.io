---
nav_exclude: true
search_exclude: true
---

# DownedEvent

```csharp
[StructLayout(2)]
public struct DownedEvent
{
	static DownedEvent()
	{
		Il2CppClassPointerStore<DownedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DownedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DownedEvent>.NativeClassPtr);
		DownedEvent.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DownedEvent>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DownedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public Entity Entity;
}
