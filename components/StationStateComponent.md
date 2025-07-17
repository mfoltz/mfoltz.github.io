---
nav_exclude: true
search_exclude: true
---

# StationStateComponent

```csharp
[StructLayout(2)]
public struct StationStateComponent
{
	static StationStateComponent()
	{
		Il2CppClassPointerStore<StationStateComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StationStateComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StationStateComponent>.NativeClassPtr);
		StationStateComponent.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StationStateComponent>.NativeClassPtr, "State");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StationStateComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_State;
	[FieldOffset(0)]
	public StationState State;
}
