---
nav_exclude: true
search_exclude: true
---

# ScreenShake

```csharp
[StructLayout(2)]
public struct ScreenShake
{
	static ScreenShake()
	{
		Il2CppClassPointerStore<ScreenShake>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ScreenShake");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ScreenShake>.NativeClassPtr);
		ScreenShake.NativeFieldInfoPtr_ShakeSpace = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScreenShake>.NativeClassPtr, "ShakeSpace");
		ScreenShake.NativeFieldInfoPtr_ForwardForce = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScreenShake>.NativeClassPtr, "ForwardForce");
		ScreenShake.NativeFieldInfoPtr_SideForce = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScreenShake>.NativeClassPtr, "SideForce");
		ScreenShake.NativeFieldInfoPtr_Direction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScreenShake>.NativeClassPtr, "Direction");
		ScreenShake.NativeFieldInfoPtr_XDir = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScreenShake>.NativeClassPtr, "XDir");
		ScreenShake.NativeFieldInfoPtr_ScreenShakeSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScreenShake>.NativeClassPtr, "ScreenShakeSequence");
		ScreenShake.NativeFieldInfoPtr_ScreenShakeIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScreenShake>.NativeClassPtr, "ScreenShakeIndex");
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ScreenShake>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ShakeSpace;
	private static readonly IntPtr NativeFieldInfoPtr_ForwardForce;
	private static readonly IntPtr NativeFieldInfoPtr_SideForce;
	private static readonly IntPtr NativeFieldInfoPtr_Direction;
	private static readonly IntPtr NativeFieldInfoPtr_XDir;
	private static readonly IntPtr NativeFieldInfoPtr_ScreenShakeSequence;
	private static readonly IntPtr NativeFieldInfoPtr_ScreenShakeIndex;
	[FieldOffset(0)]
	public ScreenShakeSpaceEnum ShakeSpace;
	[FieldOffset(4)]
	public float ForwardForce;
	[FieldOffset(8)]
	public float SideForce;
	[FieldOffset(12)]
	public Vector3 Direction;
	[FieldOffset(24)]
	public float XDir;
	[FieldOffset(32)]
	public BlobAssetReference<SequenceBlob> ScreenShakeSequence;
	[FieldOffset(40)]
	public int ScreenShakeIndex;
}
