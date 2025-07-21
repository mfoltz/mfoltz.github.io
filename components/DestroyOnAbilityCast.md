---
nav_exclude: true
search_exclude: false
---

# DestroyOnAbilityCast

```csharp
public struct DestroyOnAbilityCast
{
	static DestroyOnAbilityCast()
	{
		Il2CppClassPointerStore<DestroyOnAbilityCast>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DestroyOnAbilityCast");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyOnAbilityCast>.NativeClassPtr);
		DestroyOnAbilityCast.NativeFieldInfoPtr_CastCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyOnAbilityCast>.NativeClassPtr, "CastCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyOnAbilityCast>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastCount;

	public int CastCount;
}
```
