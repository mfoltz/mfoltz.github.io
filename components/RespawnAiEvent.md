---
nav_exclude: true
search_exclude: true
---

# RespawnAiEvent

```csharp
[StructLayout(2)]
public struct RespawnAiEvent
{
	static RespawnAiEvent()
	{
		Il2CppClassPointerStore<RespawnAiEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RespawnAiEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RespawnAiEvent>.NativeClassPtr);
		RespawnAiEvent.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnAiEvent>.NativeClassPtr, "State");
		RespawnAiEvent.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnAiEvent>.NativeClassPtr, "Position");
		RespawnAiEvent.NativeFieldInfoPtr_Range = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnAiEvent>.NativeClassPtr, "Range");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RespawnAiEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_State;
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Range;
	[FieldOffset(0)]
	public RespawnAiEventState State;
	[FieldOffset(4)]
	public float3 Position;
	[FieldOffset(16)]
	public int Range;
}
