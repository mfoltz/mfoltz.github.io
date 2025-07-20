---
nav_exclude: true
search_exclude: true
---

# RepairAbility

```csharp
public struct RepairAbility
{
	static RepairAbility()
	{
		Il2CppClassPointerStore<RepairAbility>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RepairAbility");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RepairAbility>.NativeClassPtr);
		RepairAbility.NativeFieldInfoPtr_RepairTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RepairAbility>.NativeClassPtr, "RepairTarget");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RepairAbility>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RepairTarget;

	public Entity RepairTarget;
}
```
