---
nav_exclude: true
search_exclude: true
---

# MegaStaticSingleton

```csharp
public struct MegaStaticSingleton
{
	static MegaStaticSingleton()
	{
		Il2CppClassPointerStore<MegaStaticSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MegaStaticSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MegaStaticSingleton>.NativeClassPtr);
		MegaStaticSingleton.NativeFieldInfoPtr_ToInstantiate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MegaStaticSingleton>.NativeClassPtr, "ToInstantiate");
		MegaStaticSingleton.NativeFieldInfoPtr_ToRemove = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MegaStaticSingleton>.NativeClassPtr, "ToRemove");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MegaStaticSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ToInstantiate;
	private static readonly IntPtr NativeFieldInfoPtr_ToRemove;

	public NativeList<ToInstantiate> ToInstantiate;

	public NativeList<ToRemove> ToRemove;
}
```
