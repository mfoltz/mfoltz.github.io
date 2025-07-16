# MapCollision

```csharp
[StructLayout(2)]
public struct MapCollision
{
	static MapCollision()
	{
		Il2CppClassPointerStore<MapCollision>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MapCollision");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MapCollision>.NativeClassPtr);
		MapCollision.NativeFieldInfoPtr_RADIUS = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapCollision>.NativeClassPtr, "RADIUS");
		MapCollision.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapCollision>.NativeClassPtr, "Radius");
		MapCollision.NativeFieldInfoPtr_CollidesAgainstMapFlags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapCollision>.NativeClassPtr, "CollidesAgainstMapFlags");
		MapCollision.NativeFieldInfoPtr_Result = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapCollision>.NativeClassPtr, "Result");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MapCollision>.NativeClassPtr, ref this));
	}
	public unsafe static float RADIUS
	{
		get
		{
			float result;
			IL2CPP.il2cpp_field_static_get_value(MapCollision.NativeFieldInfoPtr_RADIUS, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(MapCollision.NativeFieldInfoPtr_RADIUS, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_RADIUS;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_CollidesAgainstMapFlags;
	private static readonly IntPtr NativeFieldInfoPtr_Result;
	[FieldOffset(0)]
	public float Radius;
	[FieldOffset(4)]
	public MapCollisionFlags CollidesAgainstMapFlags;
	[FieldOffset(8)]
	public MapCollisionResult Result;
}
