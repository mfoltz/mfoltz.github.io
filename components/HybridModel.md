---
nav_exclude: true
search_exclude: true
---

# HybridModel

```csharp
public struct HybridModel
{
	static HybridModel()
	{
		Il2CppClassPointerStore<HybridModel>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Hybrid", "HybridModel");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridModel>.NativeClassPtr);
		HybridModel.NativeFieldInfoPtr_GameplayEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModel>.NativeClassPtr, "GameplayEntity");
		HybridModel.NativeFieldInfoPtr_ModelType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModel>.NativeClassPtr, "ModelType");
		HybridModel.NativeFieldInfoPtr_IsFemale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModel>.NativeClassPtr, "IsFemale");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridModel>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ModelType;
	private static readonly IntPtr NativeFieldInfoPtr_IsFemale;

	public Entity GameplayEntity;

	public HybridModelType ModelType;

	public bool IsFemale;
}
```
