---
nav_exclude: true
search_exclude: true
---

# RepairRequirementBuffer

```csharp
public struct RepairRequirementBuffer
{
	static RepairRequirementBuffer()
	{
		Il2CppClassPointerStore<RepairRequirementBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RepairRequirementBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RepairRequirementBuffer>.NativeClassPtr);
		RepairRequirementBuffer.NativeFieldInfoPtr_ItemGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RepairRequirementBuffer>.NativeClassPtr, "ItemGuid");
		RepairRequirementBuffer.NativeFieldInfoPtr_RequiredAmount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RepairRequirementBuffer>.NativeClassPtr, "RequiredAmount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RepairRequirementBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ItemGuid;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredAmount;

	public PrefabGUID ItemGuid;

	public int RequiredAmount;
}
```
