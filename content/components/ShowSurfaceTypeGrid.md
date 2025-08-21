---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ShowSurfaceTypeGrid
{
	static ShowSurfaceTypeGrid()
	{
		Il2CppClassPointerStore<ShowSurfaceTypeGrid>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "ShowSurfaceTypeGrid");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShowSurfaceTypeGrid>.NativeClassPtr);
		ShowSurfaceTypeGrid.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowSurfaceTypeGrid>.NativeClassPtr, "Radius");
		ShowSurfaceTypeGrid.NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ShowSurfaceTypeGrid>.NativeClassPtr, 100664842);
	}
	public unsafe float Radius
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ShowSurfaceTypeGrid.NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShowSurfaceTypeGrid>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0;

	public float Radius;
}
```
