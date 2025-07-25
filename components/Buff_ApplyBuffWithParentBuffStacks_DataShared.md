---
nav_exclude: true
search_exclude: true
---

# Buff_ApplyBuffWithParentBuffStacks_DataShared

```csharp
public struct Buff_ApplyBuffWithParentBuffStacks_DataShared
{
	static Buff_ApplyBuffWithParentBuffStacks_DataShared()
	{
		Il2CppClassPointerStore<Buff_ApplyBuffWithParentBuffStacks_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Buff_ApplyBuffWithParentBuffStacks_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Buff_ApplyBuffWithParentBuffStacks_DataShared>.NativeClassPtr);
		Buff_ApplyBuffWithParentBuffStacks_DataShared.NativeFieldInfoPtr_BuffType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_ApplyBuffWithParentBuffStacks_DataShared>.NativeClassPtr, "BuffType");
		Buff_ApplyBuffWithParentBuffStacks_DataShared.NativeFieldInfoPtr_FetchStacksFromBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_ApplyBuffWithParentBuffStacks_DataShared>.NativeClassPtr, "FetchStacksFromBuff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Buff_ApplyBuffWithParentBuffStacks_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffType;
	private static readonly IntPtr NativeFieldInfoPtr_FetchStacksFromBuff;

	public PrefabGUID BuffType;

	public bool FetchStacksFromBuff;
}
```
