---
nav_exclude: true
search_exclude: true
---

```csharp
public struct UnlockedVBlood
{
	static UnlockedVBlood()
	{
		Il2CppClassPointerStore<UnlockedVBlood>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UnlockedVBlood");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnlockedVBlood>.NativeClassPtr);
		UnlockedVBlood.NativeFieldInfoPtr_VBlood = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockedVBlood>.NativeClassPtr, "VBlood");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnlockedVBlood>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VBlood;

	public PrefabGUID VBlood;
}
```
