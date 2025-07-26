# ServantData

```csharp
[StructLayout(2)]
public struct ServantData
{
	static ServantData()
	{
		Il2CppClassPointerStore<ServantData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ServantData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantData>.NativeClassPtr);
		ServantData.NativeFieldInfoPtr_ConvertDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantData>.NativeClassPtr, "ConvertDuration");
		ServantData.NativeFieldInfoPtr_ReviveDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantData>.NativeClassPtr, "ReviveDuration");
		ServantData.NativeFieldInfoPtr_ReviveCostModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantData>.NativeClassPtr, "ReviveCostModifier");
		ServantData.NativeFieldInfoPtr_IsOnMission = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantData>.NativeClassPtr, "IsOnMission");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ConvertDuration;
	private static readonly IntPtr NativeFieldInfoPtr_ReviveDuration;
	private static readonly IntPtr NativeFieldInfoPtr_ReviveCostModifier;
	private static readonly IntPtr NativeFieldInfoPtr_IsOnMission;
	[FieldOffset(0)]
	public float ConvertDuration;
	[FieldOffset(4)]
	public float ReviveDuration;
	[FieldOffset(8)]
	public float ReviveCostModifier;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool IsOnMission;
}
