---
nav_exclude: true
search_exclude: true
---

```csharp
public struct HybridEquipment
{
	static HybridEquipment()
	{
		Il2CppClassPointerStore<HybridEquipment>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "HybridEquipment");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridEquipment>.NativeClassPtr);
		HybridEquipment.NativeFieldInfoPtr_MaleAssetGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridEquipment>.NativeClassPtr, "MaleAssetGuid");
		HybridEquipment.NativeFieldInfoPtr_FemaleAssetGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridEquipment>.NativeClassPtr, "FemaleAssetGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridEquipment>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaleAssetGuid;
	private static readonly IntPtr NativeFieldInfoPtr_FemaleAssetGuid;

	public AssetGuid MaleAssetGuid;

	public AssetGuid FemaleAssetGuid;
}
```
