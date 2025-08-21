---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BehaviourTreeDebugScrubData
{
	static BehaviourTreeDebugScrubData()
	{
		Il2CppClassPointerStore<BehaviourTreeDebugScrubData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Behaviours.dll", "ProjectM.Behaviours", "BehaviourTreeDebugScrubData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BehaviourTreeDebugScrubData>.NativeClassPtr);
		BehaviourTreeDebugScrubData.NativeFieldInfoPtr_SnapshotIdTracker = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeDebugScrubData>.NativeClassPtr, "SnapshotIdTracker");
		BehaviourTreeDebugScrubData.NativeFieldInfoPtr_SnapshotCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeDebugScrubData>.NativeClassPtr, "SnapshotCount");
		BehaviourTreeDebugScrubData.NativeFieldInfoPtr_BlackboardSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeDebugScrubData>.NativeClassPtr, "BlackboardSize");
		BehaviourTreeDebugScrubData.NativeMethodInfoPtr_GetSnapshotIndexForId_Public_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BehaviourTreeDebugScrubData>.NativeClassPtr, 100665707);
	}

	public unsafe int GetSnapshotIndexForId(int snapshotId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref snapshotId;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BehaviourTreeDebugScrubData.NativeMethodInfoPtr_GetSnapshotIndexForId_Public_Int32_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BehaviourTreeDebugScrubData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SnapshotIdTracker;
	private static readonly IntPtr NativeFieldInfoPtr_SnapshotCount;
	private static readonly IntPtr NativeFieldInfoPtr_BlackboardSize;
	private static readonly IntPtr NativeMethodInfoPtr_GetSnapshotIndexForId_Public_Int32_Int32_0;

	public int SnapshotIdTracker;

	public int SnapshotCount;

	public int BlackboardSize;
}
```
