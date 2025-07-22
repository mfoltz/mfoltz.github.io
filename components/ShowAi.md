---
nav_exclude: true
search_exclude: false
---

# ShowAi

```csharp
public struct ShowAi
{
	static ShowAi()
	{
		Il2CppClassPointerStore<ShowAi>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ShowAi");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShowAi>.NativeClassPtr);
		ShowAi.NativeFieldInfoPtr_DrawUnsmoothedPath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowAi>.NativeClassPtr, "DrawUnsmoothedPath");
		ShowAi.NativeFieldInfoPtr_DrawCurrentTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowAi>.NativeClassPtr, "DrawCurrentTarget");
		ShowAi.NativeFieldInfoPtr_DrawPath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowAi>.NativeClassPtr, "DrawPath");
		ShowAi.NativeFieldInfoPtr_DrawPathfindingPivot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowAi>.NativeClassPtr, "DrawPathfindingPivot");
		ShowAi.NativeFieldInfoPtr_DrawAggro = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowAi>.NativeClassPtr, "DrawAggro");
		ShowAi.NativeFieldInfoPtr_DrawAlert = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowAi>.NativeClassPtr, "DrawAlert");
		ShowAi.NativeFieldInfoPtr_PrintAggroBuffer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowAi>.NativeClassPtr, "PrintAggroBuffer");
		ShowAi.NativeFieldInfoPtr_PrintAlertBuffer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowAi>.NativeClassPtr, "PrintAlertBuffer");
		ShowAi.NativeFieldInfoPtr_DrawState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowAi>.NativeClassPtr, "DrawState");
		ShowAi.NativeFieldInfoPtr_DrawDistances = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowAi>.NativeClassPtr, "DrawDistances");
		ShowAi.NativeFieldInfoPtr_DrawPatrols = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowAi>.NativeClassPtr, "DrawPatrols");
		ShowAi.NativeFieldInfoPtr_DrawPrioritization = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowAi>.NativeClassPtr, "DrawPrioritization");
		ShowAi.NativeFieldInfoPtr_DrawCastOptions = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowAi>.NativeClassPtr, "DrawCastOptions");
		ShowAi.NativeFieldInfoPtr_DrawIdleInteractions = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowAi>.NativeClassPtr, "DrawIdleInteractions");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShowAi>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DrawUnsmoothedPath;
	private static readonly IntPtr NativeFieldInfoPtr_DrawCurrentTarget;
	private static readonly IntPtr NativeFieldInfoPtr_DrawPath;
	private static readonly IntPtr NativeFieldInfoPtr_DrawPathfindingPivot;
	private static readonly IntPtr NativeFieldInfoPtr_DrawAggro;
	private static readonly IntPtr NativeFieldInfoPtr_DrawAlert;
	private static readonly IntPtr NativeFieldInfoPtr_PrintAggroBuffer;
	private static readonly IntPtr NativeFieldInfoPtr_PrintAlertBuffer;
	private static readonly IntPtr NativeFieldInfoPtr_DrawState;
	private static readonly IntPtr NativeFieldInfoPtr_DrawDistances;
	private static readonly IntPtr NativeFieldInfoPtr_DrawPatrols;
	private static readonly IntPtr NativeFieldInfoPtr_DrawPrioritization;
	private static readonly IntPtr NativeFieldInfoPtr_DrawCastOptions;
	private static readonly IntPtr NativeFieldInfoPtr_DrawIdleInteractions;

	public bool DrawUnsmoothedPath;

	public bool DrawCurrentTarget;

	public bool DrawPath;

	public bool DrawPathfindingPivot;

	public bool DrawAggro;

	public bool DrawAlert;

	public bool PrintAggroBuffer;

	public bool PrintAlertBuffer;

	public bool DrawState;

	public bool DrawDistances;

	public bool DrawPatrols;

	public bool DrawPrioritization;

	public bool DrawCastOptions;

	public bool DrawIdleInteractions;
}
```

## Server Systems

- [ShowAiSystem](/systems/server/ShowAiSystem)
