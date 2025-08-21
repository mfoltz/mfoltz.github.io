---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Trigger
{
	static Trigger()
	{
		Il2CppClassPointerStore<Trigger>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Scripting", "Trigger");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Trigger>.NativeClassPtr);
		Trigger.NativeFieldInfoPtr_CallerEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Trigger>.NativeClassPtr, "CallerEntity");
		Trigger.NativeFieldInfoPtr_FunctionHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Trigger>.NativeClassPtr, "FunctionHash");
		Trigger.NativeFieldInfoPtr_ContextEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Trigger>.NativeClassPtr, "ContextEntity");
		Trigger.NativeFieldInfoPtr_HitFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Trigger>.NativeClassPtr, "HitFilter");
		Trigger.NativeFieldInfoPtr_CollisionFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Trigger>.NativeClassPtr, "CollisionFilter");
		Trigger.NativeFieldInfoPtr_Offset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Trigger>.NativeClassPtr, "Offset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Trigger>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CallerEntity;
	private static readonly IntPtr NativeFieldInfoPtr_FunctionHash;
	private static readonly IntPtr NativeFieldInfoPtr_ContextEntity;
	private static readonly IntPtr NativeFieldInfoPtr_HitFilter;
	private static readonly IntPtr NativeFieldInfoPtr_CollisionFilter;
	private static readonly IntPtr NativeFieldInfoPtr_Offset;

	public Entity CallerEntity;

	public int FunctionHash;

	public Entity ContextEntity;

	public HitFilter HitFilter;

	public CollisionFilter CollisionFilter;

	public float3 Offset;
}
```

## Server Systems

- [TriggerSystem]({{% relref "systems/server/TriggerSystem.md" %}})
