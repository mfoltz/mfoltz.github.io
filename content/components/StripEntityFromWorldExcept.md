---
nav_exclude: true
search_exclude: true
---

```csharp
public struct StripEntityFromWorldExcept
{
	static StripEntityFromWorldExcept()
	{
		Il2CppClassPointerStore<StripEntityFromWorldExcept>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "StripEntityFromWorldExcept");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StripEntityFromWorldExcept>.NativeClassPtr);
		StripEntityFromWorldExcept.NativeFieldInfoPtr_WorldType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StripEntityFromWorldExcept>.NativeClassPtr, "WorldType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StripEntityFromWorldExcept>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WorldType;

	public WorldType WorldType;
}
```
