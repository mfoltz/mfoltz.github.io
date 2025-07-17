---
nav_exclude: true
search_exclude: true
---

# HybridModelStreamingTokens

```csharp
public struct HybridModelStreamingTokens
{
	static HybridModelStreamingTokens()
	{
		Il2CppClassPointerStore<HybridModelStreamingTokens>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "HybridModelStreamingTokens");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridModelStreamingTokens>.NativeClassPtr);
		HybridModelStreamingTokens.NativeFieldInfoPtr_OverrideToken = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelStreamingTokens>.NativeClassPtr, "OverrideToken");
		HybridModelStreamingTokens.NativeFieldInfoPtr_BaseToken = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelStreamingTokens>.NativeClassPtr, "BaseToken");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridModelStreamingTokens>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OverrideToken;
	private static readonly IntPtr NativeFieldInfoPtr_BaseToken;

	public AssetReferenceToken OverrideToken;

	public AssetReferenceToken BaseToken;
}
```
