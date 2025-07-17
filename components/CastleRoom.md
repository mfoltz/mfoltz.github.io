---
nav_exclude: true
search_exclude: true
---

# CastleRoom

```csharp
public struct CastleRoom
{
	static CastleRoom()
	{
		Il2CppClassPointerStore<CastleRoom>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleRoom");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRoom>.NativeClassPtr);
		CastleRoom.NativeFieldInfoPtr_IsMissingWalls = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoom>.NativeClassPtr, "IsMissingWalls");
		CastleRoom.NativeFieldInfoPtr_HasRoof = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoom>.NativeClassPtr, "HasRoof");
		CastleRoom.NativeMethodInfoPtr_get_IsEnclosedRoom_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRoom>.NativeClassPtr, 100682058);
	}
	public unsafe bool IsEnclosedRoom
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRoom.NativeMethodInfoPtr_get_IsEnclosedRoom_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRoom>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IsMissingWalls;
	private static readonly IntPtr NativeFieldInfoPtr_HasRoof;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsEnclosedRoom_Public_get_Boolean_0;

	public bool IsMissingWalls;

	public bool HasRoof;
}
```
