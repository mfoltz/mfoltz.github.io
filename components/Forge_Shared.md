---
nav_exclude: true
search_exclude: true
---

# Forge_Shared

```csharp
public struct Forge_Shared
{
	static Forge_Shared()
	{
		Il2CppClassPointerStore<Forge_Shared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Forge_Shared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Forge_Shared>.NativeClassPtr);
		Forge_Shared.NativeFieldInfoPtr_ItemEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Forge_Shared>.NativeClassPtr, "ItemEntity");
		Forge_Shared.NativeFieldInfoPtr_RepairStartTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Forge_Shared>.NativeClassPtr, "RepairStartTime");
		Forge_Shared.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Forge_Shared>.NativeClassPtr, "State");
		Forge_Shared.NativeFieldInfoPtr_RepairTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Forge_Shared>.NativeClassPtr, "RepairTime");
		Forge_Shared.NativeFieldInfoPtr_InitialResourceMultiplier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Forge_Shared>.NativeClassPtr, "InitialResourceMultiplier");
		Forge_Shared.NativeFieldInfoPtr_InitialWeaponDurability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Forge_Shared>.NativeClassPtr, "InitialWeaponDurability");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Forge_Shared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ItemEntity;
	private static readonly IntPtr NativeFieldInfoPtr_RepairStartTime;
	private static readonly IntPtr NativeFieldInfoPtr_State;
	private static readonly IntPtr NativeFieldInfoPtr_RepairTime;
	private static readonly IntPtr NativeFieldInfoPtr_InitialResourceMultiplier;
	private static readonly IntPtr NativeFieldInfoPtr_InitialWeaponDurability;

	public NetworkedEntity ItemEntity;

	public double RepairStartTime;

	public ForgeState State;

	public float RepairTime;

	public float InitialResourceMultiplier;

	public float InitialWeaponDurability;
}
```

## Server Systems

- [ProjectM.ForgeSystem_Update](/systems/ProjectM.ForgeSystem_Update)
