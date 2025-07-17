---
nav_exclude: true
search_exclude: true
---

# Equippable

```csharp
[StructLayout(2)]
public struct Equippable
{
	static Equippable()
	{
		Il2CppClassPointerStore<Equippable>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Equippable");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Equippable>.NativeClassPtr);
		Equippable.NativeFieldInfoPtr_EquipTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equippable>.NativeClassPtr, "EquipTarget");
		Equippable.NativeFieldInfoPtr_EquipBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equippable>.NativeClassPtr, "EquipBuff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Equippable>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EquipTarget;
	private static readonly IntPtr NativeFieldInfoPtr_EquipBuff;
	[FieldOffset(0)]
	public NetworkedEntity EquipTarget;
	[FieldOffset(12)]
	public Entity EquipBuff;
}
