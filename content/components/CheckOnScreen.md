---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CheckOnScreen
{
	static CheckOnScreen()
	{
		Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CheckOnScreen");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr);
		CheckOnScreen.NativeFieldInfoPtr_ScreenPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr, "ScreenPosition");
		CheckOnScreen.NativeFieldInfoPtr_PixelOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr, "PixelOffset");
		CheckOnScreen.NativeFieldInfoPtr_MaxDistanceForHudAndFadeOut = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr, "MaxDistanceForHudAndFadeOut");
		CheckOnScreen.NativeFieldInfoPtr_IgnoreLineOfSight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr, "IgnoreLineOfSight");
		CheckOnScreen.NativeFieldInfoPtr_IsOnScreen = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr, "IsOnScreen");
		CheckOnScreen.NativeFieldInfoPtr_HasLineOfSight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr, "HasLineOfSight");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ScreenPosition;
	private static readonly IntPtr NativeFieldInfoPtr_PixelOffset;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDistanceForHudAndFadeOut;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreLineOfSight;
	private static readonly IntPtr NativeFieldInfoPtr_IsOnScreen;
	private static readonly IntPtr NativeFieldInfoPtr_HasLineOfSight;

	public float3 ScreenPosition;

	public float PixelOffset;

	public float MaxDistanceForHudAndFadeOut;

	public bool IgnoreLineOfSight;

	public bool IsOnScreen;

	public bool HasLineOfSight;
}
```

## Client Systems

- [ReservedEnemyTeamSystem]({{% relref "systems/client/ReservedEnemyTeamSystem.md" %}})
