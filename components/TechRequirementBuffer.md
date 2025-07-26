---
nav_exclude: true
search_exclude: true
---

# TechRequirementBuffer

```csharp
public struct TechRequirementBuffer
{
	static TechRequirementBuffer()
	{
		Il2CppClassPointerStore<TechRequirementBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TechRequirementBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TechRequirementBuffer>.NativeClassPtr);
		TechRequirementBuffer.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TechRequirementBuffer>.NativeClassPtr, "Guid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TechRequirementBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Guid;

	public PrefabGUID Guid;
}
```
