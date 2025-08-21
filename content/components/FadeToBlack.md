---
nav_exclude: true
search_exclude: true
---

```csharp
public struct FadeToBlack
{
	static FadeToBlack()
	{
		Il2CppClassPointerStore<FadeToBlack>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "FadeToBlack");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FadeToBlack>.NativeClassPtr);
		FadeToBlack.NativeFieldInfoPtr_ActiveTimeline = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeToBlack>.NativeClassPtr, "ActiveTimeline");
		FadeToBlack.NativeFieldInfoPtr_Curve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeToBlack>.NativeClassPtr, "Curve");
		FadeToBlack.NativeFieldInfoPtr_CurrentValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeToBlack>.NativeClassPtr, "CurrentValue");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FadeToBlack>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ActiveTimeline;
	private static readonly IntPtr NativeFieldInfoPtr_Curve;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentValue;

	public MinMaxValue ActiveTimeline;

	public CurveReference Curve;

	public float CurrentValue;
}
```

## Server Systems

- [FadeToBlackSystem_Server]({{% relref "systems/server/FadeToBlackSystem_Server.md" %}})

## Client Systems

- [FadeToBlackSystem_Client]({{% relref "systems/client/FadeToBlackSystem_Client.md" %}})
