# CharacterHeightHUD

```csharp
[StructLayout(2)]
public struct CharacterHeightHUD
{
	static CharacterHeightHUD()
	{
		Il2CppClassPointerStore<CharacterHeightHUD>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.UI", "CharacterHeightHUD");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CharacterHeightHUD>.NativeClassPtr);
		CharacterHeightHUD.NativeFieldInfoPtr_Height = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterHeightHUD>.NativeClassPtr, "Height");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CharacterHeightHUD>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Height;
	[FieldOffset(0)]
	public ModifiableFloat Height;
}
