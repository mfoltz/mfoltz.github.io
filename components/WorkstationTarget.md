# WorkstationTarget

```csharp
[StructLayout(2)]
public struct WorkstationTarget
{
	static WorkstationTarget()
	{
		Il2CppClassPointerStore<WorkstationTarget>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.UI", "WorkstationTarget");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorkstationTarget>.NativeClassPtr);
		WorkstationTarget.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorkstationTarget>.NativeClassPtr, "Target");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorkstationTarget>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	[FieldOffset(0)]
	public Entity Target;
}
