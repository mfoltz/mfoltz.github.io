---
nav_exclude: true
search_exclude: true
---

# GraphEvent

```csharp
[StructLayout(2)]
public struct GraphEvent
{
	static GraphEvent()
	{
		Il2CppClassPointerStore<GraphEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "Stunlock.Sequencer", "GraphEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GraphEvent>.NativeClassPtr);
		GraphEvent.NativeFieldInfoPtr_PlaybackType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GraphEvent>.NativeClassPtr, "PlaybackType");
		GraphEvent.NativeFieldInfoPtr_NodeIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GraphEvent>.NativeClassPtr, "NodeIndex");
		GraphEvent.NativeFieldInfoPtr_StartIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GraphEvent>.NativeClassPtr, "StartIndex");
		GraphEvent.NativeFieldInfoPtr_GraphDurationParameterIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GraphEvent>.NativeClassPtr, "GraphDurationParameterIndex");
		GraphEvent.NativeFieldInfoPtr_GraphTimeParameterIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GraphEvent>.NativeClassPtr, "GraphTimeParameterIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GraphEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PlaybackType;
	private static readonly IntPtr NativeFieldInfoPtr_NodeIndex;
	private static readonly IntPtr NativeFieldInfoPtr_StartIndex;
	private static readonly IntPtr NativeFieldInfoPtr_GraphDurationParameterIndex;
	private static readonly IntPtr NativeFieldInfoPtr_GraphTimeParameterIndex;
	[FieldOffset(0)]
	public GraphPlaybackType PlaybackType;
	[FieldOffset(4)]
	public int NodeIndex;
	[FieldOffset(8)]
	public int StartIndex;
	[FieldOffset(12)]
	public int GraphDurationParameterIndex;
	[FieldOffset(16)]
	public int GraphTimeParameterIndex;
}
