---
nav_exclude: true
search_exclude: true
---

# DropFromTablesOnGameplayEvent

```csharp
public struct DropFromTablesOnGameplayEvent
{
	static DropFromTablesOnGameplayEvent()
	{
		Il2CppClassPointerStore<DropFromTablesOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DropFromTablesOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DropFromTablesOnGameplayEvent>.NativeClassPtr);
		DropFromTablesOnGameplayEvent.NativeFieldInfoPtr_DropTrigger = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropFromTablesOnGameplayEvent>.NativeClassPtr, "DropTrigger");
		DropFromTablesOnGameplayEvent.NativeFieldInfoPtr_DropAt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropFromTablesOnGameplayEvent>.NativeClassPtr, "DropAt");
		DropFromTablesOnGameplayEvent.NativeFieldInfoPtr_IgnoreDropModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropFromTablesOnGameplayEvent>.NativeClassPtr, "IgnoreDropModifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DropFromTablesOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DropTrigger;
	private static readonly IntPtr NativeFieldInfoPtr_DropAt;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreDropModifier;

	public DropTriggerType DropTrigger;

	public DropAtLocation DropAt;

	public bool IgnoreDropModifier;
}
```
