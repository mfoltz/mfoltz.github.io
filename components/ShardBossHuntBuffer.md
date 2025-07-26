# ShardBossHuntBuffer

```csharp
[StructLayout(2)]
public struct ShardBossHuntBuffer
{
	static ShardBossHuntBuffer()
	{
		Il2CppClassPointerStore<ShardBossHuntBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ShardBossHuntBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShardBossHuntBuffer>.NativeClassPtr);
		ShardBossHuntBuffer.NativeFieldInfoPtr_BloodHuntTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShardBossHuntBuffer>.NativeClassPtr, "BloodHuntTarget");
		ShardBossHuntBuffer.NativeFieldInfoPtr_IsUnlockedByStation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShardBossHuntBuffer>.NativeClassPtr, "IsUnlockedByStation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShardBossHuntBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BloodHuntTarget;
	private static readonly IntPtr NativeFieldInfoPtr_IsUnlockedByStation;
	[FieldOffset(0)]
	public PrefabGUID BloodHuntTarget;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool IsUnlockedByStation;
}
