---
nav_exclude: true
search_exclude: true
---

```csharp
public struct LocalRagdollImpulse
{
	static LocalRagdollImpulse()
	{
		Il2CppClassPointerStore<LocalRagdollImpulse>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "LocalRagdollImpulse");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LocalRagdollImpulse>.NativeClassPtr);
		LocalRagdollImpulse.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LocalRagdollImpulse>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LocalRagdollImpulse>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float3 Value;
}
```
