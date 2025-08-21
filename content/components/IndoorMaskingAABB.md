---
nav_exclude: true
search_exclude: true
---

```csharp
public struct IndoorMaskingAABB
{
	static IndoorMaskingAABB()
	{
		Il2CppClassPointerStore<IndoorMaskingAABB>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Presentation.Systems.dll", "ProjectM.Presentation", "IndoorMaskingAABB");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<IndoorMaskingAABB>.NativeClassPtr);
		IndoorMaskingAABB.NativeFieldInfoPtr_Min = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IndoorMaskingAABB>.NativeClassPtr, "Min");
		IndoorMaskingAABB.NativeFieldInfoPtr_Max = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IndoorMaskingAABB>.NativeClassPtr, "Max");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<IndoorMaskingAABB>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Min;
	private static readonly IntPtr NativeFieldInfoPtr_Max;

	public float3 Min;

	public float3 Max;
}
```
