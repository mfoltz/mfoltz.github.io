# GetOwnerRotation

```csharp
[StructLayout(2)]
public struct GetOwnerRotation
{
	static GetOwnerRotation()
	{
		Il2CppClassPointerStore<GetOwnerRotation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "GetOwnerRotation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GetOwnerRotation>.NativeClassPtr);
		GetOwnerRotation.NativeFieldInfoPtr_OffsetDegreesClockwise = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetOwnerRotation>.NativeClassPtr, "OffsetDegreesClockwise");
		GetOwnerRotation.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetOwnerRotation>.NativeClassPtr, "Type");
		GetOwnerRotation.NativeFieldInfoPtr_RotationSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetOwnerRotation>.NativeClassPtr, "RotationSource");
		GetOwnerRotation.NativeFieldInfoPtr_InverseRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetOwnerRotation>.NativeClassPtr, "InverseRotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GetOwnerRotation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OffsetDegreesClockwise;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_RotationSource;
	private static readonly IntPtr NativeFieldInfoPtr_InverseRotation;
	[FieldOffset(0)]
	public float OffsetDegreesClockwise;
	[FieldOffset(4)]
	public GetRotationType Type;
	[FieldOffset(8)]
	public GetOwnerRotationComponent.GetRotationSource RotationSource;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool InverseRotation;
}
