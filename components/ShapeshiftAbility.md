# ShapeshiftAbility

```csharp
[StructLayout(2)]
public struct ShapeshiftAbility
{
	static ShapeshiftAbility()
	{
		Il2CppClassPointerStore<ShapeshiftAbility>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ShapeshiftAbility");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShapeshiftAbility>.NativeClassPtr);
		ShapeshiftAbility.NativeFieldInfoPtr_ShapeshiftAbilityId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShapeshiftAbility>.NativeClassPtr, "ShapeshiftAbilityId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShapeshiftAbility>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ShapeshiftAbilityId;
	[FieldOffset(0)]
	public PrefabGUID ShapeshiftAbilityId;
}
