---
nav_exclude: true
search_exclude: true
---

# AoETargetImportance

```csharp
[StructLayout(2)]
public struct AoETargetImportance
{
	static AoETargetImportance()
	{
		Il2CppClassPointerStore<AoETargetImportance>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AoETargetImportance");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AoETargetImportance>.NativeClassPtr);
		AoETargetImportance.NativeFieldInfoPtr_Importance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AoETargetImportance>.NativeClassPtr, "Importance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AoETargetImportance>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Importance;
	[FieldOffset(0)]
	public int Importance;
}
