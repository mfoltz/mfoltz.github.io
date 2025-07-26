# Prefab

```csharp
[StructLayout(2)]
public struct Prefab
{
	static Prefab()
	{
		Il2CppClassPointerStore<Prefab>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "Prefab");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Prefab>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Prefab>.NativeClassPtr, ref this));
	}
}
