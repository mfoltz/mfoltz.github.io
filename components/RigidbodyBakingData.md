# RigidbodyBakingData

```csharp
[StructLayout(2)]
public struct RigidbodyBakingData
{
	static RigidbodyBakingData()
	{
		Il2CppClassPointerStore<RigidbodyBakingData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.Hybrid.dll", "Unity.Physics.Authoring", "RigidbodyBakingData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RigidbodyBakingData>.NativeClassPtr);
		RigidbodyBakingData.NativeFieldInfoPtr_isKinematic = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RigidbodyBakingData>.NativeClassPtr, "isKinematic");
		RigidbodyBakingData.NativeFieldInfoPtr_mass = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RigidbodyBakingData>.NativeClassPtr, "mass");
		RigidbodyBakingData.NativeFieldInfoPtr_automaticCenterOfMass = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RigidbodyBakingData>.NativeClassPtr, "automaticCenterOfMass");
		RigidbodyBakingData.NativeFieldInfoPtr_centerOfMass = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RigidbodyBakingData>.NativeClassPtr, "centerOfMass");
		RigidbodyBakingData.NativeFieldInfoPtr_automaticInertiaTensor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RigidbodyBakingData>.NativeClassPtr, "automaticInertiaTensor");
		RigidbodyBakingData.NativeFieldInfoPtr_inertiaTensor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RigidbodyBakingData>.NativeClassPtr, "inertiaTensor");
		RigidbodyBakingData.NativeFieldInfoPtr_inertiaTensorRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RigidbodyBakingData>.NativeClassPtr, "inertiaTensorRotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RigidbodyBakingData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_isKinematic;
	private static readonly IntPtr NativeFieldInfoPtr_mass;
	private static readonly IntPtr NativeFieldInfoPtr_automaticCenterOfMass;
	private static readonly IntPtr NativeFieldInfoPtr_centerOfMass;
	private static readonly IntPtr NativeFieldInfoPtr_automaticInertiaTensor;
	private static readonly IntPtr NativeFieldInfoPtr_inertiaTensor;
	private static readonly IntPtr NativeFieldInfoPtr_inertiaTensorRotation;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool isKinematic;
	[FieldOffset(4)]
	public float mass;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool automaticCenterOfMass;
	[FieldOffset(12)]
	public float3 centerOfMass;
	[FieldOffset(24)]
	[MarshalAs(4)]
	public bool automaticInertiaTensor;
	[FieldOffset(28)]
	public float3 inertiaTensor;
	[FieldOffset(40)]
	public quaternion inertiaTensorRotation;
}
