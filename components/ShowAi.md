---
nav_exclude: true
search_exclude: true
---

# ShowAi

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool DrawUnsmoothedPath;
	[FieldOffset(1)]
	[MarshalAs(4)]
	public bool DrawCurrentTarget;
	[FieldOffset(2)]
	[MarshalAs(4)]
	public bool DrawPath;
	[FieldOffset(3)]
	[MarshalAs(4)]
	public bool DrawPathfindingPivot;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool DrawAggro;
	[FieldOffset(5)]
	[MarshalAs(4)]
	public bool DrawAlert;
	[FieldOffset(6)]
	[MarshalAs(4)]
	public bool PrintAggroBuffer;
	[FieldOffset(7)]
	[MarshalAs(4)]
	public bool PrintAlertBuffer;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool DrawState;
	[FieldOffset(9)]
	[MarshalAs(4)]
	public bool DrawDistances;
	[FieldOffset(10)]
	[MarshalAs(4)]
	public bool DrawPatrols;
	[FieldOffset(11)]
	[MarshalAs(4)]
	public bool DrawPrioritization;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool DrawCastOptions;
	[FieldOffset(13)]
	[MarshalAs(4)]
	public bool DrawIdleInteractions;
}
