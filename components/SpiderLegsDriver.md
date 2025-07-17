---
nav_exclude: true
search_exclude: true
---

# SpiderLegsDriver

```csharp
[StructLayout(2)]
public struct SpiderLegsDriver
{
	static SpiderLegsDriver()
	{
		Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "SpiderLegsDriver");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr);
		SpiderLegsDriver.NativeFieldInfoPtr_LegDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr, "LegDirection");
		SpiderLegsDriver.NativeFieldInfoPtr_BodyTiltDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr, "BodyTiltDirection");
		SpiderLegsDriver.NativeFieldInfoPtr_BodyProxyPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr, "BodyProxyPosition");
		SpiderLegsDriver.NativeFieldInfoPtr_BodyBobVelocity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr, "BodyBobVelocity");
		SpiderLegsDriver.NativeFieldInfoPtr_BodyBobPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr, "BodyBobPosition");
		SpiderLegsDriver.NativeFieldInfoPtr_StepHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr, "StepHeight");
		SpiderLegsDriver.NativeFieldInfoPtr_StepSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr, "StepSpeed");
		SpiderLegsDriver.NativeFieldInfoPtr_SuspensionSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr, "SuspensionSpeed");
		SpiderLegsDriver.NativeFieldInfoPtr_DefaultAreaRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr, "DefaultAreaRadius");
		SpiderLegsDriver.NativeFieldInfoPtr_BodyBobHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr, "BodyBobHeight");
		SpiderLegsDriver.NativeFieldInfoPtr_BodyBobStrenght = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr, "BodyBobStrenght");
		SpiderLegsDriver.NativeFieldInfoPtr_BodyBobDampening = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr, "BodyBobDampening");
		SpiderLegsDriver.NativeFieldInfoPtr_PlayFootstepAudio = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr, "PlayFootstepAudio");
		SpiderLegsDriver.NativeFieldInfoPtr_HasLegMoving = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr, "HasLegMoving");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpiderLegsDriver>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LegDirection;
	private static readonly IntPtr NativeFieldInfoPtr_BodyTiltDirection;
	private static readonly IntPtr NativeFieldInfoPtr_BodyProxyPosition;
	private static readonly IntPtr NativeFieldInfoPtr_BodyBobVelocity;
	private static readonly IntPtr NativeFieldInfoPtr_BodyBobPosition;
	private static readonly IntPtr NativeFieldInfoPtr_StepHeight;
	private static readonly IntPtr NativeFieldInfoPtr_StepSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_SuspensionSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_DefaultAreaRadius;
	private static readonly IntPtr NativeFieldInfoPtr_BodyBobHeight;
	private static readonly IntPtr NativeFieldInfoPtr_BodyBobStrenght;
	private static readonly IntPtr NativeFieldInfoPtr_BodyBobDampening;
	private static readonly IntPtr NativeFieldInfoPtr_PlayFootstepAudio;
	private static readonly IntPtr NativeFieldInfoPtr_HasLegMoving;
	[FieldOffset(0)]
	public float3 LegDirection;
	[FieldOffset(12)]
	public float3 BodyTiltDirection;
	[FieldOffset(24)]
	public float3 BodyProxyPosition;
	[FieldOffset(36)]
	public float3 BodyBobVelocity;
	[FieldOffset(48)]
	public float3 BodyBobPosition;
	[FieldOffset(60)]
	public float StepHeight;
	[FieldOffset(64)]
	public float StepSpeed;
	[FieldOffset(68)]
	public float SuspensionSpeed;
	[FieldOffset(72)]
	public float DefaultAreaRadius;
	[FieldOffset(76)]
	public float BodyBobHeight;
	[FieldOffset(80)]
	public float BodyBobStrenght;
	[FieldOffset(84)]
	public float BodyBobDampening;
	[FieldOffset(88)]
	[MarshalAs(4)]
	public bool PlayFootstepAudio;
	[FieldOffset(89)]
	[MarshalAs(4)]
	public bool HasLegMoving;
}
