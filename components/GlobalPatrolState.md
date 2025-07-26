# GlobalPatrolState

```csharp
[StructLayout(2)]
public struct GlobalPatrolState
{
	static GlobalPatrolState()
	{
		Il2CppClassPointerStore<GlobalPatrolState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "GlobalPatrolState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GlobalPatrolState>.NativeClassPtr);
		GlobalPatrolState.NativeFieldInfoPtr_StartBusStopIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalPatrolState>.NativeClassPtr, "StartBusStopIndex");
		GlobalPatrolState.NativeFieldInfoPtr_CurrentBusStopIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalPatrolState>.NativeClassPtr, "CurrentBusStopIndex");
		GlobalPatrolState.NativeFieldInfoPtr_TargetBusStopIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalPatrolState>.NativeClassPtr, "TargetBusStopIndex");
		GlobalPatrolState.NativeFieldInfoPtr_PathRequestEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalPatrolState>.NativeClassPtr, "PathRequestEntity");
		GlobalPatrolState.NativeFieldInfoPtr_PatrolType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalPatrolState>.NativeClassPtr, "PatrolType");
		GlobalPatrolState.NativeFieldInfoPtr_Direction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalPatrolState>.NativeClassPtr, "Direction");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GlobalPatrolState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StartBusStopIndex;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentBusStopIndex;
	private static readonly IntPtr NativeFieldInfoPtr_TargetBusStopIndex;
	private static readonly IntPtr NativeFieldInfoPtr_PathRequestEntity;
	private static readonly IntPtr NativeFieldInfoPtr_PatrolType;
	private static readonly IntPtr NativeFieldInfoPtr_Direction;
	[FieldOffset(0)]
	public int StartBusStopIndex;
	[FieldOffset(4)]
	public int CurrentBusStopIndex;
	[FieldOffset(8)]
	public int TargetBusStopIndex;
	[FieldOffset(12)]
	public Entity PathRequestEntity;
	[FieldOffset(20)]
	public GlobalPatrolType PatrolType;
	[FieldOffset(24)]
	public GlobalPatrolDirection Direction;
	[StructLayout(2)]
	public struct Initialized
	{
		static Initialized()
		{
			Il2CppClassPointerStore<GlobalPatrolState.Initialized>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<GlobalPatrolState>.NativeClassPtr, "Initialized");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GlobalPatrolState.Initialized>.NativeClassPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GlobalPatrolState.Initialized>.NativeClassPtr, ref this));
		}
	}
}
