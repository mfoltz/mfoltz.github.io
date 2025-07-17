---
nav_exclude: true
search_exclude: true
---

# CorrectDynamicBodyTransforms

```csharp
public struct CorrectDynamicBodyTransforms
{
	static CorrectDynamicBodyTransforms()
	{
		Il2CppClassPointerStore<CorrectDynamicBodyTransforms>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CorrectDynamicBodyTransforms");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CorrectDynamicBodyTransforms>.NativeClassPtr);
		CorrectDynamicBodyTransforms.NativeFieldInfoPtr_OwnerLocalToWorld = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CorrectDynamicBodyTransforms>.NativeClassPtr, "OwnerLocalToWorld");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CorrectDynamicBodyTransforms>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OwnerLocalToWorld;

	public float4x4 OwnerLocalToWorld;
}
```
