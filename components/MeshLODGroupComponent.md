# MeshLODGroupComponent

```csharp
[StructLayout(2)]
public struct MeshLODGroupComponent
{
	static MeshLODGroupComponent()
	{
		Il2CppClassPointerStore<MeshLODGroupComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "MeshLODGroupComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MeshLODGroupComponent>.NativeClassPtr);
		MeshLODGroupComponent.NativeFieldInfoPtr_ParentGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MeshLODGroupComponent>.NativeClassPtr, "ParentGroup");
		MeshLODGroupComponent.NativeFieldInfoPtr_ParentMask = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MeshLODGroupComponent>.NativeClassPtr, "ParentMask");
		MeshLODGroupComponent.NativeFieldInfoPtr_LODDistances0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MeshLODGroupComponent>.NativeClassPtr, "LODDistances0");
		MeshLODGroupComponent.NativeFieldInfoPtr_LODDistances1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MeshLODGroupComponent>.NativeClassPtr, "LODDistances1");
		MeshLODGroupComponent.NativeFieldInfoPtr_LocalReferencePoint = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MeshLODGroupComponent>.NativeClassPtr, "LocalReferencePoint");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MeshLODGroupComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ParentGroup;
	private static readonly IntPtr NativeFieldInfoPtr_ParentMask;
	private static readonly IntPtr NativeFieldInfoPtr_LODDistances0;
	private static readonly IntPtr NativeFieldInfoPtr_LODDistances1;
	private static readonly IntPtr NativeFieldInfoPtr_LocalReferencePoint;
	[FieldOffset(0)]
	public Entity ParentGroup;
	[FieldOffset(8)]
	public int ParentMask;
	[FieldOffset(12)]
	public float4 LODDistances0;
	[FieldOffset(28)]
	public float4 LODDistances1;
	[FieldOffset(44)]
	public float3 LocalReferencePoint;
}
