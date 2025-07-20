---
nav_exclude: true
search_exclude: true
---

# TransformAuthoring

```csharp
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

	public float3 LocalPosition;

	public quaternion LocalRotation;

	public float3 LocalScale;

	public float3 Position;

	public quaternion Rotation;

	public float4x4 LocalToWorld;

	public Entity AuthoringParent;

	public Entity RuntimeParent;

	public RuntimeTransformComponentFlags RuntimeTransformUsage;

	public uint ChangeVersion;
}
```
