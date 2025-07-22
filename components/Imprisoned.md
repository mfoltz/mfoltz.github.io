---
nav_exclude: true
search_exclude: false
---

# Imprisoned

```csharp
public struct Imprisoned
{
	static Imprisoned()
	{
		Il2CppClassPointerStore<Imprisoned>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Imprisoned");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Imprisoned>.NativeClassPtr);
		Imprisoned.NativeFieldInfoPtr_PrisonCellEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Imprisoned>.NativeClassPtr, "PrisonCellEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Imprisoned>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrisonCellEntity;

	public Entity PrisonCellEntity;
}
```
