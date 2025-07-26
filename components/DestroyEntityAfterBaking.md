# DestroyEntityAfterBaking

```csharp
[StructLayout(2)]
public struct DestroyEntityAfterBaking
{
	static DestroyEntityAfterBaking()
	{
		Il2CppClassPointerStore<DestroyEntityAfterBaking>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core", "DestroyEntityAfterBaking");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyEntityAfterBaking>.NativeClassPtr);
		DestroyEntityAfterBaking.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyEntityAfterBaking>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyEntityAfterBaking>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public Entity Entity;
}
