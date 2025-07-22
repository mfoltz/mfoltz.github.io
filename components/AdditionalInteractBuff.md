---
nav_exclude: true
search_exclude: true
---

# AdditionalInteractBuff

```csharp
public struct AdditionalInteractBuff
{
	static AdditionalInteractBuff()
	{
		Il2CppClassPointerStore<AdditionalInteractBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AdditionalInteractBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AdditionalInteractBuff>.NativeClassPtr);
		AdditionalInteractBuff.NativeFieldInfoPtr_Buff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdditionalInteractBuff>.NativeClassPtr, "Buff");
		AdditionalInteractBuff.NativeFieldInfoPtr_BuffInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdditionalInteractBuff>.NativeClassPtr, "BuffInstance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AdditionalInteractBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Buff;
	private static readonly IntPtr NativeFieldInfoPtr_BuffInstance;

	public PrefabGUID Buff;

	public Entity BuffInstance;
}
```

## Server Systems

- [AdditionalInteractBuffComponentDestroySystem](/systems/server/AdditionalInteractBuffComponentDestroySystem)
- [AdditionalInteractBuffComponentSpawnSystem](/systems/server/AdditionalInteractBuffComponentSpawnSystem)
