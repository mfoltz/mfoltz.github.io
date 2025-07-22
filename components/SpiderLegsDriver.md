---
nav_exclude: true
search_exclude: false
---

# SpiderLegsDriver

```csharp
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

	public float3 LegDirection;

	public float3 BodyTiltDirection;

	public float3 BodyProxyPosition;

	public float3 BodyBobVelocity;

	public float3 BodyBobPosition;

	public float StepHeight;

	public float StepSpeed;

	public float SuspensionSpeed;

	public float DefaultAreaRadius;

	public float BodyBobHeight;

	public float BodyBobStrenght;

	public float BodyBobDampening;

	public bool PlayFootstepAudio;

	public bool HasLegMoving;
}
```

## Client Systems

- [GetSpiderLegsSystem](/systems/client/GetSpiderLegsSystem)
- [SetSpiderLegsSystem](/systems/client/SetSpiderLegsSystem)
- [UpdateSpiderLegsSystem](/systems/client/UpdateSpiderLegsSystem)
