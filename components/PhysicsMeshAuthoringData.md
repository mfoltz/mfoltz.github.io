# PhysicsMeshAuthoringData

```csharp
[StructLayout(2)]
public struct PhysicsMeshAuthoringData
{
	static PhysicsMeshAuthoringData()
	{
		Il2CppClassPointerStore<PhysicsMeshAuthoringData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.Hybrid.dll", "Unity.Physics.Authoring", "PhysicsMeshAuthoringData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsMeshAuthoringData>.NativeClassPtr);
		PhysicsMeshAuthoringData.NativeFieldInfoPtr_Convex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsMeshAuthoringData>.NativeClassPtr, "Convex");
		PhysicsMeshAuthoringData.NativeFieldInfoPtr_Mesh = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsMeshAuthoringData>.NativeClassPtr, "Mesh");
		PhysicsMeshAuthoringData.NativeFieldInfoPtr_MeshBounds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsMeshAuthoringData>.NativeClassPtr, "MeshBounds");
		PhysicsMeshAuthoringData.NativeFieldInfoPtr_BakeFromShape = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsMeshAuthoringData>.NativeClassPtr, "BakeFromShape");
		PhysicsMeshAuthoringData.NativeFieldInfoPtr_ChildToShape = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsMeshAuthoringData>.NativeClassPtr, "ChildToShape");
		PhysicsMeshAuthoringData.NativeFieldInfoPtr_MeshArrayIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsMeshAuthoringData>.NativeClassPtr, "MeshArrayIndex");
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsMeshAuthoringData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Convex;
	private static readonly IntPtr NativeFieldInfoPtr_Mesh;
	private static readonly IntPtr NativeFieldInfoPtr_MeshBounds;
	private static readonly IntPtr NativeFieldInfoPtr_BakeFromShape;
	private static readonly IntPtr NativeFieldInfoPtr_ChildToShape;
	private static readonly IntPtr NativeFieldInfoPtr_MeshArrayIndex;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool Convex;
	[FieldOffset(4)]
	public UnityObjectRef<Mesh> Mesh;
	[FieldOffset(8)]
	public Bounds MeshBounds;
	[FieldOffset(32)]
	public float4x4 BakeFromShape;
	[FieldOffset(96)]
	public float4x4 ChildToShape;
	[FieldOffset(160)]
	public int MeshArrayIndex;
}
