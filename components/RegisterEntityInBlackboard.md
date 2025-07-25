---
nav_exclude: true
search_exclude: true
---

# RegisterEntityInBlackboard

```csharp
public struct RegisterEntityInBlackboard
{
	static RegisterEntityInBlackboard()
	{
		Il2CppClassPointerStore<RegisterEntityInBlackboard>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Behaviours.dll", "ProjectM.Behaviours", "RegisterEntityInBlackboard");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RegisterEntityInBlackboard>.NativeClassPtr);
		RegisterEntityInBlackboard.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterEntityInBlackboard>.NativeClassPtr, "Entity");
		RegisterEntityInBlackboard.NativeFieldInfoPtr_Index = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterEntityInBlackboard>.NativeClassPtr, "Index");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RegisterEntityInBlackboard>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_Index;

	public Entity Entity;

	public int Index;
}
```

## Server Systems

- [RegisterEntityInBlackboardSystem](/systems/server/RegisterEntityInBlackboardSystem)
