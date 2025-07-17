---
nav_exclude: true
search_exclude: true
---

# DestroyData

```csharp
public struct DestroyData
{
	static DestroyData()
	{
		Il2CppClassPointerStore<DestroyData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DestroyData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyData>.NativeClassPtr);
		DestroyData.NativeFieldInfoPtr_DestroyReason = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyData>.NativeClassPtr, "DestroyReason");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DestroyReason;

	public DestroyReason DestroyReason;
}
```
