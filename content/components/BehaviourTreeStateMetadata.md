---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BehaviourTreeStateMetadata
{
	static BehaviourTreeStateMetadata()
	{
		Il2CppClassPointerStore<BehaviourTreeStateMetadata>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Behaviours", "BehaviourTreeStateMetadata");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BehaviourTreeStateMetadata>.NativeClassPtr);
		BehaviourTreeStateMetadata.NativeFieldInfoPtr_PreviousState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeStateMetadata>.NativeClassPtr, "PreviousState");
		BehaviourTreeStateMetadata.NativeFieldInfoPtr_LastChangeTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeStateMetadata>.NativeClassPtr, "LastChangeTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BehaviourTreeStateMetadata>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PreviousState;
	private static readonly IntPtr NativeFieldInfoPtr_LastChangeTime;

	public GenericEnemyState PreviousState;

	public double LastChangeTime;
}
```
