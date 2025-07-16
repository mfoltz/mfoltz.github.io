# PenBrush

```csharp
[StructLayout(2)]
public struct PenBrush
{
	static PenBrush()
	{
		Il2CppClassPointerStore<PenBrush>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "PenBrush");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PenBrush>.NativeClassPtr);
		PenBrush.NativeFieldInfoPtr_KeepBrushedCoordinatesOverOperation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PenBrush>.NativeClassPtr, "KeepBrushedCoordinatesOverOperation");
		PenBrush.NativeFieldInfoPtr_CoordinateSystem = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PenBrush>.NativeClassPtr, "CoordinateSystem");
		PenBrush.NativeFieldInfoPtr_ShowCornerPreview = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PenBrush>.NativeClassPtr, "ShowCornerPreview");
		PenBrush.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PenBrush>.NativeClassPtr, "Radius");
		PenBrush.NativeFieldInfoPtr_Strength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PenBrush>.NativeClassPtr, "Strength");
		PenBrush.NativeFieldInfoPtr_Shape = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PenBrush>.NativeClassPtr, "Shape");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PenBrush>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_KeepBrushedCoordinatesOverOperation;
	private static readonly IntPtr NativeFieldInfoPtr_CoordinateSystem;
	private static readonly IntPtr NativeFieldInfoPtr_ShowCornerPreview;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_Strength;
	private static readonly IntPtr NativeFieldInfoPtr_Shape;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool KeepBrushedCoordinatesOverOperation;
	[FieldOffset(4)]
	public TerrainCoordinateSystem CoordinateSystem;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool ShowCornerPreview;
	[FieldOffset(12)]
	public float Radius;
	[FieldOffset(16)]
	public float Strength;
	[FieldOffset(20)]
	public BrushShape Shape;
}
