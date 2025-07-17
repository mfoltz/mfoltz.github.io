---
nav_exclude: true
search_exclude: true
---

# TraderEntry

```csharp
[StructLayout(2)]
public struct TraderEntry
{
	static TraderEntry()
	{
		Il2CppClassPointerStore<TraderEntry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TraderEntry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TraderEntry>.NativeClassPtr);
		TraderEntry.NativeFieldInfoPtr_CostStartIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderEntry>.NativeClassPtr, "CostStartIndex");
		TraderEntry.NativeFieldInfoPtr_CostCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderEntry>.NativeClassPtr, "CostCount");
		TraderEntry.NativeFieldInfoPtr_OutputStartIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderEntry>.NativeClassPtr, "OutputStartIndex");
		TraderEntry.NativeFieldInfoPtr_OutputCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderEntry>.NativeClassPtr, "OutputCount");
		TraderEntry.NativeFieldInfoPtr_StockAmount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderEntry>.NativeClassPtr, "StockAmount");
		TraderEntry.NativeFieldInfoPtr_FullRechargeTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderEntry>.NativeClassPtr, "FullRechargeTime");
		TraderEntry.NativeFieldInfoPtr_RechargeInterval = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderEntry>.NativeClassPtr, "RechargeInterval");
		TraderEntry.NativeMethodInfoPtr_GetHashCode_Public_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TraderEntry>.NativeClassPtr, 100666132);
	}
	[CallerCount(0)]
	public unsafe int GetHashCode(int index)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref index;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TraderEntry.NativeMethodInfoPtr_GetHashCode_Public_Int32_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TraderEntry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CostStartIndex;
	private static readonly IntPtr NativeFieldInfoPtr_CostCount;
	private static readonly IntPtr NativeFieldInfoPtr_OutputStartIndex;
	private static readonly IntPtr NativeFieldInfoPtr_OutputCount;
	private static readonly IntPtr NativeFieldInfoPtr_StockAmount;
	private static readonly IntPtr NativeFieldInfoPtr_FullRechargeTime;
	private static readonly IntPtr NativeFieldInfoPtr_RechargeInterval;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Int32_Int32_0;
	[FieldOffset(0)]
	public byte CostStartIndex;
	[FieldOffset(1)]
	public byte CostCount;
	[FieldOffset(2)]
	public byte OutputStartIndex;
	[FieldOffset(3)]
	public byte OutputCount;
	[FieldOffset(4)]
	public ushort StockAmount;
	[FieldOffset(8)]
	public float FullRechargeTime;
	[FieldOffset(12)]
	public float RechargeInterval;
}
