# BloodMoonBuffState

```csharp
[StructLayout(2)]
public struct BloodMoonBuffState
{
	static BloodMoonBuffState()
	{
		Il2CppClassPointerStore<BloodMoonBuffState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BloodMoonBuffState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodMoonBuffState>.NativeClassPtr);
		BloodMoonBuffState.NativeFieldInfoPtr_BuffInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodMoonBuffState>.NativeClassPtr, "BuffInstance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodMoonBuffState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffInstance;
	[FieldOffset(0)]
	public Entity BuffInstance;
}
