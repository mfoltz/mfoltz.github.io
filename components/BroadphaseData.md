---
nav_exclude: true
search_exclude: false
---

# BroadphaseData

```csharp
public struct BroadphaseData
{
	static BroadphaseData()
	{
		Il2CppClassPointerStore<BroadphaseData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics.Systems", "BroadphaseData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BroadphaseData>.NativeClassPtr);
		BroadphaseData.NativeFieldInfoPtr_m_SimulationDisposed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BroadphaseData>.NativeClassPtr, "m_SimulationDisposed");
		BroadphaseData.NativeFieldInfoPtr_m_UnityPhysicsSimulation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BroadphaseData>.NativeClassPtr, "m_UnityPhysicsSimulation");
		BroadphaseData.NativeMethodInfoPtr_SetUnityPhysicsSystemsActivationState_Internal_Void_Boolean_byref_SystemState_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BroadphaseData>.NativeClassPtr, 100666735);
		BroadphaseData.NativeMethodInfoPtr_DisableSystemChain_Internal_Void_byref_SystemState_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BroadphaseData>.NativeClassPtr, 100666736);
		BroadphaseData.NativeMethodInfoPtr_EnableSystemChain_Internal_Void_byref_SystemState_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BroadphaseData>.NativeClassPtr, 100666737);
	}

	public unsafe void SetUnityPhysicsSystemsActivationState(bool activationState, ref SystemState broadphaseSystem)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref activationState;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &broadphaseSystem;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BroadphaseData.NativeMethodInfoPtr_SetUnityPhysicsSystemsActivationState_Internal_Void_Boolean_byref_SystemState_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void DisableSystemChain(ref SystemState broadphaseSystem)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &broadphaseSystem;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BroadphaseData.NativeMethodInfoPtr_DisableSystemChain_Internal_Void_byref_SystemState_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void EnableSystemChain(ref SystemState broadphaseSystem)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &broadphaseSystem;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BroadphaseData.NativeMethodInfoPtr_EnableSystemChain_Internal_Void_byref_SystemState_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BroadphaseData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_m_SimulationDisposed;
	private static readonly IntPtr NativeFieldInfoPtr_m_UnityPhysicsSimulation;
	private static readonly IntPtr NativeMethodInfoPtr_SetUnityPhysicsSystemsActivationState_Internal_Void_Boolean_byref_SystemState_0;
	private static readonly IntPtr NativeMethodInfoPtr_DisableSystemChain_Internal_Void_byref_SystemState_0;
	private static readonly IntPtr NativeMethodInfoPtr_EnableSystemChain_Internal_Void_byref_SystemState_0;

	public bool m_SimulationDisposed;

	public Simulation m_UnityPhysicsSimulation;
}
```
