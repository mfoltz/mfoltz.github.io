# ShowPaintedTerrainTileGrid

```csharp
[StructLayout(2)]
public struct ShowPaintedTerrainTileGrid
{
	static ShowPaintedTerrainTileGrid()
	{
		Il2CppClassPointerStore<ShowPaintedTerrainTileGrid>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Terrain", "ShowPaintedTerrainTileGrid");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShowPaintedTerrainTileGrid>.NativeClassPtr);
		ShowPaintedTerrainTileGrid.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowPaintedTerrainTileGrid>.NativeClassPtr, "Radius");
		ShowPaintedTerrainTileGrid.NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ShowPaintedTerrainTileGrid>.NativeClassPtr, 100681576);
	}
	public unsafe float Radius
	{
		[CallerCount(129)]
		[CachedScanResults(RefRangeStart = 55643, RefRangeEnd = 55772, XrefRangeStart = 55643, XrefRangeEnd = 55772, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ShowPaintedTerrainTileGrid.NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShowPaintedTerrainTileGrid>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0;
	[FieldOffset(0)]
	public float Radius;
}
