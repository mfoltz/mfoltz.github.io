---
nav_exclude: true
search_exclude: true
---

```csharp
public struct PriorityEntitiesToSerializeBuffer
{
	static PriorityEntitiesToSerializeBuffer()
	{
		Il2CppClassPointerStore<PriorityEntitiesToSerializeBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "PriorityEntitiesToSerializeBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PriorityEntitiesToSerializeBuffer>.NativeClassPtr);
		PriorityEntitiesToSerializeBuffer.NativeFieldInfoPtr_SnapshotPtr = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PriorityEntitiesToSerializeBuffer>.NativeClassPtr, "SnapshotPtr");
		PriorityEntitiesToSerializeBuffer.NativeFieldInfoPtr_FrameChangedPtr = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PriorityEntitiesToSerializeBuffer>.NativeClassPtr, "FrameChangedPtr");
		PriorityEntitiesToSerializeBuffer.NativeFieldInfoPtr_NetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PriorityEntitiesToSerializeBuffer>.NativeClassPtr, "NetworkId");
		PriorityEntitiesToSerializeBuffer.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PriorityEntitiesToSerializeBuffer>.NativeClassPtr, "Priority");
		PriorityEntitiesToSerializeBuffer.NativeFieldInfoPtr_AttachedParentIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PriorityEntitiesToSerializeBuffer>.NativeClassPtr, "AttachedParentIndex");
		PriorityEntitiesToSerializeBuffer.NativeFieldInfoPtr_AttachedDepth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PriorityEntitiesToSerializeBuffer>.NativeClassPtr, "AttachedDepth");
		PriorityEntitiesToSerializeBuffer.NativeFieldInfoPtr_SyncRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PriorityEntitiesToSerializeBuffer>.NativeClassPtr, "SyncRate");
		PriorityEntitiesToSerializeBuffer.NativeFieldInfoPtr_HasChanges = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PriorityEntitiesToSerializeBuffer>.NativeClassPtr, "HasChanges");
		PriorityEntitiesToSerializeBuffer.NativeFieldInfoPtr_CanTimeout = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PriorityEntitiesToSerializeBuffer>.NativeClassPtr, "CanTimeout");
		PriorityEntitiesToSerializeBuffer.NativeFieldInfoPtr_IsLocalUserEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PriorityEntitiesToSerializeBuffer>.NativeClassPtr, "IsLocalUserEntity");
		PriorityEntitiesToSerializeBuffer.NativeFieldInfoPtr_IsDestroySnapshot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PriorityEntitiesToSerializeBuffer>.NativeClassPtr, "IsDestroySnapshot");
		PriorityEntitiesToSerializeBuffer.NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_PriorityEntitiesToSerializeBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PriorityEntitiesToSerializeBuffer>.NativeClassPtr, 100670525);
	}

	public unsafe int CompareTo(PriorityEntitiesToSerializeBuffer other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PriorityEntitiesToSerializeBuffer.NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_PriorityEntitiesToSerializeBuffer_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PriorityEntitiesToSerializeBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SnapshotPtr;
	private static readonly IntPtr NativeFieldInfoPtr_FrameChangedPtr;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_Priority;
	private static readonly IntPtr NativeFieldInfoPtr_AttachedParentIndex;
	private static readonly IntPtr NativeFieldInfoPtr_AttachedDepth;
	private static readonly IntPtr NativeFieldInfoPtr_SyncRate;
	private static readonly IntPtr NativeFieldInfoPtr_HasChanges;
	private static readonly IntPtr NativeFieldInfoPtr_CanTimeout;
	private static readonly IntPtr NativeFieldInfoPtr_IsLocalUserEntity;
	private static readonly IntPtr NativeFieldInfoPtr_IsDestroySnapshot;
	private static readonly IntPtr NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_PriorityEntitiesToSerializeBuffer_0;

	public IntPtr SnapshotPtr;

	public IntPtr FrameChangedPtr;

	public NetworkId NetworkId;

	public float Priority;

	public int AttachedParentIndex;

	public int AttachedDepth;

	public float SyncRate;

	public bool HasChanges;

	public bool CanTimeout;

	public bool IsLocalUserEntity;

	public bool IsDestroySnapshot;
}
```
