---
nav_exclude: true
search_exclude: true
---

# SkinnedMeshRendererBakingData

```csharp
public struct SkinnedMeshRendererBakingData
{
	static SkinnedMeshRendererBakingData()
	{
		Il2CppClassPointerStore<SkinnedMeshRendererBakingData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "SkinnedMeshRendererBakingData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SkinnedMeshRendererBakingData>.NativeClassPtr);
		SkinnedMeshRendererBakingData.NativeFieldInfoPtr_SkinnedMeshRenderer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SkinnedMeshRendererBakingData>.NativeClassPtr, "SkinnedMeshRenderer");
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SkinnedMeshRendererBakingData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SkinnedMeshRenderer;

	public UnityObjectRef<SkinnedMeshRenderer> SkinnedMeshRenderer;
}
```
