---
nav_exclude: true
search_exclude: true
---

# UseHybridModel

```csharp
public struct UseHybridModel
{
	static UseHybridModel()
	{
		Il2CppClassPointerStore<UseHybridModel>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Hybrid", "UseHybridModel");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UseHybridModel>.NativeClassPtr);
		UseHybridModel.NativeFieldInfoPtr_Models = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseHybridModel>.NativeClassPtr, "Models");
		UseHybridModel.NativeFieldInfoPtr_Override = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseHybridModel>.NativeClassPtr, "Override");
		UseHybridModel.NativeFieldInfoPtr_ColorCollection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseHybridModel>.NativeClassPtr, "ColorCollection");
		UseHybridModel.NativeFieldInfoPtr_OverrideColorCollection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseHybridModel>.NativeClassPtr, "OverrideColorCollection");
		UseHybridModel.NativeFieldInfoPtr_UseSkinColorCollection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseHybridModel>.NativeClassPtr, "UseSkinColorCollection");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UseHybridModel>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Models;
	private static readonly IntPtr NativeFieldInfoPtr_Override;
	private static readonly IntPtr NativeFieldInfoPtr_ColorCollection;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideColorCollection;
	private static readonly IntPtr NativeFieldInfoPtr_UseSkinColorCollection;

	public BlobAssetReference<UseHybridModelPrefabsBlob> Models;

	public UseHybridModelPrefabsBlob.PrefabData Override;

	public PrefabGUID ColorCollection;

	public PrefabGUID OverrideColorCollection;

	public bool UseSkinColorCollection;
}
```

## Server Systems

- [ProjectM.MountSystem_Shared](/systems/ProjectM.MountSystem_Shared)
