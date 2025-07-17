---
nav_exclude: true
search_exclude: true
---

# HybridCameraData

```csharp
public struct HybridCameraData
{
	static HybridCameraData()
	{
		Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "HybridCameraData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr);
		HybridCameraData.NativeFieldInfoPtr_Viewport = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, "Viewport");
		HybridCameraData.NativeFieldInfoPtr_ViewMatrix = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, "ViewMatrix");
		HybridCameraData.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, "Position");
		HybridCameraData.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, "Rotation");
		HybridCameraData.NativeMethodInfoPtr_get_FieldOfView_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, 100663868);
		HybridCameraData.NativeMethodInfoPtr_get_Resolution_Public_get_float2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, 100663869);
		HybridCameraData.NativeMethodInfoPtr_get_NearClipPlane_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, 100663870);
		HybridCameraData.NativeMethodInfoPtr_get_FarClipPlane_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, 100663871);
		HybridCameraData.NativeMethodInfoPtr_get_AspectRatio_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, 100663872);
		HybridCameraData.NativeMethodInfoPtr_get_ProjectionMatrix_Public_get_float4x4_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, 100663873);
		HybridCameraData.NativeMethodInfoPtr_ViewportPointToRay_Public_Ray_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, 100663874);
		HybridCameraData.NativeMethodInfoPtr_ScreenPointToRay_Public_Ray_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, 100663875);
		HybridCameraData.NativeMethodInfoPtr_ScreenToWorldPoint_Public_float3_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, 100663876);
		HybridCameraData.NativeMethodInfoPtr_ScreenToViewPortPoint_Public_float3_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, 100663877);
		HybridCameraData.NativeMethodInfoPtr_IsOnScreen_Public_Boolean_float3_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, 100663878);
		HybridCameraData.NativeMethodInfoPtr_ViewportToScreenPoint_Public_float3_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, 100663879);
		HybridCameraData.NativeMethodInfoPtr_WorldToScreenPoint_Public_float3_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, 100663880);
		HybridCameraData.NativeMethodInfoPtr_ViewportToWorldPoint_Public_float3_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, 100663881);
		HybridCameraData.NativeMethodInfoPtr_WorldToViewportPoint_Public_float3_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, 100663882);
	}
	public unsafe float FieldOfView
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraData.NativeMethodInfoPtr_get_FieldOfView_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float2 Resolution
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraData.NativeMethodInfoPtr_get_Resolution_Public_get_float2_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float NearClipPlane
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraData.NativeMethodInfoPtr_get_NearClipPlane_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float FarClipPlane
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraData.NativeMethodInfoPtr_get_FarClipPlane_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float AspectRatio
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraData.NativeMethodInfoPtr_get_AspectRatio_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float4x4 ProjectionMatrix
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraData.NativeMethodInfoPtr_get_ProjectionMatrix_Public_get_float4x4_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}

	public unsafe ProjectM.Shared.Mathematics.Ray ViewportPointToRay(float3 position)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraData.NativeMethodInfoPtr_ViewportPointToRay_Public_Ray_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe ProjectM.Shared.Mathematics.Ray ScreenPointToRay(float3 position)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraData.NativeMethodInfoPtr_ScreenPointToRay_Public_Ray_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float3 ScreenToWorldPoint(float3 position)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraData.NativeMethodInfoPtr_ScreenToWorldPoint_Public_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float3 ScreenToViewPortPoint(float3 position)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraData.NativeMethodInfoPtr_ScreenToViewPortPoint_Public_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool IsOnScreen(float3 screenPosition, float offset = 0f)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref screenPosition;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref offset;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraData.NativeMethodInfoPtr_IsOnScreen_Public_Boolean_float3_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float3 ViewportToScreenPoint(float3 position)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraData.NativeMethodInfoPtr_ViewportToScreenPoint_Public_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float3 WorldToScreenPoint(float3 position)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraData.NativeMethodInfoPtr_WorldToScreenPoint_Public_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float3 ViewportToWorldPoint(float3 position)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraData.NativeMethodInfoPtr_ViewportToWorldPoint_Public_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float3 WorldToViewportPoint(float3 position)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCameraData.NativeMethodInfoPtr_WorldToViewportPoint_Public_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridCameraData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Viewport;
	private static readonly IntPtr NativeFieldInfoPtr_ViewMatrix;
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	private static readonly IntPtr NativeMethodInfoPtr_get_FieldOfView_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Resolution_Public_get_float2_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_NearClipPlane_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_FarClipPlane_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_AspectRatio_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_ProjectionMatrix_Public_get_float4x4_0;
	private static readonly IntPtr NativeMethodInfoPtr_ViewportPointToRay_Public_Ray_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_ScreenPointToRay_Public_Ray_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_ScreenToWorldPoint_Public_float3_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_ScreenToViewPortPoint_Public_float3_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsOnScreen_Public_Boolean_float3_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_ViewportToScreenPoint_Public_float3_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_WorldToScreenPoint_Public_float3_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_ViewportToWorldPoint_Public_float3_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_WorldToViewportPoint_Public_float3_float3_0;

	public Viewport Viewport;

	public float4x4 ViewMatrix;

	public float3 Position;

	public Quaternion Rotation;
}
```
