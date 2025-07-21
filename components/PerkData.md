---
nav_exclude: true
search_exclude: false
---

# PerkData

```csharp
public struct PerkData
{
	static PerkData()
	{
		Il2CppClassPointerStore<PerkData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PerkData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PerkData>.NativeClassPtr);
		PerkData.NativeFieldInfoPtr_LootValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerkData>.NativeClassPtr, "LootValue");
		PerkData.NativeFieldInfoPtr_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerkData>.NativeClassPtr, "PrefabGUID");
		PerkData.NativeFieldInfoPtr_PowerValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PerkData>.NativeClassPtr, "PowerValue");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PerkData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LootValue;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_PowerValue;

	public float LootValue;

	public PrefabGUID PrefabGUID;

	public int PowerValue;
}
```
