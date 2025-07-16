# NewPrefabsRegisteredEvent

```csharp
[StructLayout(2)]
public struct NewPrefabsRegisteredEvent
{
	static NewPrefabsRegisteredEvent()
	{
		Il2CppClassPointerStore<NewPrefabsRegisteredEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core", "NewPrefabsRegisteredEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NewPrefabsRegisteredEvent>.NativeClassPtr);
		NewPrefabsRegisteredEvent.NativeFieldInfoPtr_SpawnedMidFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NewPrefabsRegisteredEvent>.NativeClassPtr, "SpawnedMidFrame");
		NewPrefabsRegisteredEvent.NativeMethodInfoPtr_SpawnMidFrame_Public_Static_Void_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NewPrefabsRegisteredEvent>.NativeClassPtr, 100663896);
		NewPrefabsRegisteredEvent.NativeMethodInfoPtr_SpawnFromConversionGroup_Public_Static_Void_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NewPrefabsRegisteredEvent>.NativeClassPtr, 100663897);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2236783, XrefRangeEnd = 2236798, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void SpawnMidFrame(EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NewPrefabsRegisteredEvent.NativeMethodInfoPtr_SpawnMidFrame_Public_Static_Void_EntityManager_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2236798, XrefRangeEnd = 2236813, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void SpawnFromConversionGroup(EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NewPrefabsRegisteredEvent.NativeMethodInfoPtr_SpawnFromConversionGroup_Public_Static_Void_EntityManager_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NewPrefabsRegisteredEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnedMidFrame;
	private static readonly IntPtr NativeMethodInfoPtr_SpawnMidFrame_Public_Static_Void_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_SpawnFromConversionGroup_Public_Static_Void_EntityManager_0;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool SpawnedMidFrame;
}
