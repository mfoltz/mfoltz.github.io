---
nav_exclude: true
search_exclude: true
---

# ResourceNodeDestroyEvent

```csharp
[StructLayout(2)]
public struct ResourceNodeDestroyEvent
{
	static ResourceNodeDestroyEvent()
	{
		Il2CppClassPointerStore<ResourceNodeDestroyEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "ResourceNodeDestroyEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ResourceNodeDestroyEvent>.NativeClassPtr);
		ResourceNodeDestroyEvent.NativeFieldInfoPtr_Player = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResourceNodeDestroyEvent>.NativeClassPtr, "Player");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ResourceNodeDestroyEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Player;
	[FieldOffset(0)]
	public Entity Player;
}
