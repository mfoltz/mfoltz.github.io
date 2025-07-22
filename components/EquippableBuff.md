---
nav_exclude: true
search_exclude: false
---

# EquippableBuff

```csharp
public struct EquippableBuff
{
	static EquippableBuff()
	{
		Il2CppClassPointerStore<EquippableBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EquippableBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EquippableBuff>.NativeClassPtr);
		EquippableBuff.NativeFieldInfoPtr_ItemSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquippableBuff>.NativeClassPtr, "ItemSource");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EquippableBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ItemSource;

	public Entity ItemSource;
}
```
