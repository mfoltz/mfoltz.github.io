---
nav_exclude: true
search_exclude: true
---

```csharp
public struct MagicSourceDurabilityRequirement
{
	static MagicSourceDurabilityRequirement()
	{
		Il2CppClassPointerStore<MagicSourceDurabilityRequirement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MagicSourceDurabilityRequirement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MagicSourceDurabilityRequirement>.NativeClassPtr);
		MagicSourceDurabilityRequirement.NativeFieldInfoPtr_Durability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MagicSourceDurabilityRequirement>.NativeClassPtr, "Durability");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MagicSourceDurabilityRequirement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Durability;

	public float Durability;
}
```
