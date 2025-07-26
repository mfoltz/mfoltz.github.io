# BlockHealBuff

```csharp
[StructLayout(2)]
public struct BlockHealBuff
{
	static BlockHealBuff()
	{
		Il2CppClassPointerStore<BlockHealBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "BlockHealBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BlockHealBuff>.NativeClassPtr);
		BlockHealBuff.NativeFieldInfoPtr_PercentageBlocked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlockHealBuff>.NativeClassPtr, "PercentageBlocked");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BlockHealBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PercentageBlocked;
	[FieldOffset(0)]
	public float PercentageBlocked;
}
