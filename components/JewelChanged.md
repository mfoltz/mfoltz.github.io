---
nav_exclude: true
search_exclude: true
---

# JewelChanged

```csharp
public struct JewelChanged
{
	static JewelChanged()
	{
		Il2CppClassPointerStore<JewelChanged>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "JewelChanged");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<JewelChanged>.NativeClassPtr);
		JewelChanged.NativeFieldInfoPtr_OldJewel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelChanged>.NativeClassPtr, "OldJewel");
		JewelChanged.NativeFieldInfoPtr_NewJewel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelChanged>.NativeClassPtr, "NewJewel");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<JewelChanged>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OldJewel;
	private static readonly IntPtr NativeFieldInfoPtr_NewJewel;

	public Entity OldJewel;

	public Entity NewJewel;
}
```
