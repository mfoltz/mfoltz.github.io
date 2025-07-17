---
nav_exclude: true
search_exclude: true
---

# StunCloth_Collider_Data

```csharp
[StructLayout(2)]
public struct StunCloth_Collider_Data
{
	static StunCloth_Collider_Data()
	{
		Il2CppClassPointerStore<StunCloth_Collider_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "StunCloth_Collider_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StunCloth_Collider_Data>.NativeClassPtr);
		StunCloth_Collider_Data.NativeFieldInfoPtr_Shape = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StunCloth_Collider_Data>.NativeClassPtr, "Shape");
		StunCloth_Collider_Data.NativeFieldInfoPtr_StartPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StunCloth_Collider_Data>.NativeClassPtr, "StartPosition");
		StunCloth_Collider_Data.NativeFieldInfoPtr_EndPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StunCloth_Collider_Data>.NativeClassPtr, "EndPosition");
		StunCloth_Collider_Data.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StunCloth_Collider_Data>.NativeClassPtr, "Radius");
		StunCloth_Collider_Data.NativeMethodInfoPtr_Update_Public_Void_float3_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StunCloth_Collider_Data>.NativeClassPtr, 100685954);
		StunCloth_Collider_Data.NativeMethodInfoPtr_IsColliding_Public_Boolean_float3_Single_byref_ValueTuple_Unboxed_3_float3_float3_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StunCloth_Collider_Data>.NativeClassPtr, 100685955);
		StunCloth_Collider_Data.NativeMethodInfoPtr_SphereCollisionCheck_Private_Boolean_float3_float3_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StunCloth_Collider_Data>.NativeClassPtr, 100685956);
		StunCloth_Collider_Data.NativeMethodInfoPtr_CapsuleCollisionCheck_Private_Boolean_float3_Single_byref_ValueTuple_Unboxed_3_float3_float3_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StunCloth_Collider_Data>.NativeClassPtr, 100685957);
	}
	[CallerCount(0)]
	public unsafe void Update(float3 startPosition, float3 endPosition)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref startPosition;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref endPosition;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StunCloth_Collider_Data.NativeMethodInfoPtr_Update_Public_Void_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 311537, RefRangeEnd = 311538, XrefRangeStart = 311529, XrefRangeEnd = 311537, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool IsColliding(float3 otherPosition, float otherRadius, out ValueTuple_Unboxed<float3, float3, float3> hit)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref otherPosition;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref otherRadius;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &hit;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StunCloth_Collider_Data.NativeMethodInfoPtr_IsColliding_Public_Boolean_float3_Single_byref_ValueTuple_Unboxed_3_float3_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 311538, XrefRangeEnd = 311539, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool SphereCollisionCheck(float3 position, float3 otherPosition, float otherRadius)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref otherPosition;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref otherRadius;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StunCloth_Collider_Data.NativeMethodInfoPtr_SphereCollisionCheck_Private_Boolean_float3_float3_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 311551, RefRangeEnd = 311552, XrefRangeStart = 311539, XrefRangeEnd = 311551, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CapsuleCollisionCheck(float3 otherPosition, float otherRadius, out ValueTuple_Unboxed<float3, float3, float3> hit)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref otherPosition;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref otherRadius;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &hit;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StunCloth_Collider_Data.NativeMethodInfoPtr_CapsuleCollisionCheck_Private_Boolean_float3_Single_byref_ValueTuple_Unboxed_3_float3_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StunCloth_Collider_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Shape;
	private static readonly IntPtr NativeFieldInfoPtr_StartPosition;
	private static readonly IntPtr NativeFieldInfoPtr_EndPosition;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeMethodInfoPtr_Update_Public_Void_float3_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsColliding_Public_Boolean_float3_Single_byref_ValueTuple_Unboxed_3_float3_float3_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_SphereCollisionCheck_Private_Boolean_float3_float3_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_CapsuleCollisionCheck_Private_Boolean_float3_Single_byref_ValueTuple_Unboxed_3_float3_float3_float3_0;
	[FieldOffset(0)]
	public StunCloth_Collider_Data.ColliderShape Shape;
	[FieldOffset(4)]
	public float3 StartPosition;
	[FieldOffset(16)]
	public float3 EndPosition;
	[FieldOffset(28)]
	public float Radius;
	public enum ColliderShape
	{
		None,
		Capsule,
		Sphere
	}
}
