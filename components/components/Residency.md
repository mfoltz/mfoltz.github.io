---
nav_exclude: true
search_exclude: true
---

# Residency

```csharp
[StructLayout(2)]
public struct Residency
{
	static Residency()
	{
		Il2CppClassPointerStore<Residency>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Residency");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Residency>.NativeClassPtr);
		Residency.NativeFieldInfoPtr_InsideBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Residency>.NativeClassPtr, "InsideBuff");
		Residency.NativeFieldInfoPtr_Resident = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Residency>.NativeClassPtr, "Resident");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Residency>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_InsideBuff;
	private static readonly IntPtr NativeFieldInfoPtr_Resident;
	[FieldOffset(0)]
	public PrefabGUID InsideBuff;
	[FieldOffset(4)]
	public Entity Resident;
}
