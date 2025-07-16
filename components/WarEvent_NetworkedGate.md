# WarEvent_NetworkedGate

```csharp
[StructLayout(2)]
public struct WarEvent_NetworkedGate
{
	static WarEvent_NetworkedGate()
	{
		Il2CppClassPointerStore<WarEvent_NetworkedGate>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WarEvents", "WarEvent_NetworkedGate");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WarEvent_NetworkedGate>.NativeClassPtr);
		WarEvent_NetworkedGate.NativeFieldInfoPtr_Progress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedGate>.NativeClassPtr, "Progress");
		WarEvent_NetworkedGate.NativeFieldInfoPtr_TotalProgress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedGate>.NativeClassPtr, "TotalProgress");
		WarEvent_NetworkedGate.NativeFieldInfoPtr_Coordinates = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedGate>.NativeClassPtr, "Coordinates");
		WarEvent_NetworkedGate.NativeFieldInfoPtr_VariantIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedGate>.NativeClassPtr, "VariantIndex");
		WarEvent_NetworkedGate.NativeFieldInfoPtr_IsOpen = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedGate>.NativeClassPtr, "IsOpen");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WarEvent_NetworkedGate>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Progress;
	private static readonly IntPtr NativeFieldInfoPtr_TotalProgress;
	private static readonly IntPtr NativeFieldInfoPtr_Coordinates;
	private static readonly IntPtr NativeFieldInfoPtr_VariantIndex;
	private static readonly IntPtr NativeFieldInfoPtr_IsOpen;
	[FieldOffset(0)]
	public float Progress;
	[FieldOffset(4)]
	public float TotalProgress;
	[FieldOffset(8)]
	public int2 Coordinates;
	[FieldOffset(16)]
	public byte VariantIndex;
	[FieldOffset(17)]
	[MarshalAs(4)]
	public bool IsOpen;
}
