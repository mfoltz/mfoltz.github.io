# LimitAbilityPriorityModifications

```csharp
[StructLayout(2)]
public struct LimitAbilityPriorityModifications
{
	static LimitAbilityPriorityModifications()
	{
		Il2CppClassPointerStore<LimitAbilityPriorityModifications>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "LimitAbilityPriorityModifications");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LimitAbilityPriorityModifications>.NativeClassPtr);
		LimitAbilityPriorityModifications.NativeFieldInfoPtr_LimitAbilityPriorityModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LimitAbilityPriorityModifications>.NativeClassPtr, "LimitAbilityPriorityModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LimitAbilityPriorityModifications>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LimitAbilityPriorityModificationId;
	[FieldOffset(0)]
	public ModificationId LimitAbilityPriorityModificationId;
}
