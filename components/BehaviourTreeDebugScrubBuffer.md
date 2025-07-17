---
nav_exclude: true
search_exclude: true
---

# BehaviourTreeDebugScrubBuffer

```csharp
public struct BehaviourTreeDebugScrubBuffer
{
	static BehaviourTreeDebugScrubBuffer()
	{
		Il2CppClassPointerStore<BehaviourTreeDebugScrubBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Behaviours.dll", "ProjectM.Behaviours", "BehaviourTreeDebugScrubBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BehaviourTreeDebugScrubBuffer>.NativeClassPtr);
		BehaviourTreeDebugScrubBuffer.NativeFieldInfoPtr_SnapshotType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeDebugScrubBuffer>.NativeClassPtr, "SnapshotType");
		BehaviourTreeDebugScrubBuffer.NativeFieldInfoPtr_SnapshotId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeDebugScrubBuffer>.NativeClassPtr, "SnapshotId");
		BehaviourTreeDebugScrubBuffer.NativeFieldInfoPtr_ServerFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeDebugScrubBuffer>.NativeClassPtr, "ServerFrame");
		BehaviourTreeDebugScrubBuffer.NativeFieldInfoPtr_ExecutedNodeIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeDebugScrubBuffer>.NativeClassPtr, "ExecutedNodeIndex");
		BehaviourTreeDebugScrubBuffer.NativeFieldInfoPtr_ExecutionResult = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeDebugScrubBuffer>.NativeClassPtr, "ExecutionResult");
		BehaviourTreeDebugScrubBuffer.NativeFieldInfoPtr_BlackboardSnapshotStartIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeDebugScrubBuffer>.NativeClassPtr, "BlackboardSnapshotStartIndex");
		BehaviourTreeDebugScrubBuffer.NativeMethodInfoPtr_get_IsUsed_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BehaviourTreeDebugScrubBuffer>.NativeClassPtr, 100665708);
	}
	public unsafe bool IsUsed
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BehaviourTreeDebugScrubBuffer.NativeMethodInfoPtr_get_IsUsed_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BehaviourTreeDebugScrubBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SnapshotType;
	private static readonly IntPtr NativeFieldInfoPtr_SnapshotId;
	private static readonly IntPtr NativeFieldInfoPtr_ServerFrame;
	private static readonly IntPtr NativeFieldInfoPtr_ExecutedNodeIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ExecutionResult;
	private static readonly IntPtr NativeFieldInfoPtr_BlackboardSnapshotStartIndex;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsUsed_Public_get_Boolean_0;

	public BehaviourSnapshotType SnapshotType;

	public int SnapshotId;

	public int ServerFrame;

	public ushort ExecutedNodeIndex;

	public Nullable_Unboxed<BehaviourTreeResult> ExecutionResult;

	public int BlackboardSnapshotStartIndex;
}
```
