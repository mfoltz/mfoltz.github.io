---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ShowSurfaceFluffDebug
{
	static ShowSurfaceFluffDebug()
	{
		Il2CppClassPointerStore<ShowSurfaceFluffDebug>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Terrain", "ShowSurfaceFluffDebug");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShowSurfaceFluffDebug>.NativeClassPtr);
		ShowSurfaceFluffDebug.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowSurfaceFluffDebug>.NativeClassPtr, "Radius");
		ShowSurfaceFluffDebug.NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ShowSurfaceFluffDebug>.NativeClassPtr, 100681578);
	}
	public unsafe float Radius
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ShowSurfaceFluffDebug.NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShowSurfaceFluffDebug>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0;

	public float Radius;
}
```
