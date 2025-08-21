---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SaddleBuff
{
	static SaddleBuff()
	{
		Il2CppClassPointerStore<SaddleBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SaddleBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SaddleBuff>.NativeClassPtr);
		SaddleBuff.NativeFieldInfoPtr_UnMountedModel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SaddleBuff>.NativeClassPtr, "UnMountedModel");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SaddleBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnMountedModel;

	public UseHybridModelPrefabsBlob.PrefabData UnMountedModel;
}
```
