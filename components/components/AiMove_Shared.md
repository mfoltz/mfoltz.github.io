---
nav_exclude: true
search_exclude: true
---

# AiMove_Shared

```csharp
[StructLayout(2)]
public struct AiMove_Shared
{
	static AiMove_Shared()
	{
		Il2CppClassPointerStore<AiMove_Shared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AiMove_Shared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AiMove_Shared>.NativeClassPtr);
		AiMove_Shared.NativeFieldInfoPtr_Waypoints = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Shared>.NativeClassPtr, "Waypoints");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AiMove_Shared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Waypoints;
	[FieldOffset(0)]
	public PathWaypoints Waypoints;
}
