---
nav_exclude: true
search_exclude: true
---

# HybridModelAnimData

```csharp
[StructLayout(2)]
public struct HybridModelAnimData
{
	static HybridModelAnimData()
	{
		Il2CppClassPointerStore<HybridModelAnimData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "HybridModelAnimData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridModelAnimData>.NativeClassPtr);
		HybridModelAnimData.NativeFieldInfoPtr_SoftChestAimAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelAnimData>.NativeClassPtr, "SoftChestAimAngle");
		HybridModelAnimData.NativeFieldInfoPtr_SoftHeadAimAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelAnimData>.NativeClassPtr, "SoftHeadAimAngle");
		HybridModelAnimData.NativeFieldInfoPtr_SmoothTurnAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelAnimData>.NativeClassPtr, "SmoothTurnAngle");
		HybridModelAnimData.NativeFieldInfoPtr_StopAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelAnimData>.NativeClassPtr, "StopAngle");
		HybridModelAnimData.NativeFieldInfoPtr_LastDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelAnimData>.NativeClassPtr, "LastDirection");
		HybridModelAnimData.NativeFieldInfoPtr_DirectionalSnapshot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelAnimData>.NativeClassPtr, "DirectionalSnapshot");
		HybridModelAnimData.NativeFieldInfoPtr_BlendTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelAnimData>.NativeClassPtr, "BlendTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridModelAnimData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SoftChestAimAngle;
	private static readonly IntPtr NativeFieldInfoPtr_SoftHeadAimAngle;
	private static readonly IntPtr NativeFieldInfoPtr_SmoothTurnAngle;
	private static readonly IntPtr NativeFieldInfoPtr_StopAngle;
	private static readonly IntPtr NativeFieldInfoPtr_LastDirection;
	private static readonly IntPtr NativeFieldInfoPtr_DirectionalSnapshot;
	private static readonly IntPtr NativeFieldInfoPtr_BlendTime;
	[FieldOffset(0)]
	public float SoftChestAimAngle;
	[FieldOffset(4)]
	public float SoftHeadAimAngle;
	[FieldOffset(8)]
	public float SmoothTurnAngle;
	[FieldOffset(12)]
	public float StopAngle;
	[FieldOffset(16)]
	public float3 LastDirection;
	[FieldOffset(28)]
	public float3 DirectionalSnapshot;
	[FieldOffset(40)]
	public float BlendTime;
}
