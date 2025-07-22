---
nav_exclude: true
search_exclude: true
---

# TeamAllies

```csharp
public struct TeamAllies
{
	static TeamAllies()
	{
		Il2CppClassPointerStore<TeamAllies>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TeamAllies");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TeamAllies>.NativeClassPtr);
		TeamAllies.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeamAllies>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TeamAllies>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public Entity Value;
}
```
