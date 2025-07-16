# DestroyWhenSequenceIsDestroyed

```csharp
[StructLayout(2)]
public struct DestroyWhenSequenceIsDestroyed
{
	static DestroyWhenSequenceIsDestroyed()
	{
		Il2CppClassPointerStore<DestroyWhenSequenceIsDestroyed>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DestroyWhenSequenceIsDestroyed");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyWhenSequenceIsDestroyed>.NativeClassPtr);
		DestroyWhenSequenceIsDestroyed.NativeFieldInfoPtr_Sequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyWhenSequenceIsDestroyed>.NativeClassPtr, "Sequence");
		DestroyWhenSequenceIsDestroyed.NativeFieldInfoPtr_TimeWhenNoLongerAllowedToBeAlive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyWhenSequenceIsDestroyed>.NativeClassPtr, "TimeWhenNoLongerAllowedToBeAlive");
		DestroyWhenSequenceIsDestroyed.NativeFieldInfoPtr_TimeSpawned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyWhenSequenceIsDestroyed>.NativeClassPtr, "TimeSpawned");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyWhenSequenceIsDestroyed>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Sequence;
	private static readonly IntPtr NativeFieldInfoPtr_TimeWhenNoLongerAllowedToBeAlive;
	private static readonly IntPtr NativeFieldInfoPtr_TimeSpawned;
	[FieldOffset(0)]
	public SequenceState Sequence;
	[FieldOffset(8)]
	public double TimeWhenNoLongerAllowedToBeAlive;
	[FieldOffset(16)]
	public double TimeSpawned;
}
