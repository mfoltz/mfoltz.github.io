# ModifyObstacleFadeoutModifications

```csharp
[StructLayout(2)]
public struct ModifyObstacleFadeoutModifications
{
	static ModifyObstacleFadeoutModifications()
	{
		Il2CppClassPointerStore<ModifyObstacleFadeoutModifications>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyObstacleFadeoutModifications");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyObstacleFadeoutModifications>.NativeClassPtr);
		ModifyObstacleFadeoutModifications.NativeFieldInfoPtr_EnabledModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyObstacleFadeoutModifications>.NativeClassPtr, "EnabledModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyObstacleFadeoutModifications>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EnabledModificationId;
	[FieldOffset(0)]
	public ModificationId EnabledModificationId;
}
