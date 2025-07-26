# ProgressionDependencyData

```csharp
[StructLayout(2)]
public struct ProgressionDependencyData
{
	static ProgressionDependencyData()
	{
		Il2CppClassPointerStore<ProgressionDependencyData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ProgressionDependencyData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProgressionDependencyData>.NativeClassPtr);
		ProgressionDependencyData.NativeFieldInfoPtr_Dependencies = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressionDependencyData>.NativeClassPtr, "Dependencies");
		ProgressionDependencyData.NativeFieldInfoPtr_ForwardDependencies = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressionDependencyData>.NativeClassPtr, "ForwardDependencies");
		ProgressionDependencyData.NativeFieldInfoPtr_UserContentDependencies = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProgressionDependencyData>.NativeClassPtr, "UserContentDependencies");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProgressionDependencyData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Dependencies;
	private static readonly IntPtr NativeFieldInfoPtr_ForwardDependencies;
	private static readonly IntPtr NativeFieldInfoPtr_UserContentDependencies;
	[FieldOffset(0)]
	public NativeParallelHashMap<PrefabGUID, PrefabGUID> Dependencies;
	[FieldOffset(16)]
	public NativeParallelMultiHashMap<PrefabGUID, PrefabGUID> ForwardDependencies;
	[FieldOffset(32)]
	public NativeParallelHashMap<PrefabGUID, UserContentFlags> UserContentDependencies;
}
