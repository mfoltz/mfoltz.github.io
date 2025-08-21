---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Attach
{
	static Attach()
	{
		Il2CppClassPointerStore<Attach>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Attach");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Attach>.NativeClassPtr);
		Attach.NativeFieldInfoPtr_Parent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Attach>.NativeClassPtr, "Parent");
		Attach.NativeMethodInfoPtr__ctor_Public_Void_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Attach>.NativeClassPtr, 100664083);
	}

	public unsafe Attach(Entity parent)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref parent;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Attach.NativeMethodInfoPtr__ctor_Public_Void_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Attach>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Parent;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Entity_0;

	public readonly Entity Parent;
}
```

## Server Systems

- [AbilitySpawnSystem]({{% relref "systems/server/AbilitySpawnSystem.md" %}})
- [AttachSystemBase]({{% relref "systems/server/AttachSystemBase.md" %}})
- [AttachSystem_ReactToPersistenceLoad]({{% relref "systems/server/AttachSystem_ReactToPersistenceLoad.md" %}})
- [AttachSystem_Spawn]({{% relref "systems/server/AttachSystem_Spawn.md" %}})
- [DetachSystem]({{% relref "systems/server/DetachSystem.md" %}})

## Client Systems

- [AttachSystemBase]({{% relref "systems/client/AttachSystemBase.md" %}})
- [AttachSystem_Spawn]({{% relref "systems/client/AttachSystem_Spawn.md" %}})
- [DetachSystem]({{% relref "systems/client/DetachSystem.md" %}})
