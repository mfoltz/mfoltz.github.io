---
nav_exclude: true
search_exclude: true
---

# LightBakingOutputData

```csharp
public struct LightBakingOutputData
{
	static LightBakingOutputData()
	{
		Il2CppClassPointerStore<LightBakingOutputData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "LightBakingOutputData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LightBakingOutputData>.NativeClassPtr);
		LightBakingOutputData.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightBakingOutputData>.NativeClassPtr, "Value");
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LightBakingOutputData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public LightBakingOutput Value;
}
```

## Client Systems

- [HybridLightBakingDataSystem](/systems/client/HybridLightBakingDataSystem)
