# EntityOwner

```csharp
[StructLayout(2)]
public struct EntityOwner
{
	static EntityOwner()
	{
		Il2CppClassPointerStore<EntityOwner>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EntityOwner");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EntityOwner>.NativeClassPtr);
		EntityOwner.NativeFieldInfoPtr_Owner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityOwner>.NativeClassPtr, "Owner");
		EntityOwner.NativeMethodInfoPtr_op_Implicit_Public_Static_Entity_EntityOwner_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityOwner>.NativeClassPtr, 100664148);
	}
	[CallerCount(307)]
	[CachedScanResults(RefRangeStart = 1577, RefRangeEnd = 1884, XrefRangeStart = 1577, XrefRangeEnd = 1884, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static implicit operator Entity(EntityOwner entityOwner)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityOwner;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityOwner.NativeMethodInfoPtr_op_Implicit_Public_Static_Entity_EntityOwner_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EntityOwner>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Owner;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_Entity_EntityOwner_0;
	[FieldOffset(0)]
	public Entity Owner;
}
