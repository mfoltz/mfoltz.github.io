---
nav_exclude: true
search_exclude: true
---

# MeshRendererBakingData

```csharp
[StructLayout(2)]
public struct MeshRendererBakingData
{
	static MeshRendererBakingData()
	{
		Il2CppClassPointerStore<MeshRendererBakingData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "MeshRendererBakingData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MeshRendererBakingData>.NativeClassPtr);
		MeshRendererBakingData.NativeFieldInfoPtr_MeshRenderer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MeshRendererBakingData>.NativeClassPtr, "MeshRenderer");
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MeshRendererBakingData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MeshRenderer;
	[FieldOffset(0)]
	public UnityObjectRef<Renderer> MeshRenderer;
}
