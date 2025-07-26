# PrefabRoot

```csharp
[StructLayout(2)]
public struct PrefabRoot
{
	static PrefabRoot()
	{
		Il2CppClassPointerStore<PrefabRoot>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "PrefabRoot");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PrefabRoot>.NativeClassPtr);
		PrefabRoot.NativeFieldInfoPtr_Root = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabRoot>.NativeClassPtr, "Root");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PrefabRoot>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Root;
	[FieldOffset(0)]
	public Entity Root;
}
