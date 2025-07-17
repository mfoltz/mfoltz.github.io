---
nav_exclude: true
search_exclude: true
---

# PhysicsCollider

```csharp
[StructLayout(2)]
public struct PhysicsCollider
{
	static PhysicsCollider()
	{
		Il2CppClassPointerStore<PhysicsCollider>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics", "PhysicsCollider");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsCollider>.NativeClassPtr);
		PhysicsCollider.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsCollider>.NativeClassPtr, "Value");
		PhysicsCollider.NativeMethodInfoPtr_get_IsValid_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsCollider>.NativeClassPtr, 100665694);
		PhysicsCollider.NativeMethodInfoPtr_get_ColliderPtr_Public_get_ptr_Collider_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsCollider>.NativeClassPtr, 100665695);
		PhysicsCollider.NativeMethodInfoPtr_get_MassProperties_Public_get_MassProperties_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsCollider>.NativeClassPtr, 100665696);
		PhysicsCollider.NativeMethodInfoPtr_get_IsUnique_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsCollider>.NativeClassPtr, 100665697);
	}
	public unsafe bool IsValid
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822320, XrefRangeEnd = 1822321, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsCollider.NativeMethodInfoPtr_get_IsValid_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe Collider* ColliderPtr
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822321, XrefRangeEnd = 1822324, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr;
			IntPtr result = IL2CPP.il2cpp_runtime_invoke(PhysicsCollider.NativeMethodInfoPtr_get_ColliderPtr_Public_get_ptr_Collider_0, ref this, (void**)ptr, ref intPtr);
			Il2CppException.RaiseExceptionIfNecessary(intPtr);
			return result;
		}
	}
	public unsafe MassProperties MassProperties
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822324, XrefRangeEnd = 1822335, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsCollider.NativeMethodInfoPtr_get_MassProperties_Public_get_MassProperties_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool IsUnique
	{
		[CallerCount(3)]
		[CachedScanResults(RefRangeStart = 1822337, RefRangeEnd = 1822340, XrefRangeStart = 1822335, XrefRangeEnd = 1822337, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsCollider.NativeMethodInfoPtr_get_IsUnique_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsCollider>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsValid_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_ColliderPtr_Public_get_ptr_Collider_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_MassProperties_Public_get_MassProperties_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsUnique_Public_get_Boolean_0;
	[FieldOffset(0)]
	public BlobAssetReference<Collider> Value;
}
