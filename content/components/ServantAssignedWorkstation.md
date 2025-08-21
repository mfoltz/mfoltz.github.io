---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ServantAssignedWorkstation
{
	static ServantAssignedWorkstation()
	{
		Il2CppClassPointerStore<ServantAssignedWorkstation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ServantAssignedWorkstation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantAssignedWorkstation>.NativeClassPtr);
		ServantAssignedWorkstation.NativeFieldInfoPtr_WorkstationEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantAssignedWorkstation>.NativeClassPtr, "WorkstationEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantAssignedWorkstation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WorkstationEntity;

	public Entity WorkstationEntity;
}
```
