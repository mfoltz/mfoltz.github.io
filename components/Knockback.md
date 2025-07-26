---
nav_exclude: true
search_exclude: true
---

# Knockback

```csharp
public struct Knockback
{
	static Knockback()
	{
		Il2CppClassPointerStore<Knockback>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Knockback");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Knockback>.NativeClassPtr);
		Knockback.NativeFieldInfoPtr_CanCastModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Knockback>.NativeClassPtr, "CanCastModId");
		Knockback.NativeFieldInfoPtr_CanMoveModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Knockback>.NativeClassPtr, "CanMoveModId");
		Knockback.NativeFieldInfoPtr_Importance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Knockback>.NativeClassPtr, "Importance");
		Knockback.NativeFieldInfoPtr_ApplyStun = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Knockback>.NativeClassPtr, "ApplyStun");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Knockback>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CanCastModId;
	private static readonly IntPtr NativeFieldInfoPtr_CanMoveModId;
	private static readonly IntPtr NativeFieldInfoPtr_Importance;
	private static readonly IntPtr NativeFieldInfoPtr_ApplyStun;

	public ModificationId CanCastModId;

	public ModificationId CanMoveModId;

	public int Importance;

	public bool ApplyStun;
}
```

## Server Systems

- [Destroy_KnockbackSystem](/systems/server/Destroy_KnockbackSystem)
- [KnockbackSystem](/systems/server/KnockbackSystem)
- [KnockbackSystemSpawn](/systems/server/KnockbackSystemSpawn)
