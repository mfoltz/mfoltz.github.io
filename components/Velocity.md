---
nav_exclude: true
search_exclude: true
---

# Velocity

```csharp
public struct Velocity
{
	static Velocity()
	{
		Il2CppClassPointerStore<Velocity>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Velocity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Velocity>.NativeClassPtr);
		Velocity.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Velocity>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Velocity>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float3 Value;
}
```
