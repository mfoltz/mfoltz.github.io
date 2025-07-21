---
nav_exclude: true
search_exclude: false
---

# SetOwnerRotateTowardsMovement

```csharp
public struct SetOwnerRotateTowardsMovement
{
	static SetOwnerRotateTowardsMovement()
	{
		Il2CppClassPointerStore<SetOwnerRotateTowardsMovement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SetOwnerRotateTowardsMovement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SetOwnerRotateTowardsMovement>.NativeClassPtr);
		SetOwnerRotateTowardsMovement.NativeFieldInfoPtr_Importance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetOwnerRotateTowardsMovement>.NativeClassPtr, "Importance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SetOwnerRotateTowardsMovement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Importance;

	public int Importance;
}
```

## Server Systems

- [SetOwnerRotateTowardsMovementSystem](/systems/server/SetOwnerRotateTowardsMovementSystem)
