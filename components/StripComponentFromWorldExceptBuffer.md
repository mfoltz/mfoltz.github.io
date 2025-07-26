# StripComponentFromWorldExceptBuffer

```csharp
[StructLayout(2)]
public struct StripComponentFromWorldExceptBuffer
{
	static StripComponentFromWorldExceptBuffer()
	{
		Il2CppClassPointerStore<StripComponentFromWorldExceptBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "StripComponentFromWorldExceptBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StripComponentFromWorldExceptBuffer>.NativeClassPtr);
		StripComponentFromWorldExceptBuffer.NativeFieldInfoPtr_StableTypeHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StripComponentFromWorldExceptBuffer>.NativeClassPtr, "StableTypeHash");
		StripComponentFromWorldExceptBuffer.NativeFieldInfoPtr_WorldType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StripComponentFromWorldExceptBuffer>.NativeClassPtr, "WorldType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StripComponentFromWorldExceptBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StableTypeHash;
	private static readonly IntPtr NativeFieldInfoPtr_WorldType;
	[FieldOffset(0)]
	public ulong StableTypeHash;
	[FieldOffset(8)]
	public WorldType WorldType;
}
