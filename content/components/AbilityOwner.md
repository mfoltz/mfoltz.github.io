---
nav_exclude: true
search_exclude: true
---

# AbilityOwner

```csharp
public struct AbilityOwner
{
	static AbilityOwner()
	{
		Il2CppClassPointerStore<AbilityOwner>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityOwner");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityOwner>.NativeClassPtr);
		AbilityOwner.NativeFieldInfoPtr_AbilityGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityOwner>.NativeClassPtr, "AbilityGroup");
		AbilityOwner.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityOwner>.NativeClassPtr, "Ability");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityOwner>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityGroup;
	private static readonly IntPtr NativeFieldInfoPtr_Ability;

	public NetworkedEntity AbilityGroup;

	public NetworkedEntity Ability;
}
```
