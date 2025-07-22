---
nav_exclude: true
search_exclude: false
---

# WeakenBuff

```csharp
public struct WeakenBuff
{
	static WeakenBuff()
	{
		Il2CppClassPointerStore<WeakenBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "WeakenBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WeakenBuff>.NativeClassPtr);
		WeakenBuff.NativeFieldInfoPtr_WeakenModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WeakenBuff>.NativeClassPtr, "WeakenModifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WeakenBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WeakenModifier;

	public float WeakenModifier;
}
```
