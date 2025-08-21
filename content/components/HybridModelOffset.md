---
nav_exclude: true
search_exclude: true
---

```csharp
public struct HybridModelOffset
{
	static HybridModelOffset()
	{
		Il2CppClassPointerStore<HybridModelOffset>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Hybrid", "HybridModelOffset");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridModelOffset>.NativeClassPtr);
		HybridModelOffset.NativeFieldInfoPtr_VisualOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelOffset>.NativeClassPtr, "VisualOffset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridModelOffset>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VisualOffset;

	public float3 VisualOffset;
}
```
