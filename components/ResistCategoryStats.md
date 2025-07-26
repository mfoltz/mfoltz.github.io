# ResistCategoryStats

```csharp
[Serializable]
[StructLayout(2)]
public struct ResistCategoryStats
{
	static ResistCategoryStats()
	{
		Il2CppClassPointerStore<ResistCategoryStats>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ResistCategoryStats");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ResistCategoryStats>.NativeClassPtr);
		ResistCategoryStats.NativeFieldInfoPtr_ResistVsUndeads = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistCategoryStats>.NativeClassPtr, "ResistVsUndeads");
		ResistCategoryStats.NativeFieldInfoPtr_ResistVsHumans = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistCategoryStats>.NativeClassPtr, "ResistVsHumans");
		ResistCategoryStats.NativeFieldInfoPtr_ResistVsDemons = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistCategoryStats>.NativeClassPtr, "ResistVsDemons");
		ResistCategoryStats.NativeFieldInfoPtr_ResistVsMechanical = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistCategoryStats>.NativeClassPtr, "ResistVsMechanical");
		ResistCategoryStats.NativeFieldInfoPtr_ResistVsBeasts = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistCategoryStats>.NativeClassPtr, "ResistVsBeasts");
		ResistCategoryStats.NativeFieldInfoPtr_ResistVsVampires = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResistCategoryStats>.NativeClassPtr, "ResistVsVampires");
		ResistCategoryStats.NativeMethodInfoPtr_Default_Public_Static_ResistCategoryStats_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ResistCategoryStats>.NativeClassPtr, 100668089);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1103750, RefRangeEnd = 1103751, XrefRangeStart = 1103750, XrefRangeEnd = 1103750, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static ResistCategoryStats Default()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ResistCategoryStats.NativeMethodInfoPtr_Default_Public_Static_ResistCategoryStats_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ResistCategoryStats>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ResistVsUndeads;
	private static readonly IntPtr NativeFieldInfoPtr_ResistVsHumans;
	private static readonly IntPtr NativeFieldInfoPtr_ResistVsDemons;
	private static readonly IntPtr NativeFieldInfoPtr_ResistVsMechanical;
	private static readonly IntPtr NativeFieldInfoPtr_ResistVsBeasts;
	private static readonly IntPtr NativeFieldInfoPtr_ResistVsVampires;
	private static readonly IntPtr NativeMethodInfoPtr_Default_Public_Static_ResistCategoryStats_0;
	[FieldOffset(0)]
	public ModifiableFloat ResistVsUndeads;
	[FieldOffset(4)]
	public ModifiableFloat ResistVsHumans;
	[FieldOffset(8)]
	public ModifiableFloat ResistVsDemons;
	[FieldOffset(12)]
	public ModifiableFloat ResistVsMechanical;
	[FieldOffset(16)]
	public ModifiableFloat ResistVsBeasts;
	[FieldOffset(20)]
	public ModifiableFloat ResistVsVampires;
}
