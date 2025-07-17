---
nav_exclude: true
search_exclude: true
---

# BehaviourTreeStateChangedEvent

```csharp
[StructLayout(2)]
public struct BehaviourTreeStateChangedEvent
{
	static BehaviourTreeStateChangedEvent()
	{
		Il2CppClassPointerStore<BehaviourTreeStateChangedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Behaviours", "BehaviourTreeStateChangedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BehaviourTreeStateChangedEvent>.NativeClassPtr);
		BehaviourTreeStateChangedEvent.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeStateChangedEvent>.NativeClassPtr, "Entity");
		BehaviourTreeStateChangedEvent.NativeFieldInfoPtr_PreviousState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeStateChangedEvent>.NativeClassPtr, "PreviousState");
		BehaviourTreeStateChangedEvent.NativeFieldInfoPtr_NewState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeStateChangedEvent>.NativeClassPtr, "NewState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BehaviourTreeStateChangedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_PreviousState;
	private static readonly IntPtr NativeFieldInfoPtr_NewState;
	[FieldOffset(0)]
	public Entity Entity;
	[FieldOffset(8)]
	public GenericEnemyState PreviousState;
	[FieldOffset(12)]
	public GenericEnemyState NewState;
}
