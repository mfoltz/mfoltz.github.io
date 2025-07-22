---
nav_exclude: true
search_exclude: false
---

# PavementBonus

```csharp
public struct PavementBonus
{
	static PavementBonus()
	{
		Il2CppClassPointerStore<PavementBonus>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PavementBonus");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PavementBonus>.NativeClassPtr);
		PavementBonus.NativeFieldInfoPtr_MovementSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PavementBonus>.NativeClassPtr, "MovementSpeed");
		PavementBonus.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PavementBonus>.NativeClassPtr, "ModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PavementBonus>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MovementSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;

	public float MovementSpeed;

	public ModificationId ModificationId;
}
```
