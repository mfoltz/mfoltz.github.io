---
nav_exclude: true
search_exclude: true
---

# HealthBarHUD

```csharp
public struct HealthBarHUD
{
	static HealthBarHUD()
	{
		Il2CppClassPointerStore<HealthBarHUD>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.UI", "HealthBarHUD");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HealthBarHUD>.NativeClassPtr);
		HealthBarHUD.NativeFieldInfoPtr_LastHealthChangeTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealthBarHUD>.NativeClassPtr, "LastHealthChangeTime");
		HealthBarHUD.NativeFieldInfoPtr_HealthAnimationDelay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealthBarHUD>.NativeClassPtr, "HealthAnimationDelay");
		HealthBarHUD.NativeFieldInfoPtr_HealthAnimationTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealthBarHUD>.NativeClassPtr, "HealthAnimationTime");
		HealthBarHUD.NativeFieldInfoPtr_StartHealth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealthBarHUD>.NativeClassPtr, "StartHealth");
		HealthBarHUD.NativeFieldInfoPtr_CalculatedHealth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealthBarHUD>.NativeClassPtr, "CalculatedHealth");
		HealthBarHUD.NativeFieldInfoPtr_GoalHealth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealthBarHUD>.NativeClassPtr, "GoalHealth");
		HealthBarHUD.NativeFieldInfoPtr_FadeDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealthBarHUD>.NativeClassPtr, "FadeDistance");
		HealthBarHUD.NativeFieldInfoPtr_LastMaxHealth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealthBarHUD>.NativeClassPtr, "LastMaxHealth");
		HealthBarHUD.NativeFieldInfoPtr_Absorb = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealthBarHUD>.NativeClassPtr, "Absorb");
		HealthBarHUD.NativeFieldInfoPtr_HUDIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealthBarHUD>.NativeClassPtr, "HUDIndex");
		HealthBarHUD.NativeFieldInfoPtr_LastFrameUpdated = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealthBarHUD>.NativeClassPtr, "LastFrameUpdated");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HealthBarHUD>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastHealthChangeTime;
	private static readonly IntPtr NativeFieldInfoPtr_HealthAnimationDelay;
	private static readonly IntPtr NativeFieldInfoPtr_HealthAnimationTime;
	private static readonly IntPtr NativeFieldInfoPtr_StartHealth;
	private static readonly IntPtr NativeFieldInfoPtr_CalculatedHealth;
	private static readonly IntPtr NativeFieldInfoPtr_GoalHealth;
	private static readonly IntPtr NativeFieldInfoPtr_FadeDistance;
	private static readonly IntPtr NativeFieldInfoPtr_LastMaxHealth;
	private static readonly IntPtr NativeFieldInfoPtr_Absorb;
	private static readonly IntPtr NativeFieldInfoPtr_HUDIndex;
	private static readonly IntPtr NativeFieldInfoPtr_LastFrameUpdated;

	public double LastHealthChangeTime;

	public float HealthAnimationDelay;

	public float HealthAnimationTime;

	public float StartHealth;

	public float CalculatedHealth;

	public float GoalHealth;

	public float FadeDistance;

	public float LastMaxHealth;

	public float Absorb;

	public int HUDIndex;

	public int LastFrameUpdated;
}
```
