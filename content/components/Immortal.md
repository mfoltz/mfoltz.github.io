---
nav_exclude: true
search_exclude: true
---

# Immortal

```csharp
public struct Immortal
{
	static Immortal()
	{
		Il2CppClassPointerStore<Immortal>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Immortal");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Immortal>.NativeClassPtr);
		Immortal.NativeFieldInfoPtr_IsImmortal = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Immortal>.NativeClassPtr, "IsImmortal");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Immortal>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IsImmortal;

	public bool IsImmortal;
}
```
