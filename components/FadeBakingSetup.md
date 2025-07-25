---
nav_exclude: true
search_exclude: true
---

# FadeBakingSetup

```csharp
public struct FadeBakingSetup
{
	static FadeBakingSetup()
	{
		Il2CppClassPointerStore<FadeBakingSetup>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Conversion.dll", "ProjectM", "FadeBakingSetup");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FadeBakingSetup>.NativeClassPtr);
		FadeBakingSetup.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeBakingSetup>.NativeClassPtr, "Entity");
		FadeBakingSetup.NativeFieldInfoPtr_HeightOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeBakingSetup>.NativeClassPtr, "HeightOffset");
		FadeBakingSetup.NativeFieldInfoPtr_RequireRenderMesh = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeBakingSetup>.NativeClassPtr, "RequireRenderMesh");
		FadeBakingSetup.NativeFieldInfoPtr_OcclusionCulling = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeBakingSetup>.NativeClassPtr, "OcclusionCulling");
		FadeBakingSetup.NativeFieldInfoPtr_AlwaysCullAbove = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeBakingSetup>.NativeClassPtr, "AlwaysCullAbove");
		FadeBakingSetup.NativeFieldInfoPtr_AddToAdditionalEntities = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeBakingSetup>.NativeClassPtr, "AddToAdditionalEntities");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FadeBakingSetup>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_HeightOffset;
	private static readonly IntPtr NativeFieldInfoPtr_RequireRenderMesh;
	private static readonly IntPtr NativeFieldInfoPtr_OcclusionCulling;
	private static readonly IntPtr NativeFieldInfoPtr_AlwaysCullAbove;
	private static readonly IntPtr NativeFieldInfoPtr_AddToAdditionalEntities;

	public Entity Entity;

	public int HeightOffset;

	public bool RequireRenderMesh;

	public bool OcclusionCulling;

	public bool AlwaysCullAbove;

	public bool AddToAdditionalEntities;
}
```
