---
nav_exclude: true
search_exclude: true
---

# ModifyInventorySizeEvent

```csharp
public struct ModifyInventorySizeEvent
{
	static ModifyInventorySizeEvent()
	{
		Il2CppClassPointerStore<ModifyInventorySizeEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyInventorySizeEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyInventorySizeEvent>.NativeClassPtr);
		ModifyInventorySizeEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyInventorySizeEvent>.NativeClassPtr, "Target");
		ModifyInventorySizeEvent.NativeFieldInfoPtr_SlotDiff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyInventorySizeEvent>.NativeClassPtr, "SlotDiff");
		ModifyInventorySizeEvent.NativeFieldInfoPtr_NewSlotCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyInventorySizeEvent>.NativeClassPtr, "NewSlotCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyInventorySizeEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_SlotDiff;
	private static readonly IntPtr NativeFieldInfoPtr_NewSlotCount;

	public Entity Target;

	public int SlotDiff;

	public int NewSlotCount;
}
```

## Server Systems

- [ModifyInventorySizeEventSystem](/systems/server/ModifyInventorySizeEventSystem)
