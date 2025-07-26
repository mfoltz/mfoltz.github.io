# CastleLimited

```csharp
[StructLayout(2)]
public struct CastleLimited
{
	static CastleLimited()
	{
		Il2CppClassPointerStore<CastleLimited>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CastleLimited");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleLimited>.NativeClassPtr);
		CastleLimited.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleLimited>.NativeClassPtr, "Type");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleLimited>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	[FieldOffset(0)]
	public CastleLimitedType Type;
}
