# PavementBonus

```csharp
[StructLayout(2)]
public struct PavementBonus
{
	static PavementBonus()
	{
		Il2CppClassPointerStore<PavementBonus>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PavementBonus");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PavementBonus>.NativeClassPtr);
		PavementBonus.NativeFieldInfoPtr_MovementSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PavementBonus>.NativeClassPtr, "MovementSpeed");
		PavementBonus.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PavementBonus>.NativeClassPtr, "ModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PavementBonus>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MovementSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;
	[FieldOffset(0)]
	public float MovementSpeed;
	[FieldOffset(4)]
	public ModificationId ModificationId;
}
