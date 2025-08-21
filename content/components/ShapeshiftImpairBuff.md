---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ShapeshiftImpairBuff
{
	static ShapeshiftImpairBuff()
	{
		Il2CppClassPointerStore<ShapeshiftImpairBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ShapeshiftImpairBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShapeshiftImpairBuff>.NativeClassPtr);
		ShapeshiftImpairBuff.NativeFieldInfoPtr_FailKey = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShapeshiftImpairBuff>.NativeClassPtr, "FailKey");
		ShapeshiftImpairBuff.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShapeshiftImpairBuff>.NativeClassPtr, "Condition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShapeshiftImpairBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FailKey;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;

	public LocalizationKey FailKey;

	public BlobAssetReference<ConditionBlob> Condition;
}
```
