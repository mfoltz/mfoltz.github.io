# FortifyBuff

```csharp
[StructLayout(2)]
public struct FortifyBuff
{
	static FortifyBuff()
	{
		Il2CppClassPointerStore<FortifyBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "FortifyBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FortifyBuff>.NativeClassPtr);
		FortifyBuff.NativeFieldInfoPtr_FortifyModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FortifyBuff>.NativeClassPtr, "FortifyModifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FortifyBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FortifyModifier;
	[FieldOffset(0)]
	public float FortifyModifier;
}
