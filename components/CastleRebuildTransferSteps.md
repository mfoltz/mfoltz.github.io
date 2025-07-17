---
nav_exclude: true
search_exclude: true
---

# CastleRebuildTransferSteps

```csharp
[StructLayout(2)]
public struct CastleRebuildTransferSteps
{
	static CastleRebuildTransferSteps()
	{
		Il2CppClassPointerStore<CastleRebuildTransferSteps>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding.Rebuilding", "CastleRebuildTransferSteps");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildTransferSteps>.NativeClassPtr);
		CastleRebuildTransferSteps.NativeFieldInfoPtr_SourceCommonIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildTransferSteps>.NativeClassPtr, "SourceCommonIndex");
		CastleRebuildTransferSteps.NativeFieldInfoPtr_TargetCommonIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildTransferSteps>.NativeClassPtr, "TargetCommonIndex");
		CastleRebuildTransferSteps.NativeFieldInfoPtr_UniqueIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildTransferSteps>.NativeClassPtr, "UniqueIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildTransferSteps>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SourceCommonIndex;
	private static readonly IntPtr NativeFieldInfoPtr_TargetCommonIndex;
	private static readonly IntPtr NativeFieldInfoPtr_UniqueIndex;
	[FieldOffset(0)]
	public int SourceCommonIndex;
	[FieldOffset(4)]
	public int TargetCommonIndex;
	[FieldOffset(8)]
	public int UniqueIndex;
}
