---
nav_exclude: true
search_exclude: true
---

# LoadCastleOperation

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool ReadyToStartBuilding;
	[FieldOffset(4)]
	public int FramesBuildCooldown;
	[FieldOffset(8)]
	public float3 HeartTranslation;
	[FieldOffset(20)]
	public quaternion HeartRotation;
}
