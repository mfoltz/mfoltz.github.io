---
nav_exclude: true
search_exclude: true
---

# BehaviourTreeStateBuffsBuffer

```csharp
public struct BehaviourTreeStateBuffsBuffer
{
	static BehaviourTreeStateBuffsBuffer()
	{
		Il2CppClassPointerStore<BehaviourTreeStateBuffsBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Behaviours", "BehaviourTreeStateBuffsBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BehaviourTreeStateBuffsBuffer>.NativeClassPtr);
		BehaviourTreeStateBuffsBuffer.NativeFieldInfoPtr_BuffGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeStateBuffsBuffer>.NativeClassPtr, "BuffGuid");
		BehaviourTreeStateBuffsBuffer.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeStateBuffsBuffer>.NativeClassPtr, "State");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BehaviourTreeStateBuffsBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffGuid;
	private static readonly IntPtr NativeFieldInfoPtr_State;

	public PrefabGUID BuffGuid;

	public GenericEnemyState State;
}
```
