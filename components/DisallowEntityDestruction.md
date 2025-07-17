---
nav_exclude: true
search_exclude: true
---

# DisallowEntityDestruction

```csharp
[StructLayout(2)]
public struct DisallowEntityDestruction
{
	static DisallowEntityDestruction()
	{
		Il2CppClassPointerStore<DisallowEntityDestruction>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "DisallowEntityDestruction");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DisallowEntityDestruction>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DisallowEntityDestruction>.NativeClassPtr, ref this));
	}
}
