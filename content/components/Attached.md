---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Attached
{
	static Attached()
	{
		Il2CppClassPointerStore<Attached>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Attached");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Attached>.NativeClassPtr);
		Attached.NativeFieldInfoPtr_Parent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Attached>.NativeClassPtr, "Parent");
		Attached.NativeFieldInfoPtr_AttachParentIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Attached>.NativeClassPtr, "AttachParentIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Attached>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Parent;
	private static readonly IntPtr NativeFieldInfoPtr_AttachParentIndex;

	public Entity Parent;

	public int AttachParentIndex;
}
```

## Server Systems

- [AttachSystemBase]({{% relref "systems/server/AttachSystemBase.md" %}})
- [AttachSystem_ReactToPersistenceLoad]({{% relref "systems/server/AttachSystem_ReactToPersistenceLoad.md" %}})
- [AttachSystem_Spawn]({{% relref "systems/server/AttachSystem_Spawn.md" %}})
- [DetachSystem]({{% relref "systems/server/DetachSystem.md" %}})

## Client Systems

- [AttachSystemBase]({{% relref "systems/client/AttachSystemBase.md" %}})
- [AttachSystem_Spawn]({{% relref "systems/client/AttachSystem_Spawn.md" %}})
- [DebugAttachSystem]({{% relref "systems/client/DebugAttachSystem.md" %}})
- [DetachSystem]({{% relref "systems/client/DetachSystem.md" %}})
- [VisibilitySystem_CopyStateFromBuffTarget]({{% relref "systems/client/VisibilitySystem_CopyStateFromBuffTarget.md" %}})
