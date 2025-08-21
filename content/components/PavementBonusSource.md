---
nav_exclude: true
search_exclude: true
---

```csharp
public struct PavementBonusSource
{
	static PavementBonusSource()
	{
		Il2CppClassPointerStore<PavementBonusSource>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PavementBonusSource");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PavementBonusSource>.NativeClassPtr);
		PavementBonusSource.NativeFieldInfoPtr_MovementSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PavementBonusSource>.NativeClassPtr, "MovementSpeed");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PavementBonusSource>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MovementSpeed;

	public float MovementSpeed;
}
```
