# SmurfProjectile_DataClient

```csharp
[StructLayout(2)]
public struct SmurfProjectile_DataClient
{
	static SmurfProjectile_DataClient()
	{
		Il2CppClassPointerStore<SmurfProjectile_DataClient>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "SmurfProjectile_DataClient");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SmurfProjectile_DataClient>.NativeClassPtr);
		SmurfProjectile_DataClient.NativeFieldInfoPtr_UpdateSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SmurfProjectile_DataClient>.NativeClassPtr, "UpdateSequence");
		SmurfProjectile_DataClient.NativeFieldInfoPtr_SequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SmurfProjectile_DataClient>.NativeClassPtr, "SequenceState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SmurfProjectile_DataClient>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UpdateSequence;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceState;
	[FieldOffset(0)]
	public SequenceGUID UpdateSequence;
	[FieldOffset(4)]
	public SequenceState SequenceState;
}
