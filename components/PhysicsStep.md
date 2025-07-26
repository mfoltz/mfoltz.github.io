# PhysicsStep

```csharp
[StructLayout(2)]
public struct PhysicsStep
{
	static PhysicsStep()
	{
		Il2CppClassPointerStore<PhysicsStep>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics", "PhysicsStep");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsStep>.NativeClassPtr);
		PhysicsStep.NativeFieldInfoPtr_SimulationType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsStep>.NativeClassPtr, "SimulationType");
		PhysicsStep.NativeFieldInfoPtr_Gravity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsStep>.NativeClassPtr, "Gravity");
		PhysicsStep.NativeFieldInfoPtr_SolverIterationCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsStep>.NativeClassPtr, "SolverIterationCount");
		PhysicsStep.NativeFieldInfoPtr_SolverStabilizationHeuristicSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsStep>.NativeClassPtr, "SolverStabilizationHeuristicSettings");
		PhysicsStep.NativeFieldInfoPtr_MultiThreaded = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsStep>.NativeClassPtr, "MultiThreaded");
		PhysicsStep.NativeFieldInfoPtr_SynchronizeCollisionWorld = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsStep>.NativeClassPtr, "SynchronizeCollisionWorld");
		PhysicsStep.NativeFieldInfoPtr_Default = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsStep>.NativeClassPtr, "Default");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsStep>.NativeClassPtr, ref this));
	}
	public unsafe static PhysicsStep Default
	{
		get
		{
			PhysicsStep result;
			IL2CPP.il2cpp_field_static_get_value(PhysicsStep.NativeFieldInfoPtr_Default, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(PhysicsStep.NativeFieldInfoPtr_Default, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_SimulationType;
	private static readonly IntPtr NativeFieldInfoPtr_Gravity;
	private static readonly IntPtr NativeFieldInfoPtr_SolverIterationCount;
	private static readonly IntPtr NativeFieldInfoPtr_SolverStabilizationHeuristicSettings;
	private static readonly IntPtr NativeFieldInfoPtr_MultiThreaded;
	private static readonly IntPtr NativeFieldInfoPtr_SynchronizeCollisionWorld;
	private static readonly IntPtr NativeFieldInfoPtr_Default;
	[FieldOffset(0)]
	public SimulationType SimulationType;
	[FieldOffset(4)]
	public float3 Gravity;
	[FieldOffset(16)]
	public int SolverIterationCount;
	[FieldOffset(20)]
	public Solver.StabilizationHeuristicSettings SolverStabilizationHeuristicSettings;
	[FieldOffset(32)]
	public byte MultiThreaded;
	[FieldOffset(33)]
	public byte SynchronizeCollisionWorld;
}
