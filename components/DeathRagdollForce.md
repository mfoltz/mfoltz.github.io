# DeathRagdollForce

```csharp
[StructLayout(2)]
public struct DeathRagdollForce
{
	static DeathRagdollForce()
	{
		Il2CppClassPointerStore<DeathRagdollForce>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Hybrid", "DeathRagdollForce");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DeathRagdollForce>.NativeClassPtr);
		DeathRagdollForce.NativeFieldInfoPtr_Force = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeathRagdollForce>.NativeClassPtr, "Force");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DeathRagdollForce>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Force;
	[FieldOffset(0)]
	public float3 Force;
}
