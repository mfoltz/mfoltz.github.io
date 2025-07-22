---
nav_exclude: true
search_exclude: false
---

# TreeParamsBakingData

```csharp
public struct TreeParamsBakingData
{
	static TreeParamsBakingData()
	{
		Il2CppClassPointerStore<TreeParamsBakingData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Wind", "TreeParamsBakingData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TreeParamsBakingData>.NativeClassPtr);
		TreeParamsBakingData.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TreeParamsBakingData>.NativeClassPtr, "Entity");
		TreeParamsBakingData.NativeFieldInfoPtr_Params0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TreeParamsBakingData>.NativeClassPtr, "Params0");
		TreeParamsBakingData.NativeFieldInfoPtr_Params1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TreeParamsBakingData>.NativeClassPtr, "Params1");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TreeParamsBakingData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_Params0;
	private static readonly IntPtr NativeFieldInfoPtr_Params1;

	public Entity Entity;

	public float4 Params0;

	public float4 Params1;
}
```
