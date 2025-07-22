---
nav_exclude: true
search_exclude: false
---

# KnockbackEvent

```csharp
public struct KnockbackEvent
{
	static KnockbackEvent()
	{
		Il2CppClassPointerStore<KnockbackEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "KnockbackEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<KnockbackEvent>.NativeClassPtr);
		KnockbackEvent.NativeFieldInfoPtr_KnockbackPower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<KnockbackEvent>.NativeClassPtr, "KnockbackPower");
		KnockbackEvent.NativeFieldInfoPtr_Direction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<KnockbackEvent>.NativeClassPtr, "Direction");
		KnockbackEvent.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<KnockbackEvent>.NativeClassPtr, "Duration");
		KnockbackEvent.NativeFieldInfoPtr_Range = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<KnockbackEvent>.NativeClassPtr, "Range");
		KnockbackEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<KnockbackEvent>.NativeClassPtr, "Target");
		KnockbackEvent.NativeFieldInfoPtr_Owner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<KnockbackEvent>.NativeClassPtr, "Owner");
		KnockbackEvent.NativeFieldInfoPtr_Creator = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<KnockbackEvent>.NativeClassPtr, "Creator");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<KnockbackEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_KnockbackPower;
	private static readonly IntPtr NativeFieldInfoPtr_Direction;
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_Range;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_Owner;
	private static readonly IntPtr NativeFieldInfoPtr_Creator;

	public KnockbackPower KnockbackPower;

	public float3 Direction;

	public float Duration;

	public float Range;

	public Entity Target;

	public Entity Owner;

	public Entity Creator;
}
```

## Server Systems

- [KnockbackEventSystem](/systems/server/KnockbackEventSystem)
