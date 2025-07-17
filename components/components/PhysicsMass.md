---
nav_exclude: true
search_exclude: true
---

# PhysicsMass

```csharp
[StructLayout(2)]
public struct PhysicsMass
{
	static PhysicsMass()
	{
		Il2CppClassPointerStore<PhysicsMass>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics", "PhysicsMass");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsMass>.NativeClassPtr);
		PhysicsMass.NativeFieldInfoPtr_Transform = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsMass>.NativeClassPtr, "Transform");
		PhysicsMass.NativeFieldInfoPtr_InverseMass = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsMass>.NativeClassPtr, "InverseMass");
		PhysicsMass.NativeFieldInfoPtr_InverseInertia = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsMass>.NativeClassPtr, "InverseInertia");
		PhysicsMass.NativeFieldInfoPtr_AngularExpansionFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsMass>.NativeClassPtr, "AngularExpansionFactor");
		PhysicsMass.NativeMethodInfoPtr_get_CenterOfMass_Public_get_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsMass>.NativeClassPtr, 100665698);
		PhysicsMass.NativeMethodInfoPtr_set_CenterOfMass_Public_set_Void_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsMass>.NativeClassPtr, 100665699);
		PhysicsMass.NativeMethodInfoPtr_get_InertiaOrientation_Public_get_quaternion_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsMass>.NativeClassPtr, 100665700);
		PhysicsMass.NativeMethodInfoPtr_set_InertiaOrientation_Public_set_Void_quaternion_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsMass>.NativeClassPtr, 100665701);
		PhysicsMass.NativeMethodInfoPtr_get_HasInfiniteMass_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsMass>.NativeClassPtr, 100665702);
		PhysicsMass.NativeMethodInfoPtr_get_HasInfiniteInertia_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsMass>.NativeClassPtr, 100665703);
		PhysicsMass.NativeMethodInfoPtr_get_IsKinematic_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsMass>.NativeClassPtr, 100665704);
		PhysicsMass.NativeMethodInfoPtr_CreateDynamic_Public_Static_PhysicsMass_MassProperties_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsMass>.NativeClassPtr, 100665705);
		PhysicsMass.NativeMethodInfoPtr_CreateKinematic_Public_Static_PhysicsMass_MassProperties_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsMass>.NativeClassPtr, 100665706);
	}
	public unsafe float3 CenterOfMass
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsMass.NativeMethodInfoPtr_get_CenterOfMass_Public_get_float3_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsMass.NativeMethodInfoPtr_set_CenterOfMass_Public_set_Void_float3_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe quaternion InertiaOrientation
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsMass.NativeMethodInfoPtr_get_InertiaOrientation_Public_get_quaternion_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(3)]
		[CachedScanResults(RefRangeStart = 235910, RefRangeEnd = 235913, XrefRangeStart = 235910, XrefRangeEnd = 235913, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsMass.NativeMethodInfoPtr_set_InertiaOrientation_Public_set_Void_quaternion_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe bool HasInfiniteMass
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsMass.NativeMethodInfoPtr_get_HasInfiniteMass_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool HasInfiniteInertia
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsMass.NativeMethodInfoPtr_get_HasInfiniteInertia_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool IsKinematic
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsMass.NativeMethodInfoPtr_get_IsKinematic_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 1822344, RefRangeEnd = 1822348, XrefRangeStart = 1822340, XrefRangeEnd = 1822344, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static PhysicsMass CreateDynamic(MassProperties massProperties, float mass)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref massProperties;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref mass;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsMass.NativeMethodInfoPtr_CreateDynamic_Public_Static_PhysicsMass_MassProperties_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822348, XrefRangeEnd = 1822350, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static PhysicsMass CreateKinematic(MassProperties massProperties)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref massProperties;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsMass.NativeMethodInfoPtr_CreateKinematic_Public_Static_PhysicsMass_MassProperties_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsMass>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Transform;
	private static readonly IntPtr NativeFieldInfoPtr_InverseMass;
	private static readonly IntPtr NativeFieldInfoPtr_InverseInertia;
	private static readonly IntPtr NativeFieldInfoPtr_AngularExpansionFactor;
	private static readonly IntPtr NativeMethodInfoPtr_get_CenterOfMass_Public_get_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_CenterOfMass_Public_set_Void_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_InertiaOrientation_Public_get_quaternion_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_InertiaOrientation_Public_set_Void_quaternion_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_HasInfiniteMass_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_HasInfiniteInertia_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsKinematic_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateDynamic_Public_Static_PhysicsMass_MassProperties_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateKinematic_Public_Static_PhysicsMass_MassProperties_0;
	[FieldOffset(0)]
	public RigidTransform Transform;
	[FieldOffset(28)]
	public float InverseMass;
	[FieldOffset(32)]
	public float3 InverseInertia;
	[FieldOffset(44)]
	public float AngularExpansionFactor;
}
