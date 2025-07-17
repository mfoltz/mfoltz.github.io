---
nav_exclude: true
search_exclude: true
---

# SaddleData

```csharp
[StructLayout(2)]
public struct SaddleData
{
	static SaddleData()
	{
		Il2CppClassPointerStore<SaddleData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SaddleData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SaddleData>.NativeClassPtr);
		SaddleData.NativeFieldInfoPtr_MountBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SaddleData>.NativeClassPtr, "MountBuff");
		SaddleData.NativeFieldInfoPtr_MaxSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SaddleData>.NativeClassPtr, "MaxSpeed");
		SaddleData.NativeFieldInfoPtr_RotationSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SaddleData>.NativeClassPtr, "RotationSpeed");
		SaddleData.NativeFieldInfoPtr_Acceleration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SaddleData>.NativeClassPtr, "Acceleration");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SaddleData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MountBuff;
	private static readonly IntPtr NativeFieldInfoPtr_MaxSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_RotationSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_Acceleration;
	[FieldOffset(0)]
	public PrefabGUID MountBuff;
	[FieldOffset(4)]
	public float MaxSpeed;
	[FieldOffset(8)]
	public float RotationSpeed;
	[FieldOffset(12)]
	public float Acceleration;
}
