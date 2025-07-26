---
nav_exclude: true
search_exclude: true
---

# Relic

```csharp
public struct Relic
{
	static Relic()
	{
		Il2CppClassPointerStore<Relic>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "Relic");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Relic>.NativeClassPtr);
		Relic.NativeFieldInfoPtr_RelicType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Relic>.NativeClassPtr, "RelicType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Relic>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RelicType;

	public RelicType RelicType;
}
```
