# SpellModGlobalTierBlobReference

```csharp
[StructLayout(2)]
public struct SpellModGlobalTierBlobReference
{
	static SpellModGlobalTierBlobReference()
	{
		Il2CppClassPointerStore<SpellModGlobalTierBlobReference>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "SpellModGlobalTierBlobReference");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellModGlobalTierBlobReference>.NativeClassPtr);
		SpellModGlobalTierBlobReference.NativeFieldInfoPtr_TierData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModGlobalTierBlobReference>.NativeClassPtr, "TierData");
		SpellModGlobalTierBlobReference.NativeFieldInfoPtr_SettingType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModGlobalTierBlobReference>.NativeClassPtr, "SettingType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellModGlobalTierBlobReference>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TierData;
	private static readonly IntPtr NativeFieldInfoPtr_SettingType;
	[FieldOffset(0)]
	public BlobAssetReference<SpellModSetGlobalTierData> TierData;
	[FieldOffset(8)]
	public SpellModGlobalTierBlobReference.ModSettingType SettingType;
	public enum ModSettingType
	{
		Jewels_SpellMods,
		LegendaryItems_StatMods,
		LegendaryItems_SpellMods
	}
}
