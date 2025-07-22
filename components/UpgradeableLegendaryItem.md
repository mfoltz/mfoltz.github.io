---
nav_exclude: true
search_exclude: false
---

# UpgradeableLegendaryItem

```csharp
public struct UpgradeableLegendaryItem
{
	static UpgradeableLegendaryItem()
	{
		Il2CppClassPointerStore<UpgradeableLegendaryItem>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "UpgradeableLegendaryItem");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UpgradeableLegendaryItem>.NativeClassPtr);
		UpgradeableLegendaryItem.NativeFieldInfoPtr_CurrentTier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UpgradeableLegendaryItem>.NativeClassPtr, "CurrentTier");
		UpgradeableLegendaryItem.NativeFieldInfoPtr_MaxTiers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UpgradeableLegendaryItem>.NativeClassPtr, "MaxTiers");
		UpgradeableLegendaryItem.NativeMethodInfoPtr_get_RemainingTiers_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UpgradeableLegendaryItem>.NativeClassPtr, 100672108);
		UpgradeableLegendaryItem.NativeMethodInfoPtr_get_HasRemainingTiers_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UpgradeableLegendaryItem>.NativeClassPtr, 100672109);
		UpgradeableLegendaryItem.NativeMethodInfoPtr_get_NextTier_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UpgradeableLegendaryItem>.NativeClassPtr, 100672110);
	}
	public unsafe int RemainingTiers
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UpgradeableLegendaryItem.NativeMethodInfoPtr_get_RemainingTiers_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool HasRemainingTiers
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UpgradeableLegendaryItem.NativeMethodInfoPtr_get_HasRemainingTiers_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe int NextTier
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UpgradeableLegendaryItem.NativeMethodInfoPtr_get_NextTier_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UpgradeableLegendaryItem>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CurrentTier;
	private static readonly IntPtr NativeFieldInfoPtr_MaxTiers;
	private static readonly IntPtr NativeMethodInfoPtr_get_RemainingTiers_Public_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_HasRemainingTiers_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_NextTier_Public_get_Int32_0;

	public int CurrentTier;

	public int MaxTiers;
}
```
