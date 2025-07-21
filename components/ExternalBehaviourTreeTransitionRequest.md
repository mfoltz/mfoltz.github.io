---
nav_exclude: true
search_exclude: false
---

# ExternalBehaviourTreeTransitionRequest

```csharp
public struct ExternalBehaviourTreeTransitionRequest
{
	static ExternalBehaviourTreeTransitionRequest()
	{
		Il2CppClassPointerStore<ExternalBehaviourTreeTransitionRequest>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Behaviours", "ExternalBehaviourTreeTransitionRequest");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ExternalBehaviourTreeTransitionRequest>.NativeClassPtr);
		ExternalBehaviourTreeTransitionRequest.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ExternalBehaviourTreeTransitionRequest>.NativeClassPtr, "State");
		ExternalBehaviourTreeTransitionRequest.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ExternalBehaviourTreeTransitionRequest>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ExternalBehaviourTreeTransitionRequest>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_State;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;

	public GenericEnemyState State;

	public Entity Entity;
}
```
