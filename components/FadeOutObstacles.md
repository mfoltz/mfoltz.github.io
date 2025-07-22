---
nav_exclude: true
search_exclude: true
---

# FadeOutObstacles

```csharp
public struct FadeOutObstacles
{
	static FadeOutObstacles()
	{
		Il2CppClassPointerStore<FadeOutObstacles>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "FadeOutObstacles");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FadeOutObstacles>.NativeClassPtr);
		FadeOutObstacles.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeOutObstacles>.NativeClassPtr, "Radius");
		FadeOutObstacles.NativeFieldInfoPtr_MaxHeightDifference = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeOutObstacles>.NativeClassPtr, "MaxHeightDifference");
		FadeOutObstacles.NativeFieldInfoPtr_HeightOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeOutObstacles>.NativeClassPtr, "HeightOffset");
		FadeOutObstacles.NativeFieldInfoPtr_DepthOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeOutObstacles>.NativeClassPtr, "DepthOffset");
		FadeOutObstacles.NativeFieldInfoPtr_Enabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeOutObstacles>.NativeClassPtr, "Enabled");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FadeOutObstacles>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_MaxHeightDifference;
	private static readonly IntPtr NativeFieldInfoPtr_HeightOffset;
	private static readonly IntPtr NativeFieldInfoPtr_DepthOffset;
	private static readonly IntPtr NativeFieldInfoPtr_Enabled;

	public half Radius;

	public half MaxHeightDifference;

	public half HeightOffset;

	public half DepthOffset;

	public ModifiableBool Enabled;
}
```
