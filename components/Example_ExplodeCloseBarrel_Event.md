---
nav_exclude: true
search_exclude: true
---

# Example_ExplodeCloseBarrel_Event

```csharp
public struct Example_ExplodeCloseBarrel_Event
{
	static Example_ExplodeCloseBarrel_Event()
	{
		Il2CppClassPointerStore<Example_ExplodeCloseBarrel_Event>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Example_ExplodeCloseBarrel_Event");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Example_ExplodeCloseBarrel_Event>.NativeClassPtr);
		Example_ExplodeCloseBarrel_Event.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Example_ExplodeCloseBarrel_Event>.NativeClassPtr, "Position");
		Example_ExplodeCloseBarrel_Event.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Example_ExplodeCloseBarrel_Event>.NativeClassPtr, "Radius");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Example_ExplodeCloseBarrel_Event>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;

	public float3 Position;

	public float Radius;
}
```
