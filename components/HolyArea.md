# HolyArea

```csharp
[StructLayout(2)]
public struct HolyArea
{
	static HolyArea()
	{
		Il2CppClassPointerStore<HolyArea>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Gameplay.Scripting", "HolyArea");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HolyArea>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HolyArea>.NativeClassPtr, ref this));
	}
}
