---
nav_exclude: true
search_exclude: true
---

# WorkstationAssignedServant

```csharp
[StructLayout(2)]
public struct WorkstationAssignedServant
{
	static WorkstationAssignedServant()
	{
		Il2CppClassPointerStore<WorkstationAssignedServant>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "WorkstationAssignedServant");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorkstationAssignedServant>.NativeClassPtr);
		WorkstationAssignedServant.NativeFieldInfoPtr_ServantEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorkstationAssignedServant>.NativeClassPtr, "ServantEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorkstationAssignedServant>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ServantEntity;
	[FieldOffset(0)]
	public Entity ServantEntity;
}
