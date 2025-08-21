---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DummySimulationData
{
	static DummySimulationData()
	{
		Il2CppClassPointerStore<DummySimulationData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics.Systems", "DummySimulationData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DummySimulationData>.NativeClassPtr);
		DummySimulationData.NativeFieldInfoPtr_dummyData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DummySimulationData>.NativeClassPtr, "dummyData");
		DummySimulationData.NativeFieldInfoPtr_m_Simulation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DummySimulationData>.NativeClassPtr, "m_Simulation");
		DummySimulationData.NativeMethodInfoPtr_DisableSystemChain_Internal_Void_byref_SystemState_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DummySimulationData>.NativeClassPtr, 100666378);
		DummySimulationData.NativeMethodInfoPtr_EnableSystemChain_Internal_Void_byref_SystemState_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DummySimulationData>.NativeClassPtr, 100666379);
	}

	public unsafe void DisableSystemChain(ref SystemState systemStateRef)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &systemStateRef;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DummySimulationData.NativeMethodInfoPtr_DisableSystemChain_Internal_Void_byref_SystemState_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void EnableSystemChain(ref SystemState systemStateRef)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &systemStateRef;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DummySimulationData.NativeMethodInfoPtr_EnableSystemChain_Internal_Void_byref_SystemState_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DummySimulationData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_dummyData;
	private static readonly IntPtr NativeFieldInfoPtr_m_Simulation;
	private static readonly IntPtr NativeMethodInfoPtr_DisableSystemChain_Internal_Void_byref_SystemState_0;
	private static readonly IntPtr NativeMethodInfoPtr_EnableSystemChain_Internal_Void_byref_SystemState_0;

	public byte dummyData;

	public DummySimulation m_Simulation;
}
```
