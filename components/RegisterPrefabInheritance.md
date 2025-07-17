---
nav_exclude: true
search_exclude: true
---

# RegisterPrefabInheritance

```csharp
[StructLayout(2)]
public struct RegisterPrefabInheritance
{
	static RegisterPrefabInheritance()
	{
		Il2CppClassPointerStore<RegisterPrefabInheritance>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RegisterPrefabInheritance");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RegisterPrefabInheritance>.NativeClassPtr);
		RegisterPrefabInheritance.NativeFieldInfoPtr_Prefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterPrefabInheritance>.NativeClassPtr, "Prefab");
		RegisterPrefabInheritance.NativeFieldInfoPtr_BasePrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterPrefabInheritance>.NativeClassPtr, "BasePrefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RegisterPrefabInheritance>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Prefab;
	private static readonly IntPtr NativeFieldInfoPtr_BasePrefab;
	[FieldOffset(0)]
	public PrefabIdentifier Prefab;
	[FieldOffset(4)]
	public PrefabIdentifier BasePrefab;
}
