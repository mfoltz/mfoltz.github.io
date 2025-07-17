---
nav_exclude: true
search_exclude: true
---

# BloodBuffScript_Innocent_80

```csharp
[StructLayout(2)]
public struct BloodBuffScript_Innocent_80
{
	static BloodBuffScript_Innocent_80()
	{
		Il2CppClassPointerStore<BloodBuffScript_Innocent_80>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BloodBuffScript_Innocent_80");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuffScript_Innocent_80>.NativeClassPtr);
		BloodBuffScript_Innocent_80.NativeFieldInfoPtr_SCT = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Innocent_80>.NativeClassPtr, "SCT");
		BloodBuffScript_Innocent_80.NativeFieldInfoPtr_RollPrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Innocent_80>.NativeClassPtr, "RollPrefabGUID");
		BloodBuffScript_Innocent_80.NativeFieldInfoPtr_MinChanceToRestAbilityCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Innocent_80>.NativeClassPtr, "MinChanceToRestAbilityCooldown");
		BloodBuffScript_Innocent_80.NativeFieldInfoPtr_MaxChanceToRestAbilityCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Innocent_80>.NativeClassPtr, "MaxChanceToRestAbilityCooldown");
		BloodBuffScript_Innocent_80.NativeFieldInfoPtr_RequiredBloodPercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Innocent_80>.NativeClassPtr, "RequiredBloodPercentage");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuffScript_Innocent_80>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SCT;
	private static readonly IntPtr NativeFieldInfoPtr_RollPrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_MinChanceToRestAbilityCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_MaxChanceToRestAbilityCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredBloodPercentage;
	[FieldOffset(0)]
	public AssetGuid SCT;
	[FieldOffset(16)]
	public PrefabGUID RollPrefabGUID;
	[FieldOffset(20)]
	public float MinChanceToRestAbilityCooldown;
	[FieldOffset(24)]
	public float MaxChanceToRestAbilityCooldown;
	[FieldOffset(28)]
	public float RequiredBloodPercentage;
}
