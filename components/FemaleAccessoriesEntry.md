# FemaleAccessoriesEntry

```csharp
[StructLayout(2)]
public struct FemaleAccessoriesEntry
{
	static FemaleAccessoriesEntry()
	{
		Il2CppClassPointerStore<FemaleAccessoriesEntry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "FemaleAccessoriesEntry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FemaleAccessoriesEntry>.NativeClassPtr);
		FemaleAccessoriesEntry.NativeFieldInfoPtr_Requirement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FemaleAccessoriesEntry>.NativeClassPtr, "Requirement");
		FemaleAccessoriesEntry.NativeMethodInfoPtr_get_RequirementRO_Public_Virtual_Final_New_get_UserContentFlags_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<FemaleAccessoriesEntry>.NativeClassPtr, 100663924);
	}
	public unsafe UserContentFlags RequirementRO
	{
		[CallerCount(614)]
		[CachedScanResults(RefRangeStart = 72441, RefRangeEnd = 73055, XrefRangeStart = 72441, XrefRangeEnd = 73055, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(FemaleAccessoriesEntry.NativeMethodInfoPtr_get_RequirementRO_Public_Virtual_Final_New_get_UserContentFlags_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FemaleAccessoriesEntry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Requirement;
	private static readonly IntPtr NativeMethodInfoPtr_get_RequirementRO_Public_Virtual_Final_New_get_UserContentFlags_0;
	[FieldOffset(0)]
	public UserContentFlags Requirement;
}
