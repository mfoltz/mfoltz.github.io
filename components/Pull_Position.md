---
nav_exclude: true
search_exclude: false
---

# Pull_Position

```csharp
public struct Pull_Position
{
	static Pull_Position()
	{
		Il2CppClassPointerStore<Pull_Position>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer", "Pull_Position");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Pull_Position>.NativeClassPtr);
		Pull_Position.NativeFieldInfoPtr_BlackboardIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Pull_Position>.NativeClassPtr, "BlackboardIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Pull_Position>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BlackboardIndex;

	public int BlackboardIndex;
}
```

## Client Systems

- [Pull_PositionSystem](/systems/client/Pull_PositionSystem)
