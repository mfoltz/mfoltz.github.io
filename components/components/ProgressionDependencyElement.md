---
nav_exclude: true
search_exclude: true
---

# ProgressionDependencyElement

```csharp
[StructLayout(2)]
public struct ProgressionDependencyElement
{
	static ProgressionDependencyElement()
	{
		Il2CppClassPointerStore<ProgressionDependencyElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ProgressionDependencyElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProgressionDependencyElement>.NativeClassPtr);
		ProgressionDependencyElement.NativeFieldInfoPtr_PrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressionDependencyElement>.NativeClassPtr, "PrefabGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProgressionDependencyElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGuid;
	[FieldOffset(0)]
	public PrefabGUID PrefabGuid;
}
