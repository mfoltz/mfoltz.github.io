---
nav_exclude: true
search_exclude: true
---

# DropTableBuffer

```csharp
public struct DropTableBuffer
{
	static DropTableBuffer()
	{
		Il2CppClassPointerStore<DropTableBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "DropTableBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DropTableBuffer>.NativeClassPtr);
		DropTableBuffer.NativeFieldInfoPtr_DropTableGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableBuffer>.NativeClassPtr, "DropTableGuid");
		DropTableBuffer.NativeFieldInfoPtr_DropTrigger = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableBuffer>.NativeClassPtr, "DropTrigger");
		DropTableBuffer.NativeFieldInfoPtr_RelicType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DropTableBuffer>.NativeClassPtr, "RelicType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DropTableBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DropTableGuid;
	private static readonly IntPtr NativeFieldInfoPtr_DropTrigger;
	private static readonly IntPtr NativeFieldInfoPtr_RelicType;

	public PrefabGUID DropTableGuid;

	public DropTriggerType DropTrigger;

	public RelicType RelicType;
}
```
