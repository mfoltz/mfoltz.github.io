# WorldTimeQueue

```csharp
[StructLayout(2)]
public struct WorldTimeQueue
{
	static WorldTimeQueue()
	{
		Il2CppClassPointerStore<WorldTimeQueue>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "WorldTimeQueue");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorldTimeQueue>.NativeClassPtr);
		WorldTimeQueue.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldTimeQueue>.NativeClassPtr, "Time");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorldTimeQueue>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	[FieldOffset(0)]
	public TimeData Time;
}
