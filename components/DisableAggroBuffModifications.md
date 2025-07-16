# DisableAggroBuffModifications

```csharp
[StructLayout(2)]
public struct DisableAggroBuffModifications
{
	static DisableAggroBuffModifications()
	{
		Il2CppClassPointerStore<DisableAggroBuffModifications>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DisableAggroBuffModifications");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DisableAggroBuffModifications>.NativeClassPtr);
		DisableAggroBuffModifications.NativeFieldInfoPtr_OthersDontAttackTargetModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableAggroBuffModifications>.NativeClassPtr, "OthersDontAttackTargetModId");
		DisableAggroBuffModifications.NativeFieldInfoPtr_TargetDontAttackOthersModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableAggroBuffModifications>.NativeClassPtr, "TargetDontAttackOthersModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DisableAggroBuffModifications>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OthersDontAttackTargetModId;
	private static readonly IntPtr NativeFieldInfoPtr_TargetDontAttackOthersModId;
	[FieldOffset(0)]
	public ModificationId OthersDontAttackTargetModId;
	[FieldOffset(4)]
	public ModificationId TargetDontAttackOthersModId;
}
