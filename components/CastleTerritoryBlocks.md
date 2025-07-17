---
nav_exclude: true
search_exclude: true
---

# CastleTerritoryBlocks

```csharp
[StructLayout(2)]
public struct CastleTerritoryBlocks
{
	static CastleTerritoryBlocks()
	{
		Il2CppClassPointerStore<CastleTerritoryBlocks>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleTerritoryBlocks");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleTerritoryBlocks>.NativeClassPtr);
		CastleTerritoryBlocks.NativeFieldInfoPtr_BlockCoordinate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleTerritoryBlocks>.NativeClassPtr, "BlockCoordinate");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleTerritoryBlocks>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BlockCoordinate;
	[FieldOffset(0)]
	public int2 BlockCoordinate;
}
