---
nav_exclude: true
search_exclude: true
---

# HybridCameraFrustumPlanes

```csharp
public struct HybridCameraFrustumPlanes
{
	static HybridCameraFrustumPlanes()
	{
		Il2CppClassPointerStore<HybridCameraFrustumPlanes>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "HybridCameraFrustumPlanes");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridCameraFrustumPlanes>.NativeClassPtr);
		HybridCameraFrustumPlanes.NativeFieldInfoPtr_Plane = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCameraFrustumPlanes>.NativeClassPtr, "Plane");
		HybridCameraFrustumPlanes.NativeMethodInfoPtr_DistanceToPlane_Private_Static_Single_float4_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraFrustumPlanes>.NativeClassPtr, 100663866);
		HybridCameraFrustumPlanes.NativeMethodInfoPtr_IsSphereInsideFrustum_Public_Static_Boolean_NativeArray_1_float4_float3_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraFrustumPlanes>.NativeClassPtr, 100663867);
	}

	public unsafe static float DistanceToPlane(float4 vPlane, float3 vPoint)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref vPlane;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref vPoint;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraFrustumPlanes.NativeMethodInfoPtr_DistanceToPlane_Private_Static_Single_float4_float3_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool IsSphereInsideFrustum(NativeArray<float4> vPlanes, float3 vCenter, float fRadius)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref vPlanes;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref vCenter;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref fRadius;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraFrustumPlanes.NativeMethodInfoPtr_IsSphereInsideFrustum_Public_Static_Boolean_NativeArray_1_float4_float3_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridCameraFrustumPlanes>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Plane;
	private static readonly IntPtr NativeMethodInfoPtr_DistanceToPlane_Private_Static_Single_float4_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsSphereInsideFrustum_Public_Static_Boolean_NativeArray_1_float4_float3_Single_0;

	public float4 Plane;
}
```

## Client Systems

- [HybridCameraSystem](/systems/client/HybridCameraSystem)
