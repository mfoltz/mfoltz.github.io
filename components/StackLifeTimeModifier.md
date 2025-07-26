# StackLifeTimeModifier

```csharp
[StructLayout(2)]
public struct StackLifeTimeModifier
{
	static StackLifeTimeModifier()
	{
		Il2CppClassPointerStore<StackLifeTimeModifier>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StackLifeTimeModifier");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StackLifeTimeModifier>.NativeClassPtr);
		StackLifeTimeModifier.NativeFieldInfoPtr_BaseValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StackLifeTimeModifier>.NativeClassPtr, "BaseValue");
		StackLifeTimeModifier.NativeFieldInfoPtr_Modifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StackLifeTimeModifier>.NativeClassPtr, "Modifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StackLifeTimeModifier>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BaseValue;
	private static readonly IntPtr NativeFieldInfoPtr_Modifier;
	[FieldOffset(0)]
	public float BaseValue;
	[FieldOffset(4)]
	public float Modifier;
}
