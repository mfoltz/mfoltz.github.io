# InsideBuff

```csharp
[StructLayout(2)]
public struct InsideBuff
{
	static InsideBuff()
	{
		Il2CppClassPointerStore<InsideBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "InsideBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InsideBuff>.NativeClassPtr);
		InsideBuff.NativeFieldInfoPtr_ExitBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InsideBuff>.NativeClassPtr, "ExitBuff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InsideBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ExitBuff;
	[FieldOffset(0)]
	public PrefabGUID ExitBuff;
}
