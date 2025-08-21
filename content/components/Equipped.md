---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Equipped
{
	static Equipped()
	{
		Il2CppClassPointerStore<Equipped>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Equipped");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Equipped>.NativeClassPtr);
		Equipped.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipped>.NativeClassPtr, "Target");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Equipped>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;

	public Entity Target;
}
```
