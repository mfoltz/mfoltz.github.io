# AbilitySpellModItem

```csharp
[StructLayout(2)]
public struct AbilitySpellModItem
{
	static AbilitySpellModItem()
	{
		Il2CppClassPointerStore<AbilitySpellModItem>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "AbilitySpellModItem");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilitySpellModItem>.NativeClassPtr);
		AbilitySpellModItem.NativeFieldInfoPtr_SpellModItem = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySpellModItem>.NativeClassPtr, "SpellModItem");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilitySpellModItem>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellModItem;
	[FieldOffset(0)]
	public NetworkedEntity SpellModItem;
}
