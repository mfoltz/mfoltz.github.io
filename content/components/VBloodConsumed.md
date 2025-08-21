---
nav_exclude: true
search_exclude: true
---

```csharp
public struct VBloodConsumed
{
	static VBloodConsumed()
	{
		Il2CppClassPointerStore<VBloodConsumed>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Systems.dll", "ProjectM", "VBloodConsumed");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VBloodConsumed>.NativeClassPtr);
		VBloodConsumed.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodConsumed>.NativeClassPtr, "Source");
		VBloodConsumed.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodConsumed>.NativeClassPtr, "Target");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VBloodConsumed>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_Target;

	public PrefabGUID Source;

	public Entity Target;
}
```
