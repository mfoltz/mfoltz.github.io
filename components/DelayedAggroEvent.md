---
nav_exclude: true
search_exclude: true
---

# DelayedAggroEvent

```csharp
[StructLayout(2)]
public struct DelayedAggroEvent
{
	static DelayedAggroEvent()
	{
		Il2CppClassPointerStore<DelayedAggroEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DelayedAggroEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DelayedAggroEvent>.NativeClassPtr);
		DelayedAggroEvent.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DelayedAggroEvent>.NativeClassPtr, "Source");
		DelayedAggroEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DelayedAggroEvent>.NativeClassPtr, "Target");
		DelayedAggroEvent.NativeFieldInfoPtr_RealizationTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DelayedAggroEvent>.NativeClassPtr, "RealizationTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DelayedAggroEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_RealizationTime;
	[FieldOffset(0)]
	public Entity Source;
	[FieldOffset(8)]
	public Entity Target;
	[FieldOffset(16)]
	public double RealizationTime;
}
