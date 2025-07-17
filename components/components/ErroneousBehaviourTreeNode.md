---
nav_exclude: true
search_exclude: true
---

# ErroneousBehaviourTreeNode

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public FixedString128Bytes Message;
	[FieldOffset(128)]
	public Entity Subject;
	[FieldOffset(136)]
	public Entity BehaviourTree;
	[FieldOffset(144)]
	public GenericEnemyState State;
	[FieldOffset(148)]
	public ushort NodeIndex;
	[FieldOffset(150)]
	public ushort ChildNodeIndex;
}
