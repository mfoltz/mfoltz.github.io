# ApplyBuffOnConsume

```csharp
[StructLayout(2)]
public struct ApplyBuffOnConsume
{
	static ApplyBuffOnConsume()
	{
		Il2CppClassPointerStore<ApplyBuffOnConsume>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ApplyBuffOnConsume");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ApplyBuffOnConsume>.NativeClassPtr);
		ApplyBuffOnConsume.NativeFieldInfoPtr_BuffGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffOnConsume>.NativeClassPtr, "BuffGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ApplyBuffOnConsume>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffGuid;
	[FieldOffset(0)]
	public PrefabGUID BuffGuid;
}
