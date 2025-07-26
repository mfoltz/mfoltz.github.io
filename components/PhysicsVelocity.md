# PhysicsVelocity

```csharp
[StructLayout(2)]
public struct PhysicsVelocity
{
	static PhysicsVelocity()
	{
		Il2CppClassPointerStore<PhysicsVelocity>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics", "PhysicsVelocity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsVelocity>.NativeClassPtr);
		PhysicsVelocity.NativeFieldInfoPtr_Linear = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsVelocity>.NativeClassPtr, "Linear");
		PhysicsVelocity.NativeFieldInfoPtr_Angular = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsVelocity>.NativeClassPtr, "Angular");
		PhysicsVelocity.NativeFieldInfoPtr_Zero = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsVelocity>.NativeClassPtr, "Zero");
		PhysicsVelocity.NativeMethodInfoPtr_CalculateVelocityToTarget_Public_Static_PhysicsVelocity_byref_PhysicsMass_byref_float3_byref_quaternion_byref_RigidTransform_byref_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsVelocity>.NativeClassPtr, 100665707);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822350, XrefRangeEnd = 1822352, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static PhysicsVelocity CalculateVelocityToTarget([In] ref PhysicsMass bodyMass, [In] ref float3 bodyPosition, [In] ref quaternion bodyOrientation, [In] ref RigidTransform targetTransform, [In] ref float stepFrequency)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &bodyMass;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &bodyPosition;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &bodyOrientation;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &targetTransform;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &stepFrequency;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsVelocity.NativeMethodInfoPtr_CalculateVelocityToTarget_Public_Static_PhysicsVelocity_byref_PhysicsMass_byref_float3_byref_quaternion_byref_RigidTransform_byref_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsVelocity>.NativeClassPtr, ref this));
	}
	public unsafe static PhysicsVelocity Zero
	{
		get
		{
			PhysicsVelocity result;
			IL2CPP.il2cpp_field_static_get_value(PhysicsVelocity.NativeFieldInfoPtr_Zero, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(PhysicsVelocity.NativeFieldInfoPtr_Zero, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_Linear;
	private static readonly IntPtr NativeFieldInfoPtr_Angular;
	private static readonly IntPtr NativeFieldInfoPtr_Zero;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateVelocityToTarget_Public_Static_PhysicsVelocity_byref_PhysicsMass_byref_float3_byref_quaternion_byref_RigidTransform_byref_Single_0;
	[FieldOffset(0)]
	public float3 Linear;
	[FieldOffset(12)]
	public float3 Angular;
}
