# InventoryBuffer

```csharp
[StructLayout(2)]
public struct InventoryBuffer
{
	static InventoryBuffer()
	{
		Il2CppClassPointerStore<InventoryBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "InventoryBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InventoryBuffer>.NativeClassPtr);
		InventoryBuffer.NativeFieldInfoPtr_ItemEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryBuffer>.NativeClassPtr, "ItemEntity");
		InventoryBuffer.NativeFieldInfoPtr_ItemType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryBuffer>.NativeClassPtr, "ItemType");
		InventoryBuffer.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryBuffer>.NativeClassPtr, "Amount");
		InventoryBuffer.NativeFieldInfoPtr_MaxAmountOverride = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InventoryBuffer>.NativeClassPtr, "MaxAmountOverride");
		InventoryBuffer.NativeMethodInfoPtr_Empty_Public_Static_InventoryBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InventoryBuffer>.NativeClassPtr, 100664586);
	}
	[CallerCount(0)]
	public unsafe static InventoryBuffer Empty()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InventoryBuffer.NativeMethodInfoPtr_Empty_Public_Static_InventoryBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InventoryBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ItemEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ItemType;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeFieldInfoPtr_MaxAmountOverride;
	private static readonly IntPtr NativeMethodInfoPtr_Empty_Public_Static_InventoryBuffer_0;
	[FieldOffset(0)]
	public NetworkedEntity ItemEntity;
	[FieldOffset(12)]
	public PrefabGUID ItemType;
	[FieldOffset(16)]
	public int Amount;
	[FieldOffset(20)]
	public int MaxAmountOverride;
}
