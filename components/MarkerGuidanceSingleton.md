---
nav_exclude: true
search_exclude: true
---

# MarkerGuidanceSingleton

```csharp
public struct MarkerGuidanceSingleton
{
	static MarkerGuidanceSingleton()
	{
		Il2CppClassPointerStore<MarkerGuidanceSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MarkerGuidanceSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MarkerGuidanceSingleton>.NativeClassPtr);
		MarkerGuidanceSingleton.NativeFieldInfoPtr_Path = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MarkerGuidanceSingleton>.NativeClassPtr, "Path");
		MarkerGuidanceSingleton.NativeFieldInfoPtr_StartPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MarkerGuidanceSingleton>.NativeClassPtr, "StartPosition");
		MarkerGuidanceSingleton.NativeFieldInfoPtr_EndPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MarkerGuidanceSingleton>.NativeClassPtr, "EndPosition");
		MarkerGuidanceSingleton.NativeFieldInfoPtr_MarkerEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MarkerGuidanceSingleton>.NativeClassPtr, "MarkerEntity");
		MarkerGuidanceSingleton.NativeFieldInfoPtr_MarkerPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MarkerGuidanceSingleton>.NativeClassPtr, "MarkerPosition");
		MarkerGuidanceSingleton.NativeFieldInfoPtr_DrawPointsStart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MarkerGuidanceSingleton>.NativeClassPtr, "DrawPointsStart");
		MarkerGuidanceSingleton.NativeFieldInfoPtr_DrawPointsEnd = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MarkerGuidanceSingleton>.NativeClassPtr, "DrawPointsEnd");
		MarkerGuidanceSingleton.NativeFieldInfoPtr_UpdateVisuals = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MarkerGuidanceSingleton>.NativeClassPtr, "UpdateVisuals");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MarkerGuidanceSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Path;
	private static readonly IntPtr NativeFieldInfoPtr_StartPosition;
	private static readonly IntPtr NativeFieldInfoPtr_EndPosition;
	private static readonly IntPtr NativeFieldInfoPtr_MarkerEntity;
	private static readonly IntPtr NativeFieldInfoPtr_MarkerPosition;
	private static readonly IntPtr NativeFieldInfoPtr_DrawPointsStart;
	private static readonly IntPtr NativeFieldInfoPtr_DrawPointsEnd;
	private static readonly IntPtr NativeFieldInfoPtr_UpdateVisuals;

	public NativeList<float2> Path;

	public float2 StartPosition;

	public float2 EndPosition;

	public Entity MarkerEntity;

	public float3 MarkerPosition;

	public bool DrawPointsStart;

	public bool DrawPointsEnd;

	public bool UpdateVisuals;
}
```
