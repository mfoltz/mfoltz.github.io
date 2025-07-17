---
nav_exclude: true
search_exclude: true
---

# PhysicsMassOverride

```csharp
public struct PhysicsMassOverride
{
	static PhysicsMassOverride()
	{
		Il2CppClassPointerStore<PhysicsMassOverride>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics", "PhysicsMassOverride");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsMassOverride>.NativeClassPtr);
		PhysicsMassOverride.NativeFieldInfoPtr_IsKinematic = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsMassOverride>.NativeClassPtr, "IsKinematic");
		PhysicsMassOverride.NativeFieldInfoPtr_SetVelocityToZero = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsMassOverride>.NativeClassPtr, "SetVelocityToZero");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsMassOverride>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IsKinematic;
	private static readonly IntPtr NativeFieldInfoPtr_SetVelocityToZero;

	public byte IsKinematic;

	public byte SetVelocityToZero;
}
```
