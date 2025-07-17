---
nav_exclude: true
search_exclude: true
---

# ServantTypeData

```csharp
public struct ServantTypeData
{
	static ServantTypeData()
	{
		Il2CppClassPointerStore<ServantTypeData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServantTypeData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantTypeData>.NativeClassPtr);
		ServantTypeData.NativeFieldInfoPtr_ServantType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantTypeData>.NativeClassPtr, "ServantType");
		ServantTypeData.NativeFieldInfoPtr_GenderType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantTypeData>.NativeClassPtr, "GenderType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantTypeData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ServantType;
	private static readonly IntPtr NativeFieldInfoPtr_GenderType;

	public ServantType ServantType;

	public GenderType GenderType;
}
```
