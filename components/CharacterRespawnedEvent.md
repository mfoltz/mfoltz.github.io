---
nav_exclude: true
search_exclude: true
---

# CharacterRespawnedEvent

```csharp
[StructLayout(2)]
public struct CharacterRespawnedEvent
{
	static CharacterRespawnedEvent()
	{
		Il2CppClassPointerStore<CharacterRespawnedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CharacterRespawnedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CharacterRespawnedEvent>.NativeClassPtr);
		CharacterRespawnedEvent.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterRespawnedEvent>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CharacterRespawnedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public Entity Entity;
}
