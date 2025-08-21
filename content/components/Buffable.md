---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Buffable
{
	static Buffable()
	{
		Il2CppClassPointerStore<Buffable>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Buffable");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Buffable>.NativeClassPtr);
		Buffable.NativeFieldInfoPtr_KnockbackResistanceIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buffable>.NativeClassPtr, "KnockbackResistanceIndex");
		Buffable.NativeFieldInfoPtr_UniqueBuffCategories = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buffable>.NativeClassPtr, "UniqueBuffCategories");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Buffable>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_KnockbackResistanceIndex;
	private static readonly IntPtr NativeFieldInfoPtr_UniqueBuffCategories;

	public ModifiableInt KnockbackResistanceIndex;

	public BuffCategoryFlag UniqueBuffCategories;
}
```
