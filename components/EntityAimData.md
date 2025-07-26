---
nav_exclude: true
search_exclude: true
---

# EntityAimData

```csharp
public struct EntityAimData
{
	static EntityAimData()
	{
		Il2CppClassPointerStore<EntityAimData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EntityAimData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EntityAimData>.NativeClassPtr);
		EntityAimData.NativeFieldInfoPtr_AimPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAimData>.NativeClassPtr, "AimPosition");
		EntityAimData.NativeFieldInfoPtr_AimPositionPlane = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAimData>.NativeClassPtr, "AimPositionPlane");
		EntityAimData.NativeFieldInfoPtr_ProjectileAimPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAimData>.NativeClassPtr, "ProjectileAimPosition");
		EntityAimData.NativeMethodInfoPtr_TryGetAimDirection_Public_Boolean_float3_byref_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityAimData>.NativeClassPtr, 100666019);
		EntityAimData.NativeMethodInfoPtr_TryGetAimDirectionProjectile_Public_Boolean_float3_byref_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityAimData>.NativeClassPtr, 100666020);
		EntityAimData.NativeMethodInfoPtr_TryGetAimDirectionPlane_Public_Boolean_float3_byref_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityAimData>.NativeClassPtr, 100666021);
	}

	public unsafe bool TryGetAimDirection(float3 playerPosition, out float3 direction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref playerPosition;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &direction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityAimData.NativeMethodInfoPtr_TryGetAimDirection_Public_Boolean_float3_byref_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool TryGetAimDirectionProjectile(float3 playerPosition, out float3 direction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref playerPosition;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &direction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityAimData.NativeMethodInfoPtr_TryGetAimDirectionProjectile_Public_Boolean_float3_byref_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool TryGetAimDirectionPlane(float3 playerPosition, out float3 direction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref playerPosition;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &direction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityAimData.NativeMethodInfoPtr_TryGetAimDirectionPlane_Public_Boolean_float3_byref_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EntityAimData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AimPosition;
	private static readonly IntPtr NativeFieldInfoPtr_AimPositionPlane;
	private static readonly IntPtr NativeFieldInfoPtr_ProjectileAimPosition;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetAimDirection_Public_Boolean_float3_byref_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetAimDirectionProjectile_Public_Boolean_float3_byref_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetAimDirectionPlane_Public_Boolean_float3_byref_float3_0;

	public float3 AimPosition;

	public float3 AimPositionPlane;

	public float3 ProjectileAimPosition;
}
```
