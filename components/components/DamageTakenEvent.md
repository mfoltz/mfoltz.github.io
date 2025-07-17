---
nav_exclude: true
search_exclude: true
---

# DamageTakenEvent

```csharp
[StructLayout(2)]
public struct DamageTakenEvent
{
	static DamageTakenEvent()
	{
		Il2CppClassPointerStore<DamageTakenEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DamageTakenEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DamageTakenEvent>.NativeClassPtr);
		DamageTakenEvent.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageTakenEvent>.NativeClassPtr, "Entity");
		DamageTakenEvent.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageTakenEvent>.NativeClassPtr, "Source");
		DamageTakenEvent.NativeFieldInfoPtr_IsDoT = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageTakenEvent>.NativeClassPtr, "IsDoT");
		DamageTakenEvent.NativeFieldInfoPtr_IgnoreCC = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageTakenEvent>.NativeClassPtr, "IgnoreCC");
		DamageTakenEvent.NativeFieldInfoPtr_IgnorePhysicalLeech = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageTakenEvent>.NativeClassPtr, "IgnorePhysicalLeech");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DamageTakenEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_IsDoT;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreCC;
	private static readonly IntPtr NativeFieldInfoPtr_IgnorePhysicalLeech;
	[FieldOffset(0)]
	public Entity Entity;
	[FieldOffset(8)]
	public Entity Source;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool IsDoT;
	[FieldOffset(17)]
	[MarshalAs(4)]
	public bool IgnoreCC;
	[FieldOffset(18)]
	[MarshalAs(4)]
	public bool IgnorePhysicalLeech;
}
