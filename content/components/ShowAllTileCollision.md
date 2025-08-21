---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ShowAllTileCollision
{
	static ShowAllTileCollision()
	{
		Il2CppClassPointerStore<ShowAllTileCollision>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ShowAllTileCollision");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShowAllTileCollision>.NativeClassPtr);
		ShowAllTileCollision.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowAllTileCollision>.NativeClassPtr, "Radius");
		ShowAllTileCollision.NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ShowAllTileCollision>.NativeClassPtr, 100666161);
	}
	public unsafe float Radius
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ShowAllTileCollision.NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShowAllTileCollision>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0;

	public float Radius;
}
```
