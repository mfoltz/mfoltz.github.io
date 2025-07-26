# Script_CarriageData

```csharp
[StructLayout(2)]
public struct Script_CarriageData
{
	static Script_CarriageData()
	{
		Il2CppClassPointerStore<Script_CarriageData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "Script_CarriageData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_CarriageData>.NativeClassPtr);
		Script_CarriageData.NativeFieldInfoPtr_HingeDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CarriageData>.NativeClassPtr, "HingeDistance");
		Script_CarriageData.NativeFieldInfoPtr_Horse = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CarriageData>.NativeClassPtr, "Horse");
		Script_CarriageData.NativeFieldInfoPtr_DestroyInactiveDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CarriageData>.NativeClassPtr, "DestroyInactiveDuration");
		Script_CarriageData.NativeFieldInfoPtr_CarriageDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CarriageData>.NativeClassPtr, "CarriageDistance");
		Script_CarriageData.NativeFieldInfoPtr_Angle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CarriageData>.NativeClassPtr, "Angle");
		Script_CarriageData.NativeFieldInfoPtr_ConnectBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CarriageData>.NativeClassPtr, "ConnectBuff");
		Script_CarriageData.NativeFieldInfoPtr_DespawnBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CarriageData>.NativeClassPtr, "DespawnBuff");
		Script_CarriageData.NativeFieldInfoPtr_ColliderPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CarriageData>.NativeClassPtr, "ColliderPrefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_CarriageData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HingeDistance;
	private static readonly IntPtr NativeFieldInfoPtr_Horse;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyInactiveDuration;
	private static readonly IntPtr NativeFieldInfoPtr_CarriageDistance;
	private static readonly IntPtr NativeFieldInfoPtr_Angle;
	private static readonly IntPtr NativeFieldInfoPtr_ConnectBuff;
	private static readonly IntPtr NativeFieldInfoPtr_DespawnBuff;
	private static readonly IntPtr NativeFieldInfoPtr_ColliderPrefab;
	[FieldOffset(0)]
	public float HingeDistance;
	[FieldOffset(4)]
	public NetworkedEntity Horse;
	[FieldOffset(16)]
	public float DestroyInactiveDuration;
	[FieldOffset(20)]
	public float CarriageDistance;
	[FieldOffset(24)]
	public float Angle;
	[FieldOffset(28)]
	public PrefabGUID ConnectBuff;
	[FieldOffset(32)]
	public PrefabGUID DespawnBuff;
	[FieldOffset(36)]
	public PrefabGUID ColliderPrefab;
}
