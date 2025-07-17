---
nav_exclude: true
search_exclude: true
---

# TransformAuthoring

```csharp
[StructLayout(2)]
public struct TransformAuthoring
{
	static TransformAuthoring()
	{
		Il2CppClassPointerStore<TransformAuthoring>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Hybrid.dll", "Unity.Entities", "TransformAuthoring");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TransformAuthoring>.NativeClassPtr);
		TransformAuthoring.NativeFieldInfoPtr_LocalPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransformAuthoring>.NativeClassPtr, "LocalPosition");
		TransformAuthoring.NativeFieldInfoPtr_LocalRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransformAuthoring>.NativeClassPtr, "LocalRotation");
		TransformAuthoring.NativeFieldInfoPtr_LocalScale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransformAuthoring>.NativeClassPtr, "LocalScale");
		TransformAuthoring.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransformAuthoring>.NativeClassPtr, "Position");
		TransformAuthoring.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransformAuthoring>.NativeClassPtr, "Rotation");
		TransformAuthoring.NativeFieldInfoPtr_LocalToWorld = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransformAuthoring>.NativeClassPtr, "LocalToWorld");
		TransformAuthoring.NativeFieldInfoPtr_AuthoringParent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransformAuthoring>.NativeClassPtr, "AuthoringParent");
		TransformAuthoring.NativeFieldInfoPtr_RuntimeParent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransformAuthoring>.NativeClassPtr, "RuntimeParent");
		TransformAuthoring.NativeFieldInfoPtr_RuntimeTransformUsage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransformAuthoring>.NativeClassPtr, "RuntimeTransformUsage");
		TransformAuthoring.NativeFieldInfoPtr_ChangeVersion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TransformAuthoring>.NativeClassPtr, "ChangeVersion");
		TransformAuthoring.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TransformAuthoring_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TransformAuthoring>.NativeClassPtr, 100663618);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 2249615, RefRangeEnd = 2249616, XrefRangeStart = 2249614, XrefRangeEnd = 2249615, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool Equals(TransformAuthoring other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TransformAuthoring.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TransformAuthoring_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TransformAuthoring>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LocalPosition;
	private static readonly IntPtr NativeFieldInfoPtr_LocalRotation;
	private static readonly IntPtr NativeFieldInfoPtr_LocalScale;
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	private static readonly IntPtr NativeFieldInfoPtr_LocalToWorld;
	private static readonly IntPtr NativeFieldInfoPtr_AuthoringParent;
	private static readonly IntPtr NativeFieldInfoPtr_RuntimeParent;
	private static readonly IntPtr NativeFieldInfoPtr_RuntimeTransformUsage;
	private static readonly IntPtr NativeFieldInfoPtr_ChangeVersion;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TransformAuthoring_0;
	[FieldOffset(0)]
	public float3 LocalPosition;
	[FieldOffset(12)]
	public quaternion LocalRotation;
	[FieldOffset(28)]
	public float3 LocalScale;
	[FieldOffset(40)]
	public float3 Position;
	[FieldOffset(52)]
	public quaternion Rotation;
	[FieldOffset(68)]
	public float4x4 LocalToWorld;
	[FieldOffset(132)]
	public Entity AuthoringParent;
	[FieldOffset(140)]
	public Entity RuntimeParent;
	[FieldOffset(148)]
	public RuntimeTransformComponentFlags RuntimeTransformUsage;
	[FieldOffset(152)]
	public uint ChangeVersion;
}
