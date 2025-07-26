# RespawnDelay

```csharp
[StructLayout(2)]
public struct RespawnDelay
{
	static RespawnDelay()
	{
		Il2CppClassPointerStore<RespawnDelay>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RespawnDelay");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RespawnDelay>.NativeClassPtr);
		RespawnDelay.NativeFieldInfoPtr_TravelBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnDelay>.NativeClassPtr, "TravelBuff");
		RespawnDelay.NativeFieldInfoPtr_TravelBuffSpawned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnDelay>.NativeClassPtr, "TravelBuffSpawned");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RespawnDelay>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TravelBuff;
	private static readonly IntPtr NativeFieldInfoPtr_TravelBuffSpawned;
	[FieldOffset(0)]
	public PrefabGUID TravelBuff;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool TravelBuffSpawned;
}
