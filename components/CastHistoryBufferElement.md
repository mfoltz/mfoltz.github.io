---
nav_exclude: true
search_exclude: true
---

# CastHistoryBufferElement

```csharp
public struct CastHistoryBufferElement
{
	static CastHistoryBufferElement()
	{
		Il2CppClassPointerStore<CastHistoryBufferElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CastHistoryBufferElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastHistoryBufferElement>.NativeClassPtr);
		CastHistoryBufferElement.NativeFieldInfoPtr_AbilityPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastHistoryBufferElement>.NativeClassPtr, "AbilityPrefabGuid");
		CastHistoryBufferElement.NativeFieldInfoPtr_CastTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastHistoryBufferElement>.NativeClassPtr, "CastTime");
		CastHistoryBufferElement.NativeFieldInfoPtr_CastResult = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastHistoryBufferElement>.NativeClassPtr, "CastResult");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastHistoryBufferElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_CastTime;
	private static readonly IntPtr NativeFieldInfoPtr_CastResult;

	public PrefabGUID AbilityPrefabGuid;

	public double CastTime;

	public CastHistoryCastResult CastResult;
}
```
