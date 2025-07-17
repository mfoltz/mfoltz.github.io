---
nav_exclude: true
search_exclude: true
---

# NetSnapshot

```csharp
[StructLayout(2)]
public struct NetSnapshot
{
	static NetSnapshot()
	{
		Il2CppClassPointerStore<NetSnapshot>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "NetSnapshot");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NetSnapshot>.NativeClassPtr);
		NetSnapshot.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetSnapshot>.NativeClassPtr, "Value");
		NetSnapshot.NativeMethodInfoPtr_GetPrefabGUID_Public_Static_PrefabGUID_IntPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetSnapshot>.NativeClassPtr, 100670252);
		NetSnapshot.NativeMethodInfoPtr_GetSnapshotType_Public_Static_NetworkSnapshotType_IntPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetSnapshot>.NativeClassPtr, 100670253);
	}
	[CallerCount(614)]
	[CachedScanResults(RefRangeStart = 72441, RefRangeEnd = 73055, XrefRangeStart = 72441, XrefRangeEnd = 73055, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static PrefabGUID GetPrefabGUID(IntPtr snapshotBufferPtr)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref snapshotBufferPtr;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetSnapshot.NativeMethodInfoPtr_GetPrefabGUID_Public_Static_PrefabGUID_IntPtr_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1127779, XrefRangeEnd = 1127783, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static NetworkSnapshotType GetSnapshotType(IntPtr snapshotBufferPtr)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref snapshotBufferPtr;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetSnapshot.NativeMethodInfoPtr_GetSnapshotType_Public_Static_NetworkSnapshotType_IntPtr_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NetSnapshot>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_GetPrefabGUID_Public_Static_PrefabGUID_IntPtr_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetSnapshotType_Public_Static_NetworkSnapshotType_IntPtr_0;
	[FieldOffset(0)]
	public byte Value;
}
