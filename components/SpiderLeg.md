---
nav_exclude: true
search_exclude: true
---

# SpiderLeg

```csharp
[StructLayout(2)]
public struct SpiderLeg
{
	static SpiderLeg()
	{
		Il2CppClassPointerStore<SpiderLeg>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "SpiderLeg");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpiderLeg>.NativeClassPtr);
		SpiderLeg.NativeFieldInfoPtr_GoalPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLeg>.NativeClassPtr, "GoalPosition");
		SpiderLeg.NativeFieldInfoPtr_OldGoalPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLeg>.NativeClassPtr, "OldGoalPosition");
		SpiderLeg.NativeFieldInfoPtr_CurrentPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLeg>.NativeClassPtr, "CurrentPosition");
		SpiderLeg.NativeFieldInfoPtr_LastPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLeg>.NativeClassPtr, "LastPosition");
		SpiderLeg.NativeFieldInfoPtr_DefaultPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLeg>.NativeClassPtr, "DefaultPosition");
		SpiderLeg.NativeFieldInfoPtr_Velocity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLeg>.NativeClassPtr, "Velocity");
		SpiderLeg.NativeFieldInfoPtr_StepDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLeg>.NativeClassPtr, "StepDirection");
		SpiderLeg.NativeFieldInfoPtr_StepLerp = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLeg>.NativeClassPtr, "StepLerp");
		SpiderLeg.NativeFieldInfoPtr_SuspensionLerp = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLeg>.NativeClassPtr, "SuspensionLerp");
		SpiderLeg.NativeFieldInfoPtr_SuspensionScale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLeg>.NativeClassPtr, "SuspensionScale");
		SpiderLeg.NativeFieldInfoPtr_IKPositionWeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLeg>.NativeClassPtr, "IKPositionWeight");
		SpiderLeg.NativeFieldInfoPtr_IsMoving = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpiderLeg>.NativeClassPtr, "IsMoving");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpiderLeg>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GoalPosition;
	private static readonly IntPtr NativeFieldInfoPtr_OldGoalPosition;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentPosition;
	private static readonly IntPtr NativeFieldInfoPtr_LastPosition;
	private static readonly IntPtr NativeFieldInfoPtr_DefaultPosition;
	private static readonly IntPtr NativeFieldInfoPtr_Velocity;
	private static readonly IntPtr NativeFieldInfoPtr_StepDirection;
	private static readonly IntPtr NativeFieldInfoPtr_StepLerp;
	private static readonly IntPtr NativeFieldInfoPtr_SuspensionLerp;
	private static readonly IntPtr NativeFieldInfoPtr_SuspensionScale;
	private static readonly IntPtr NativeFieldInfoPtr_IKPositionWeight;
	private static readonly IntPtr NativeFieldInfoPtr_IsMoving;
	[FieldOffset(0)]
	public float3 GoalPosition;
	[FieldOffset(12)]
	public float3 OldGoalPosition;
	[FieldOffset(24)]
	public float3 CurrentPosition;
	[FieldOffset(36)]
	public float3 LastPosition;
	[FieldOffset(48)]
	public float3 DefaultPosition;
	[FieldOffset(60)]
	public float3 Velocity;
	[FieldOffset(72)]
	public float3 StepDirection;
	[FieldOffset(84)]
	public float StepLerp;
	[FieldOffset(88)]
	public float SuspensionLerp;
	[FieldOffset(92)]
	public float SuspensionScale;
	[FieldOffset(96)]
	public float IKPositionWeight;
	[FieldOffset(100)]
	[MarshalAs(4)]
	public bool IsMoving;
}
