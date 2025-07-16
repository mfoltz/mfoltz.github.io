# LinkedEntityGroup

```csharp
[StructLayout(2)]
public struct LinkedEntityGroup
{
	static LinkedEntityGroup()
	{
		Il2CppClassPointerStore<LinkedEntityGroup>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "LinkedEntityGroup");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LinkedEntityGroup>.NativeClassPtr);
		LinkedEntityGroup.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LinkedEntityGroup>.NativeClassPtr, "Value");
		LinkedEntityGroup.NativeMethodInfoPtr_op_Implicit_Public_Static_LinkedEntityGroup_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LinkedEntityGroup>.NativeClassPtr, 100666823);
	}
	[CallerCount(307)]
	[CachedScanResults(RefRangeStart = 1577, RefRangeEnd = 1884, XrefRangeStart = 1577, XrefRangeEnd = 1884, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static implicit operator LinkedEntityGroup(Entity e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LinkedEntityGroup.NativeMethodInfoPtr_op_Implicit_Public_Static_LinkedEntityGroup_Entity_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LinkedEntityGroup>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_LinkedEntityGroup_Entity_0;
	[FieldOffset(0)]
	public Entity Value;
}
