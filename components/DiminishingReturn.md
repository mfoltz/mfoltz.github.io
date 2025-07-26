# DiminishingReturn

```csharp
[StructLayout(2)]
public struct DiminishingReturn
{
	static DiminishingReturn()
	{
		Il2CppClassPointerStore<DiminishingReturn>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DiminishingReturn");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DiminishingReturn>.NativeClassPtr);
		DiminishingReturn.NativeFieldInfoPtr_DiminishingBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DiminishingReturn>.NativeClassPtr, "DiminishingBuff");
		DiminishingReturn.NativeFieldInfoPtr_SCTPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DiminishingReturn>.NativeClassPtr, "SCTPrefab");
		DiminishingReturn.NativeFieldInfoPtr_AllowOnUnitTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DiminishingReturn>.NativeClassPtr, "AllowOnUnitTarget");
		DiminishingReturn.NativeFieldInfoPtr_AllowFromUnitOwner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DiminishingReturn>.NativeClassPtr, "AllowFromUnitOwner");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DiminishingReturn>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DiminishingBuff;
	private static readonly IntPtr NativeFieldInfoPtr_SCTPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_AllowOnUnitTarget;
	private static readonly IntPtr NativeFieldInfoPtr_AllowFromUnitOwner;
	[FieldOffset(0)]
	public PrefabGUID DiminishingBuff;
	[FieldOffset(4)]
	public PrefabGUID SCTPrefab;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool AllowOnUnitTarget;
	[FieldOffset(9)]
	[MarshalAs(4)]
	public bool AllowFromUnitOwner;
}
