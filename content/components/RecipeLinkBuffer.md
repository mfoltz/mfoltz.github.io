---
nav_exclude: true
search_exclude: true
---

```csharp
public struct RecipeLinkBuffer
{
	static RecipeLinkBuffer()
	{
		Il2CppClassPointerStore<RecipeLinkBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RecipeLinkBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RecipeLinkBuffer>.NativeClassPtr);
		RecipeLinkBuffer.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecipeLinkBuffer>.NativeClassPtr, "Guid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RecipeLinkBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Guid;

	public PrefabGUID Guid;
}
```
