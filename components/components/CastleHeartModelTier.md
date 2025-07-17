---
nav_exclude: true
search_exclude: true
---

# CastleHeartModelTier

```csharp
[StructLayout(2)]
public struct CastleHeartModelTier
{
	static CastleHeartModelTier()
	{
		Il2CppClassPointerStore<CastleHeartModelTier>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleHeartModelTier");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleHeartModelTier>.NativeClassPtr);
		CastleHeartModelTier.NativeFieldInfoPtr_Tier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartModelTier>.NativeClassPtr, "Tier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleHeartModelTier>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Tier;
	[FieldOffset(0)]
	public byte Tier;
}
