# GetOwnerPrimaryAggroTargetOnSpawn

```csharp
[StructLayout(2)]
public struct GetOwnerPrimaryAggroTargetOnSpawn
{
	static GetOwnerPrimaryAggroTargetOnSpawn()
	{
		Il2CppClassPointerStore<GetOwnerPrimaryAggroTargetOnSpawn>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Behaviours.dll", "ProjectM", "GetOwnerPrimaryAggroTargetOnSpawn");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GetOwnerPrimaryAggroTargetOnSpawn>.NativeClassPtr);
		GetOwnerPrimaryAggroTargetOnSpawn.NativeFieldInfoPtr_ElapsedTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetOwnerPrimaryAggroTargetOnSpawn>.NativeClassPtr, "ElapsedTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GetOwnerPrimaryAggroTargetOnSpawn>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ElapsedTime;
	[FieldOffset(0)]
	public float ElapsedTime;
}
