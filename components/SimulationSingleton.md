# SimulationSingleton

```csharp
[StructLayout(2)]
public struct SimulationSingleton
{
	static SimulationSingleton()
	{
		Il2CppClassPointerStore<SimulationSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics", "SimulationSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SimulationSingleton>.NativeClassPtr);
		SimulationSingleton.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SimulationSingleton>.NativeClassPtr, "Type");
		SimulationSingleton.NativeFieldInfoPtr_m_SimulationPtr = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SimulationSingleton>.NativeClassPtr, "m_SimulationPtr");
		SimulationSingleton.NativeMethodInfoPtr_AsSimulation_Public_Simulation_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SimulationSingleton>.NativeClassPtr, 100665710);
		SimulationSingleton.NativeMethodInfoPtr_AsSimulationPtr_Internal_ptr_Simulation_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SimulationSingleton>.NativeClassPtr, 100665711);
		SimulationSingleton.NativeMethodInfoPtr_InitializeFromSimulation_Public_Void_byref_Simulation_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SimulationSingleton>.NativeClassPtr, 100665712);
	}
	[CallerCount(6)]
	[CachedScanResults(RefRangeStart = 1822354, RefRangeEnd = 1822360, XrefRangeStart = 1822352, XrefRangeEnd = 1822354, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe Simulation AsSimulation()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SimulationSingleton.NativeMethodInfoPtr_AsSimulation_Public_Simulation_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 1822362, RefRangeEnd = 1822366, XrefRangeStart = 1822360, XrefRangeEnd = 1822362, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe Simulation* AsSimulationPtr()
	{
		IntPtr* ptr = null;
		IntPtr intPtr;
		IntPtr result = IL2CPP.il2cpp_runtime_invoke(SimulationSingleton.NativeMethodInfoPtr_AsSimulationPtr_Internal_ptr_Simulation_0, ref this, (void**)ptr, ref intPtr);
		Il2CppException.RaiseExceptionIfNecessary(intPtr);
		return result;
	}
	[CallerCount(0)]
	public unsafe void InitializeFromSimulation(ref Simulation simulation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &simulation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SimulationSingleton.NativeMethodInfoPtr_InitializeFromSimulation_Public_Void_byref_Simulation_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SimulationSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_m_SimulationPtr;
	private static readonly IntPtr NativeMethodInfoPtr_AsSimulation_Public_Simulation_0;
	private static readonly IntPtr NativeMethodInfoPtr_AsSimulationPtr_Internal_ptr_Simulation_0;
	private static readonly IntPtr NativeMethodInfoPtr_InitializeFromSimulation_Public_Void_byref_Simulation_0;
	[FieldOffset(0)]
	public SimulationType Type;
	[FieldOffset(8)]
	public unsafe void* m_SimulationPtr;
}
