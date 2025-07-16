# ModifyAggroRangesBuffModifications

```csharp
[StructLayout(2)]
public struct ModifyAggroRangesBuffModifications
{
	static ModifyAggroRangesBuffModifications()
	{
		Il2CppClassPointerStore<ModifyAggroRangesBuffModifications>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyAggroRangesBuffModifications");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyAggroRangesBuffModifications>.NativeClassPtr);
		ModifyAggroRangesBuffModifications.NativeFieldInfoPtr_AggroCircleRadiusModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAggroRangesBuffModifications>.NativeClassPtr, "AggroCircleRadiusModId");
		ModifyAggroRangesBuffModifications.NativeFieldInfoPtr_AggroConeRadiusModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAggroRangesBuffModifications>.NativeClassPtr, "AggroConeRadiusModId");
		ModifyAggroRangesBuffModifications.NativeFieldInfoPtr_AlertCircleRadiusModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAggroRangesBuffModifications>.NativeClassPtr, "AlertCircleRadiusModId");
		ModifyAggroRangesBuffModifications.NativeFieldInfoPtr_AlertConeRadiusModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAggroRangesBuffModifications>.NativeClassPtr, "AlertConeRadiusModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyAggroRangesBuffModifications>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AggroCircleRadiusModId;
	private static readonly IntPtr NativeFieldInfoPtr_AggroConeRadiusModId;
	private static readonly IntPtr NativeFieldInfoPtr_AlertCircleRadiusModId;
	private static readonly IntPtr NativeFieldInfoPtr_AlertConeRadiusModId;
	[FieldOffset(0)]
	public ModificationId AggroCircleRadiusModId;
	[FieldOffset(4)]
	public ModificationId AggroConeRadiusModId;
	[FieldOffset(8)]
	public ModificationId AlertCircleRadiusModId;
	[FieldOffset(12)]
	public ModificationId AlertConeRadiusModId;
}
