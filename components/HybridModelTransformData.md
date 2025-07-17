---
nav_exclude: true
search_exclude: true
---

# HybridModelTransformData

```csharp
public struct HybridModelTransformData
{
	static HybridModelTransformData()
	{
		Il2CppClassPointerStore<HybridModelTransformData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Hybrid", "HybridModelTransformData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridModelTransformData>.NativeClassPtr);
		HybridModelTransformData.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelTransformData>.NativeClassPtr, "Position");
		HybridModelTransformData.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelTransformData>.NativeClassPtr, "Rotation");
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridModelTransformData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;

	public Vector3 Position;

	public Quaternion Rotation;
}
```
