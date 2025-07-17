---
nav_exclude: true
search_exclude: true
---

# ShowTileHeightsDebug

```csharp
[StructLayout(2)]
public struct ShowTileHeightsDebug
{
	static ShowTileHeightsDebug()
	{
		Il2CppClassPointerStore<ShowTileHeightsDebug>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Terrain", "ShowTileHeightsDebug");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShowTileHeightsDebug>.NativeClassPtr);
		ShowTileHeightsDebug.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowTileHeightsDebug>.NativeClassPtr, "Type");
		ShowTileHeightsDebug.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowTileHeightsDebug>.NativeClassPtr, "Radius");
		ShowTileHeightsDebug.NativeFieldInfoPtr_RelativeToPlayerHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowTileHeightsDebug>.NativeClassPtr, "RelativeToPlayerHeight");
		ShowTileHeightsDebug.NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ShowTileHeightsDebug>.NativeClassPtr, 100681587);
	}
	public unsafe float Radius
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ShowTileHeightsDebug.NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShowTileHeightsDebug>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_RelativeToPlayerHeight;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0;
	[FieldOffset(0)]
	public ShowTileHeightsDebug.HeightType Type;
	[FieldOffset(4)]
	public float Radius;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool RelativeToPlayerHeight;
	public enum HeightType
	{
		Terrain,
		TerrainBase,
		GameplayBase
	}
}
