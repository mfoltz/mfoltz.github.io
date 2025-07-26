---
nav_exclude: true
search_exclude: true
---

# ProfessorCoilElement

```csharp
public struct ProfessorCoilElement
{
	static ProfessorCoilElement()
	{
		Il2CppClassPointerStore<ProfessorCoilElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ProfessorCoilElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProfessorCoilElement>.NativeClassPtr);
		ProfessorCoilElement.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilElement>.NativeClassPtr, "Position");
		ProfessorCoilElement.NativeFieldInfoPtr_Index = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilElement>.NativeClassPtr, "Index");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProfessorCoilElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Index;

	public float3 Position;

	public int Index;
}
```
