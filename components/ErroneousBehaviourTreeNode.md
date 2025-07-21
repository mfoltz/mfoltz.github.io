---
nav_exclude: true
search_exclude: false
---

# ErroneousBehaviourTreeNode

```csharp
public struct ErroneousBehaviourTreeNode
{
	static ErroneousBehaviourTreeNode()
	{
		Il2CppClassPointerStore<ErroneousBehaviourTreeNode>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Behaviours.dll", "ProjectM.Behaviours", "ErroneousBehaviourTreeNode");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ErroneousBehaviourTreeNode>.NativeClassPtr);
		ErroneousBehaviourTreeNode.NativeFieldInfoPtr_Message = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ErroneousBehaviourTreeNode>.NativeClassPtr, "Message");
		ErroneousBehaviourTreeNode.NativeFieldInfoPtr_Subject = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ErroneousBehaviourTreeNode>.NativeClassPtr, "Subject");
		ErroneousBehaviourTreeNode.NativeFieldInfoPtr_BehaviourTree = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ErroneousBehaviourTreeNode>.NativeClassPtr, "BehaviourTree");
		ErroneousBehaviourTreeNode.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ErroneousBehaviourTreeNode>.NativeClassPtr, "State");
		ErroneousBehaviourTreeNode.NativeFieldInfoPtr_NodeIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ErroneousBehaviourTreeNode>.NativeClassPtr, "NodeIndex");
		ErroneousBehaviourTreeNode.NativeFieldInfoPtr_ChildNodeIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ErroneousBehaviourTreeNode>.NativeClassPtr, "ChildNodeIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ErroneousBehaviourTreeNode>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Message;
	private static readonly IntPtr NativeFieldInfoPtr_Subject;
	private static readonly IntPtr NativeFieldInfoPtr_BehaviourTree;
	private static readonly IntPtr NativeFieldInfoPtr_State;
	private static readonly IntPtr NativeFieldInfoPtr_NodeIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ChildNodeIndex;

	public FixedString128Bytes Message;

	public Entity Subject;

	public Entity BehaviourTree;

	public GenericEnemyState State;

	public ushort NodeIndex;

	public ushort ChildNodeIndex;
}
```

## Server Systems

- [LogErroneousBehaviourTreeNodeSystem](/systems/server/LogErroneousBehaviourTreeNodeSystem)
