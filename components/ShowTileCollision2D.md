# ShowTileCollision2D

```csharp
[StructLayout(2)]
public struct ShowTileCollision2D
{
	static ShowTileCollision2D()
	{
		Il2CppClassPointerStore<ShowTileCollision2D>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ShowTileCollision2D");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShowTileCollision2D>.NativeClassPtr);
		ShowTileCollision2D.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowTileCollision2D>.NativeClassPtr, "Radius");
		ShowTileCollision2D.NativeFieldInfoPtr_ShowNoCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShowTileCollision2D>.NativeClassPtr, "ShowNoCollision");
		ShowTileCollision2D.NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ShowTileCollision2D>.NativeClassPtr, 100676171);
	}
	public unsafe float Radius
	{
		[CallerCount(129)]
		[CachedScanResults(RefRangeStart = 55643, RefRangeEnd = 55772, XrefRangeStart = 55643, XrefRangeEnd = 55772, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ShowTileCollision2D.NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShowTileCollision2D>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_ShowNoCollision;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_IShowTileGridComponentData_get_Radius_Private_Virtual_Final_New_get_Single_0;
	[FieldOffset(0)]
	public float Radius;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool ShowNoCollision;
}
