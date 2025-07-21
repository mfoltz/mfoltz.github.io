---
nav_exclude: true
search_exclude: false
---

# DisableableSpellMovement

```csharp
public struct DisableableSpellMovement
{
	static DisableableSpellMovement()
	{
		Il2CppClassPointerStore<DisableableSpellMovement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DisableableSpellMovement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DisableableSpellMovement>.NativeClassPtr);
		DisableableSpellMovement.NativeFieldInfoPtr_Disabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableableSpellMovement>.NativeClassPtr, "Disabled");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DisableableSpellMovement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Disabled;

	public bool Disabled;
}
```
