# BindCoffin

```csharp
[StructLayout(2)]
public struct BindCoffin
{
	static BindCoffin()
	{
		Il2CppClassPointerStore<BindCoffin>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "BindCoffin");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BindCoffin>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BindCoffin>.NativeClassPtr, ref this));
	}
}
