---
nav_exclude: true
search_exclude: false
---

# EntityInput

```csharp
public struct EntityInput
{
	static EntityInput()
	{
		Il2CppClassPointerStore<EntityInput>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EntityInput");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EntityInput>.NativeClassPtr);
		EntityInput.NativeFieldInfoPtr_Movement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityInput>.NativeClassPtr, "Movement");
		EntityInput.NativeFieldInfoPtr_AimPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityInput>.NativeClassPtr, "AimPosition");
		EntityInput.NativeFieldInfoPtr_AimPositionPlane = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityInput>.NativeClassPtr, "AimPositionPlane");
		EntityInput.NativeFieldInfoPtr_AimDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityInput>.NativeClassPtr, "AimDirection");
		EntityInput.NativeFieldInfoPtr_AimLength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityInput>.NativeClassPtr, "AimLength");
		EntityInput.NativeFieldInfoPtr_HoveredEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityInput>.NativeClassPtr, "HoveredEntity");
		EntityInput.NativeFieldInfoPtr_HoveredEntityNetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityInput>.NativeClassPtr, "HoveredEntityNetworkId");
		EntityInput.NativeFieldInfoPtr_ProjectileAimType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityInput>.NativeClassPtr, "ProjectileAimType");
		EntityInput.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityInput>.NativeClassPtr, "State");
		EntityInput.NativeMethodInfoPtr_get_ProjectileAimPosition_Public_get_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityInput>.NativeClassPtr, 100666002);
		EntityInput.NativeMethodInfoPtr_TryGetAimDirectionPlane_Public_Boolean_float3_byref_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityInput>.NativeClassPtr, 100666003);
		EntityInput.NativeMethodInfoPtr_SetAllAimPositions_Public_Void_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityInput>.NativeClassPtr, 100666004);
	}
	public unsafe float3 ProjectileAimPosition
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityInput.NativeMethodInfoPtr_get_ProjectileAimPosition_Public_get_float3_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}

	public unsafe bool TryGetAimDirectionPlane(float3 playerPosition, out float3 direction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref playerPosition;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &direction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityInput.NativeMethodInfoPtr_TryGetAimDirectionPlane_Public_Boolean_float3_byref_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void SetAllAimPositions(float3 pos)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref pos;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityInput.NativeMethodInfoPtr_SetAllAimPositions_Public_Void_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EntityInput>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Movement;
	private static readonly IntPtr NativeFieldInfoPtr_AimPosition;
	private static readonly IntPtr NativeFieldInfoPtr_AimPositionPlane;
	private static readonly IntPtr NativeFieldInfoPtr_AimDirection;
	private static readonly IntPtr NativeFieldInfoPtr_AimLength;
	private static readonly IntPtr NativeFieldInfoPtr_HoveredEntity;
	private static readonly IntPtr NativeFieldInfoPtr_HoveredEntityNetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_ProjectileAimType;
	private static readonly IntPtr NativeFieldInfoPtr_State;
	private static readonly IntPtr NativeMethodInfoPtr_get_ProjectileAimPosition_Public_get_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetAimDirectionPlane_Public_Boolean_float3_byref_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetAllAimPositions_Public_Void_float3_0;

	public float2 Movement;

	public float3 AimPosition;

	public float3 AimPositionPlane;

	public float3 AimDirection;

	public float AimLength;

	public Entity HoveredEntity;

	public NetworkId HoveredEntityNetworkId;

	public AimDirectionType ProjectileAimType;

	public SyncedInputState State;
}
```

## Server Systems

- [DisableNpcsSystem](/systems/server/DisableNpcsSystem)
- [MinionSpawnSystem](/systems/server/MinionSpawnSystem)
- [NetworkInterpolationSystem_Server](/systems/server/NetworkInterpolationSystem_Server)
- [UpdateEntityInput_Server](/systems/server/UpdateEntityInput_Server)
- [WalkBackAndForthSystem](/systems/server/WalkBackAndForthSystem)

## Client Systems

- [DisableNpcsSystem](/systems/client/DisableNpcsSystem)
- [GameplayInputSystem](/systems/client/GameplayInputSystem)
- [NetworkInterpolationSystem_Client](/systems/client/NetworkInterpolationSystem_Client)
