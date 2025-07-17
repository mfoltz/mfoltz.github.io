---
nav_exclude: true
search_exclude: true
---

# ShowControllableAreaGrid

```csharp
[StructLayout(2)]
public struct ShowControllableAreaGrid
{
	static ShowControllableAreaGrid()
	{
		Il2CppClassPointerStore<ShowControllableAreaGrid>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "ShowControllableAreaGrid");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShowControllableAreaGrid>.NativeClassPtr);
		ShowControllableAreaGrid.NativeFieldInfoPtr_EditorChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowControllableAreaGrid>.NativeClassPtr, "EditorChunk");
		ShowControllableAreaGrid.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowControllableAreaGrid>.NativeClassPtr, "Radius");
		ShowControllableAreaGrid.NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ShowControllableAreaGrid>.NativeClassPtr, 100664820);
	}
	public unsafe float Radius
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ShowControllableAreaGrid.NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShowControllableAreaGrid>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EditorChunk;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool EditorChunk;
	[FieldOffset(4)]
	public float Radius;
}
