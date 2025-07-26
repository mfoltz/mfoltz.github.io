# BagHolderBakingStuff

```csharp
[StructLayout(2)]
public struct BagHolderBakingStuff
{
	static BagHolderBakingStuff()
	{
		Il2CppClassPointerStore<BagHolderBakingStuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "BagHolderBakingStuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BagHolderBakingStuff>.NativeClassPtr);
		BagHolderBakingStuff.NativeFieldInfoPtr_BagSlots = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BagHolderBakingStuff>.NativeClassPtr, "BagSlots");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BagHolderBakingStuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BagSlots;
	[FieldOffset(0)]
	public int BagSlots;
}
