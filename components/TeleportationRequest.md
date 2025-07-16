# TeleportationRequest

```csharp
[StructLayout(2)]
public struct TeleportationRequest
{
	static TeleportationRequest()
	{
		Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TeleportationRequest");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr);
		TeleportationRequest.NativeFieldInfoPtr_PlayerEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr, "PlayerEntity");
		TeleportationRequest.NativeFieldInfoPtr_TeleportationType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr, "TeleportationType");
		TeleportationRequest.NativeFieldInfoPtr_FromTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr, "FromTarget");
		TeleportationRequest.NativeFieldInfoPtr_ToTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr, "ToTarget");
		TeleportationRequest.NativeFieldInfoPtr_CustomTravelBuffPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr, "CustomTravelBuffPrefab");
		TeleportationRequest.NativeFieldInfoPtr_EnableCheatChecks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr, "EnableCheatChecks");
		TeleportationRequest.NativeFieldInfoPtr_Offset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr, "Offset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TeleportationRequest>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PlayerEntity;
	private static readonly IntPtr NativeFieldInfoPtr_TeleportationType;
	private static readonly IntPtr NativeFieldInfoPtr_FromTarget;
	private static readonly IntPtr NativeFieldInfoPtr_ToTarget;
	private static readonly IntPtr NativeFieldInfoPtr_CustomTravelBuffPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_EnableCheatChecks;
	private static readonly IntPtr NativeFieldInfoPtr_Offset;
	[FieldOffset(0)]
	public Entity PlayerEntity;
	[FieldOffset(8)]
	public TeleportationType TeleportationType;
	[FieldOffset(12)]
	public Entity FromTarget;
	[FieldOffset(20)]
	public Entity ToTarget;
	[FieldOffset(28)]
	public PrefabGUID CustomTravelBuffPrefab;
	[FieldOffset(32)]
	[MarshalAs(4)]
	public bool EnableCheatChecks;
	[FieldOffset(36)]
	public float3 Offset;
}
