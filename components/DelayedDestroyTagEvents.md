# DelayedDestroyTagEvents

```csharp
[StructLayout(2)]
public struct DelayedDestroyTagEvents
{
	static DelayedDestroyTagEvents()
	{
		Il2CppClassPointerStore<DelayedDestroyTagEvents>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DelayedDestroyTagEvents");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DelayedDestroyTagEvents>.NativeClassPtr);
		DelayedDestroyTagEvents.NativeFieldInfoPtr_Events = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DelayedDestroyTagEvents>.NativeClassPtr, "Events");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DelayedDestroyTagEvents>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Events;
	[FieldOffset(0)]
	public NativeList<DestroyTagEvent> Events;
}
