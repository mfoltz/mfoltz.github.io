---
nav_exclude: true
search_exclude: true
---

# Explosive

```csharp
[StructLayout(2)]
public struct Explosive
{
	static Explosive()
	{
		Il2CppClassPointerStore<Explosive>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Explosive");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Explosive>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Explosive>.NativeClassPtr, ref this));
	}
}
