---
nav_exclude: true
search_exclude: true
---

# ShowRoadRestrictionGrid

```csharp
[StructLayout(2)]
public struct ShowRoadRestrictionGrid
{
	static ShowRoadRestrictionGrid()
	{
		Il2CppClassPointerStore<ShowRoadRestrictionGrid>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "ShowRoadRestrictionGrid");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShowRoadRestrictionGrid>.NativeClassPtr);
		ShowRoadRestrictionGrid.NativeFieldInfoPtr_DummyData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowRoadRestrictionGrid>.NativeClassPtr, "DummyData");
		ShowRoadRestrictionGrid.NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ShowRoadRestrictionGrid>.NativeClassPtr, 100664832);
	}
	public unsafe float Radius
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ShowRoadRestrictionGrid.NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShowRoadRestrictionGrid>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DummyData;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool DummyData;
}
