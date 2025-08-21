---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ManualFirstFrameLastTranslation
{
	static ManualFirstFrameLastTranslation()
	{
		Il2CppClassPointerStore<ManualFirstFrameLastTranslation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ManualFirstFrameLastTranslation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ManualFirstFrameLastTranslation>.NativeClassPtr);
		ManualFirstFrameLastTranslation.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ManualFirstFrameLastTranslation>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ManualFirstFrameLastTranslation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public Nullable_Unboxed<float3> Value;
}
```
