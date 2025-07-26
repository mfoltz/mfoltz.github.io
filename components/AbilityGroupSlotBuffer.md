# AbilityGroupSlotBuffer

```csharp
[StructLayout(2)]
public struct AbilityGroupSlotBuffer
{
	static AbilityGroupSlotBuffer()
	{
		Il2CppClassPointerStore<AbilityGroupSlotBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityGroupSlotBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityGroupSlotBuffer>.NativeClassPtr);
		AbilityGroupSlotBuffer.NativeFieldInfoPtr_SLOTS_ON_BAR = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlotBuffer>.NativeClassPtr, "SLOTS_ON_BAR");
		AbilityGroupSlotBuffer.NativeFieldInfoPtr_BaseAbilityGroupOnSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlotBuffer>.NativeClassPtr, "BaseAbilityGroupOnSlot");
		AbilityGroupSlotBuffer.NativeFieldInfoPtr_ShowOnBar = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlotBuffer>.NativeClassPtr, "ShowOnBar");
		AbilityGroupSlotBuffer.NativeFieldInfoPtr_GroupSlotEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlotBuffer>.NativeClassPtr, "GroupSlotEntity");
		AbilityGroupSlotBuffer.NativeMethodInfoPtr_get_IsSlotEntityInitialized_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityGroupSlotBuffer>.NativeClassPtr, 100664241);
	}
	public unsafe bool IsSlotEntityInitialized
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1057722, XrefRangeEnd = 1057726, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityGroupSlotBuffer.NativeMethodInfoPtr_get_IsSlotEntityInitialized_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityGroupSlotBuffer>.NativeClassPtr, ref this));
	}
	public unsafe static int SLOTS_ON_BAR
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(AbilityGroupSlotBuffer.NativeFieldInfoPtr_SLOTS_ON_BAR, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(AbilityGroupSlotBuffer.NativeFieldInfoPtr_SLOTS_ON_BAR, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_SLOTS_ON_BAR;
	private static readonly IntPtr NativeFieldInfoPtr_BaseAbilityGroupOnSlot;
	private static readonly IntPtr NativeFieldInfoPtr_ShowOnBar;
	private static readonly IntPtr NativeFieldInfoPtr_GroupSlotEntity;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsSlotEntityInitialized_Public_get_Boolean_0;
	[FieldOffset(0)]
	public PrefabGUID BaseAbilityGroupOnSlot;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool ShowOnBar;
	[FieldOffset(8)]
	public NetworkedEntity GroupSlotEntity;
}
