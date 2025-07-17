---
nav_exclude: true
search_exclude: true
---

# PrefabPreview

```csharp
[StructLayout(2)]
public struct PrefabPreview
{
	static PrefabPreview()
	{
		Il2CppClassPointerStore<PrefabPreview>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PrefabPreview");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PrefabPreview>.NativeClassPtr);
		PrefabPreview.NativeFieldInfoPtr_DisableRendering = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabPreview>.NativeClassPtr, "DisableRendering");
		PrefabPreview.NativeFieldInfoPtr_SceneObjectLocalToWorld = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabPreview>.NativeClassPtr, "SceneObjectLocalToWorld");
		PrefabPreview.NativeFieldInfoPtr_LastSceneObjectLocalToWorld = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabPreview>.NativeClassPtr, "LastSceneObjectLocalToWorld");
		PrefabPreview.NativeFieldInfoPtr_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabPreview>.NativeClassPtr, "PrefabGUID");
		PrefabPreview.NativeFieldInfoPtr_PrefabOwnerObjectId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabPreview>.NativeClassPtr, "PrefabOwnerObjectId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PrefabPreview>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DisableRendering;
	private static readonly IntPtr NativeFieldInfoPtr_SceneObjectLocalToWorld;
	private static readonly IntPtr NativeFieldInfoPtr_LastSceneObjectLocalToWorld;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabOwnerObjectId;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool DisableRendering;
	[FieldOffset(4)]
	public float4x4 SceneObjectLocalToWorld;
	[FieldOffset(68)]
	public float4x4 LastSceneObjectLocalToWorld;
	[FieldOffset(132)]
	public PrefabGUID PrefabGUID;
	[FieldOffset(136)]
	public int PrefabOwnerObjectId;
}
