---
nav_exclude: true
search_exclude: true
---

# HybridModelUser

```csharp
public struct HybridModelUser
{
	static HybridModelUser()
	{
		Il2CppClassPointerStore<HybridModelUser>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "HybridModelUser");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridModelUser>.NativeClassPtr);
		HybridModelUser.NativeFieldInfoPtr_HybridEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelUser>.NativeClassPtr, "HybridEntity");
		HybridModelUser.NativeFieldInfoPtr_ModelType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelUser>.NativeClassPtr, "ModelType");
		HybridModelUser.NativeFieldInfoPtr_TimeSinceLastSeen = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelUser>.NativeClassPtr, "TimeSinceLastSeen");
		HybridModelUser.NativeFieldInfoPtr_WaitForEquipmentStreaming = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelUser>.NativeClassPtr, "WaitForEquipmentStreaming");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridModelUser>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HybridEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ModelType;
	private static readonly IntPtr NativeFieldInfoPtr_TimeSinceLastSeen;
	private static readonly IntPtr NativeFieldInfoPtr_WaitForEquipmentStreaming;

	public Entity HybridEntity;

	public HybridModelType ModelType;

	public float TimeSinceLastSeen;

	public bool WaitForEquipmentStreaming;
}
```

## Client Systems

- [GetAndSetHybridModelTransformSystem](/systems/client/GetAndSetHybridModelTransformSystem)
- [HybridModelSystem](/systems/client/HybridModelSystem)
