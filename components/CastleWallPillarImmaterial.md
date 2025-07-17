---
nav_exclude: true
search_exclude: true
---

# CastleWallPillarImmaterial

```csharp
[StructLayout(2)]
public struct CastleWallPillarImmaterial
{
	static CastleWallPillarImmaterial()
	{
		Il2CppClassPointerStore<CastleWallPillarImmaterial>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleWallPillarImmaterial");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleWallPillarImmaterial>.NativeClassPtr);
		CastleWallPillarImmaterial.NativeFieldInfoPtr_PillarImmaterialModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleWallPillarImmaterial>.NativeClassPtr, "PillarImmaterialModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleWallPillarImmaterial>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PillarImmaterialModId;
	[FieldOffset(0)]
	public ModificationId PillarImmaterialModId;
}
