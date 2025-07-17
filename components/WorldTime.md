---
nav_exclude: true
search_exclude: true
---

# WorldTime

```csharp
[StructLayout(2)]
public struct WorldTime
{
	static WorldTime()
	{
		Il2CppClassPointerStore<WorldTime>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "WorldTime");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorldTime>.NativeClassPtr);
		WorldTime.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldTime>.NativeClassPtr, "Time");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorldTime>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	[FieldOffset(0)]
	public TimeData Time;
}
