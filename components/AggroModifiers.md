---
nav_exclude: true
search_exclude: false
---

# AggroModifiers

```csharp
public struct AggroModifiers
{
	static AggroModifiers()
	{
		Il2CppClassPointerStore<AggroModifiers>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AggroModifiers");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AggroModifiers>.NativeClassPtr);
		AggroModifiers.NativeFieldInfoPtr_ConeRadiusFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroModifiers>.NativeClassPtr, "ConeRadiusFactor");
		AggroModifiers.NativeFieldInfoPtr_CircleRadiusFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroModifiers>.NativeClassPtr, "CircleRadiusFactor");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AggroModifiers>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ConeRadiusFactor;
	private static readonly IntPtr NativeFieldInfoPtr_CircleRadiusFactor;

	public ModifiableFloat ConeRadiusFactor;

	public ModifiableFloat CircleRadiusFactor;
}
```
