# Consumable

```csharp
[StructLayout(2)]
public struct Consumable
{
	static Consumable()
	{
		Il2CppClassPointerStore<Consumable>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Consumable");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Consumable>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Consumable>.NativeClassPtr, ref this));
	}
}
