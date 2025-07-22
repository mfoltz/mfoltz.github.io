---
nav_exclude: true
search_exclude: false
---

# DestroyTagEvent

```csharp
public struct DestroyTagEvent
{
	static DestroyTagEvent()
	{
		Il2CppClassPointerStore<DestroyTagEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DestroyTagEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyTagEvent>.NativeClassPtr);
		DestroyTagEvent.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyTagEvent>.NativeClassPtr, "Entity");
		DestroyTagEvent.NativeFieldInfoPtr_DestroyReason = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyTagEvent>.NativeClassPtr, "DestroyReason");
		DestroyTagEvent.NativeFieldInfoPtr_DestroyDebugReason = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyTagEvent>.NativeClassPtr, "DestroyDebugReason");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyTagEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyReason;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyDebugReason;

	public Entity Entity;

	public DestroyReason DestroyReason;

	public DestroyDebugReason DestroyDebugReason;
}
```

## Server Systems

- [RecursiveGroup](/systems/server/RecursiveGroup)

## Client Systems

- [RecursiveGroup](/systems/client/RecursiveGroup)
