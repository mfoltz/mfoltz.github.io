# StampBrush

```csharp
[StructLayout(2)]
public struct StampBrush
{
	static StampBrush()
	{
		Il2CppClassPointerStore<StampBrush>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "StampBrush");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StampBrush>.NativeClassPtr);
		StampBrush.NativeFieldInfoPtr_StampAssetPath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StampBrush>.NativeClassPtr, "StampAssetPath");
		StampBrush.NativeFieldInfoPtr_StampTextureSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StampBrush>.NativeClassPtr, "StampTextureSize");
		StampBrush.NativeFieldInfoPtr_KeepBrushedCoordinatesOverOperation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StampBrush>.NativeClassPtr, "KeepBrushedCoordinatesOverOperation");
		StampBrush.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StampBrush>.NativeClassPtr, "Radius");
		StampBrush.NativeFieldInfoPtr_Strength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StampBrush>.NativeClassPtr, "Strength");
		StampBrush.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StampBrush>.NativeClassPtr, "Rotation");
		StampBrush.NativeFieldInfoPtr_InverseThreshold = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StampBrush>.NativeClassPtr, "InverseThreshold");
		StampBrush.NativeFieldInfoPtr_ShowTexturePreview = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StampBrush>.NativeClassPtr, "ShowTexturePreview");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StampBrush>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StampAssetPath;
	private static readonly IntPtr NativeFieldInfoPtr_StampTextureSize;
	private static readonly IntPtr NativeFieldInfoPtr_KeepBrushedCoordinatesOverOperation;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_Strength;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	private static readonly IntPtr NativeFieldInfoPtr_InverseThreshold;
	private static readonly IntPtr NativeFieldInfoPtr_ShowTexturePreview;
	[FieldOffset(0)]
	public FixedString512Bytes StampAssetPath;
	[FieldOffset(512)]
	public int2 StampTextureSize;
	[FieldOffset(520)]
	[MarshalAs(4)]
	public bool KeepBrushedCoordinatesOverOperation;
	[FieldOffset(524)]
	public float Radius;
	[FieldOffset(528)]
	public float Strength;
	[FieldOffset(532)]
	public float Rotation;
	[FieldOffset(536)]
	public float InverseThreshold;
	[FieldOffset(540)]
	[MarshalAs(4)]
	public bool ShowTexturePreview;
}
