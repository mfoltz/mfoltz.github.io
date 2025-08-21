---
nav_exclude: true
search_exclude: true
---

```csharp
public struct LoadCastleOperation
{
	static LoadCastleOperation()
	{
		Il2CppClassPointerStore<LoadCastleOperation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "LoadCastleOperation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LoadCastleOperation>.NativeClassPtr);
		LoadCastleOperation.NativeFieldInfoPtr_ReadyToStartBuilding = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadCastleOperation>.NativeClassPtr, "ReadyToStartBuilding");
		LoadCastleOperation.NativeFieldInfoPtr_FramesBuildCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadCastleOperation>.NativeClassPtr, "FramesBuildCooldown");
		LoadCastleOperation.NativeFieldInfoPtr_HeartTranslation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadCastleOperation>.NativeClassPtr, "HeartTranslation");
		LoadCastleOperation.NativeFieldInfoPtr_HeartRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadCastleOperation>.NativeClassPtr, "HeartRotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LoadCastleOperation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ReadyToStartBuilding;
	private static readonly IntPtr NativeFieldInfoPtr_FramesBuildCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_HeartTranslation;
	private static readonly IntPtr NativeFieldInfoPtr_HeartRotation;

	public bool ReadyToStartBuilding;

	public int FramesBuildCooldown;

	public float3 HeartTranslation;

	public quaternion HeartRotation;
}
```
