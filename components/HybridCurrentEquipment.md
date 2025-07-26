# HybridCurrentEquipment

```csharp
[StructLayout(2)]
public struct HybridCurrentEquipment
{
	static HybridCurrentEquipment()
	{
		Il2CppClassPointerStore<HybridCurrentEquipment>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "HybridCurrentEquipment");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridCurrentEquipment>.NativeClassPtr);
		HybridCurrentEquipment.NativeFieldInfoPtr_HeadgearSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCurrentEquipment>.NativeClassPtr, "HeadgearSlot");
		HybridCurrentEquipment.NativeFieldInfoPtr_ChestSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCurrentEquipment>.NativeClassPtr, "ChestSlot");
		HybridCurrentEquipment.NativeFieldInfoPtr_FootgearSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCurrentEquipment>.NativeClassPtr, "FootgearSlot");
		HybridCurrentEquipment.NativeFieldInfoPtr_WeaponSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCurrentEquipment>.NativeClassPtr, "WeaponSlot");
		HybridCurrentEquipment.NativeFieldInfoPtr_LegsSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCurrentEquipment>.NativeClassPtr, "LegsSlot");
		HybridCurrentEquipment.NativeFieldInfoPtr_CloakSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCurrentEquipment>.NativeClassPtr, "CloakSlot");
		HybridCurrentEquipment.NativeFieldInfoPtr_GlovesSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCurrentEquipment>.NativeClassPtr, "GlovesSlot");
		HybridCurrentEquipment.NativeFieldInfoPtr_WeaponRunCycle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCurrentEquipment>.NativeClassPtr, "WeaponRunCycle");
		HybridCurrentEquipment.NativeFieldInfoPtr_PrevStreamingCompleteState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCurrentEquipment>.NativeClassPtr, "PrevStreamingCompleteState");
		HybridCurrentEquipment.NativeMethodInfoPtr_GetDefault_Public_Static_HybridCurrentEquipment_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCurrentEquipment>.NativeClassPtr, 100672313);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 138379, XrefRangeEnd = 138380, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static HybridCurrentEquipment GetDefault()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCurrentEquipment.NativeMethodInfoPtr_GetDefault_Public_Static_HybridCurrentEquipment_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridCurrentEquipment>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HeadgearSlot;
	private static readonly IntPtr NativeFieldInfoPtr_ChestSlot;
	private static readonly IntPtr NativeFieldInfoPtr_FootgearSlot;
	private static readonly IntPtr NativeFieldInfoPtr_WeaponSlot;
	private static readonly IntPtr NativeFieldInfoPtr_LegsSlot;
	private static readonly IntPtr NativeFieldInfoPtr_CloakSlot;
	private static readonly IntPtr NativeFieldInfoPtr_GlovesSlot;
	private static readonly IntPtr NativeFieldInfoPtr_WeaponRunCycle;
	private static readonly IntPtr NativeFieldInfoPtr_PrevStreamingCompleteState;
	private static readonly IntPtr NativeMethodInfoPtr_GetDefault_Public_Static_HybridCurrentEquipment_0;
	[FieldOffset(0)]
	public CurrentVisualEquipmentSlot HeadgearSlot;
	[FieldOffset(72)]
	public CurrentVisualEquipmentSlot ChestSlot;
	[FieldOffset(144)]
	public CurrentVisualEquipmentSlot FootgearSlot;
	[FieldOffset(216)]
	public CurrentVisualEquipmentSlot WeaponSlot;
	[FieldOffset(288)]
	public CurrentVisualEquipmentSlot LegsSlot;
	[FieldOffset(360)]
	public CurrentVisualEquipmentSlot CloakSlot;
	[FieldOffset(432)]
	public CurrentVisualEquipmentSlot GlovesSlot;
	[FieldOffset(504)]
	public int WeaponRunCycle;
	[FieldOffset(508)]
	[MarshalAs(4)]
	public bool PrevStreamingCompleteState;
}
