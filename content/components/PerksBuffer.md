---
nav_exclude: true
search_exclude: true
---

```csharp
public struct PerksBuffer
{
	static PerksBuffer()
	{
		Il2CppClassPointerStore<PerksBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PerksBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PerksBuffer>.NativeClassPtr);
		PerksBuffer.NativeFieldInfoPtr_Perk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerksBuffer>.NativeClassPtr, "Perk");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PerksBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Perk;

	public PrefabGUID Perk;
}
```
