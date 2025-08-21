---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ProfessorCoil
{
	static ProfessorCoil()
	{
		Il2CppClassPointerStore<ProfessorCoil>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ProfessorCoil");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProfessorCoil>.NativeClassPtr);
		ProfessorCoil.NativeFieldInfoPtr_Index = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoil>.NativeClassPtr, "Index");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProfessorCoil>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Index;

	public int Index;
}
```
