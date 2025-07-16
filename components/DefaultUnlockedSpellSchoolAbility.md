# DefaultUnlockedSpellSchoolAbility

```csharp
[StructLayout(2)]
public struct DefaultUnlockedSpellSchoolAbility
{
	static DefaultUnlockedSpellSchoolAbility()
	{
		Il2CppClassPointerStore<DefaultUnlockedSpellSchoolAbility>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DefaultUnlockedSpellSchoolAbility");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DefaultUnlockedSpellSchoolAbility>.NativeClassPtr);
		DefaultUnlockedSpellSchoolAbility.NativeFieldInfoPtr_PrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DefaultUnlockedSpellSchoolAbility>.NativeClassPtr, "PrefabGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DefaultUnlockedSpellSchoolAbility>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGuid;
	[FieldOffset(0)]
	public PrefabGUID PrefabGuid;
}
