---
nav_exclude: true
search_exclude: true
---

# Script_CarriageCollidersData

```csharp
[StructLayout(2)]
public struct Script_CarriageCollidersData
{
	static Script_CarriageCollidersData()
	{
		Il2CppClassPointerStore<Script_CarriageCollidersData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_CarriageCollidersData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_CarriageCollidersData>.NativeClassPtr);
		Script_CarriageCollidersData.NativeFieldInfoPtr_ColliderPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CarriageCollidersData>.NativeClassPtr, "ColliderPrefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_CarriageCollidersData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ColliderPrefab;
	[FieldOffset(0)]
	public PrefabGUID ColliderPrefab;
}
