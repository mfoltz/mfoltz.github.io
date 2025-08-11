---
nav_exclude: true
search_exclude: true
---

# RandomMutant

```csharp
public struct RandomMutant
{
	static RandomMutant()
	{
		Il2CppClassPointerStore<RandomMutant>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "RandomMutant");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RandomMutant>.NativeClassPtr);
		RandomMutant.NativeFieldInfoPtr_Mutant = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RandomMutant>.NativeClassPtr, "Mutant");
		RandomMutant.NativeFieldInfoPtr_Weight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RandomMutant>.NativeClassPtr, "Weight");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RandomMutant>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Mutant;
	private static readonly IntPtr NativeFieldInfoPtr_Weight;

	public PrefabGUID Mutant;

	public int Weight;
}
```
