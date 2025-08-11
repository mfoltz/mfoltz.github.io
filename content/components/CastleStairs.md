---
nav_exclude: true
search_exclude: true
---

# CastleStairs

```csharp
public struct CastleStairs
{
	static CastleStairs()
	{
		Il2CppClassPointerStore<CastleStairs>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleStairs");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleStairs>.NativeClassPtr);
		CastleStairs.NativeFieldInfoPtr_StairsType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleStairs>.NativeClassPtr, "StairsType");
		CastleStairs.NativeFieldInfoPtr_Direction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleStairs>.NativeClassPtr, "Direction");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleStairs>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StairsType;
	private static readonly IntPtr NativeFieldInfoPtr_Direction;

	public CastleStairsType StairsType;

	public CardinalDirection Direction;
}
```
