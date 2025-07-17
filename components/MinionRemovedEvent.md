---
nav_exclude: true
search_exclude: true
---

# MinionRemovedEvent

```csharp
[StructLayout(2)]
public struct MinionRemovedEvent
{
	static MinionRemovedEvent()
	{
		Il2CppClassPointerStore<MinionRemovedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MinionRemovedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MinionRemovedEvent>.NativeClassPtr);
		MinionRemovedEvent.NativeFieldInfoPtr_MasterEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MinionRemovedEvent>.NativeClassPtr, "MasterEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MinionRemovedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MasterEntity;
	[FieldOffset(0)]
	public Entity MasterEntity;
}
