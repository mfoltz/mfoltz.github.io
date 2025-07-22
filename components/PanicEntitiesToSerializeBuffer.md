---
nav_exclude: true
search_exclude: false
---

# PanicEntitiesToSerializeBuffer

```csharp
public struct PanicEntitiesToSerializeBuffer
{
	static PanicEntitiesToSerializeBuffer()
	{
		Il2CppClassPointerStore<PanicEntitiesToSerializeBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "PanicEntitiesToSerializeBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PanicEntitiesToSerializeBuffer>.NativeClassPtr);
		PanicEntitiesToSerializeBuffer.NativeFieldInfoPtr_SnapshotPtr = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PanicEntitiesToSerializeBuffer>.NativeClassPtr, "SnapshotPtr");
		PanicEntitiesToSerializeBuffer.NativeFieldInfoPtr_FrameChangedPtr = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PanicEntitiesToSerializeBuffer>.NativeClassPtr, "FrameChangedPtr");
		PanicEntitiesToSerializeBuffer.NativeFieldInfoPtr_NetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PanicEntitiesToSerializeBuffer>.NativeClassPtr, "NetworkId");
		PanicEntitiesToSerializeBuffer.NativeFieldInfoPtr_Panic = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PanicEntitiesToSerializeBuffer>.NativeClassPtr, "Panic");
		PanicEntitiesToSerializeBuffer.NativeFieldInfoPtr_AttachedParentIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PanicEntitiesToSerializeBuffer>.NativeClassPtr, "AttachedParentIndex");
		PanicEntitiesToSerializeBuffer.NativeFieldInfoPtr_AttachedDepth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PanicEntitiesToSerializeBuffer>.NativeClassPtr, "AttachedDepth");
		PanicEntitiesToSerializeBuffer.NativeFieldInfoPtr_SyncRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PanicEntitiesToSerializeBuffer>.NativeClassPtr, "SyncRate");
		PanicEntitiesToSerializeBuffer.NativeFieldInfoPtr_HasChanges = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PanicEntitiesToSerializeBuffer>.NativeClassPtr, "HasChanges");
		PanicEntitiesToSerializeBuffer.NativeFieldInfoPtr_CanTimeout = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PanicEntitiesToSerializeBuffer>.NativeClassPtr, "CanTimeout");
		PanicEntitiesToSerializeBuffer.NativeFieldInfoPtr_IsLocalUserEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PanicEntitiesToSerializeBuffer>.NativeClassPtr, "IsLocalUserEntity");
		PanicEntitiesToSerializeBuffer.NativeFieldInfoPtr_IsDestroySnapshot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PanicEntitiesToSerializeBuffer>.NativeClassPtr, "IsDestroySnapshot");
		PanicEntitiesToSerializeBuffer.NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_PanicEntitiesToSerializeBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PanicEntitiesToSerializeBuffer>.NativeClassPtr, 100670526);
	}

	public unsafe int CompareTo(PanicEntitiesToSerializeBuffer other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PanicEntitiesToSerializeBuffer.NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_PanicEntitiesToSerializeBuffer_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PanicEntitiesToSerializeBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SnapshotPtr;
	private static readonly IntPtr NativeFieldInfoPtr_FrameChangedPtr;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_Panic;
	private static readonly IntPtr NativeFieldInfoPtr_AttachedParentIndex;
	private static readonly IntPtr NativeFieldInfoPtr_AttachedDepth;
	private static readonly IntPtr NativeFieldInfoPtr_SyncRate;
	private static readonly IntPtr NativeFieldInfoPtr_HasChanges;
	private static readonly IntPtr NativeFieldInfoPtr_CanTimeout;
	private static readonly IntPtr NativeFieldInfoPtr_IsLocalUserEntity;
	private static readonly IntPtr NativeFieldInfoPtr_IsDestroySnapshot;
	private static readonly IntPtr NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_PanicEntitiesToSerializeBuffer_0;

	public IntPtr SnapshotPtr;

	public IntPtr FrameChangedPtr;

	public NetworkId NetworkId;

	public float Panic;

	public int AttachedParentIndex;

	public int AttachedDepth;

	public float SyncRate;

	public bool HasChanges;

	public bool CanTimeout;

	public bool IsLocalUserEntity;

	public bool IsDestroySnapshot;
}
```
