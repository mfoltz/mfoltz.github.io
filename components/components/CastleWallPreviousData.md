---
nav_exclude: true
search_exclude: true
---

# CastleWallPreviousData

```csharp
[StructLayout(2)]
public struct CastleWallPreviousData
{
	static CastleWallPreviousData()
	{
		Il2CppClassPointerStore<CastleWallPreviousData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleWallPreviousData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleWallPreviousData>.NativeClassPtr);
		CastleWallPreviousData.NativeFieldInfoPtr_CastleRoomWall = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleWallPreviousData>.NativeClassPtr, "CastleRoomWall");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleWallPreviousData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastleRoomWall;
	[FieldOffset(0)]
	public CastleRoomWall CastleRoomWall;
}
