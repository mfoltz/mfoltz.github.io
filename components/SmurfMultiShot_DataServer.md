---
nav_exclude: true
search_exclude: false
---

# SmurfMultiShot_DataServer

```csharp
public struct SmurfMultiShot_DataServer
{
	static SmurfMultiShot_DataServer()
	{
		Il2CppClassPointerStore<SmurfMultiShot_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "SmurfMultiShot_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SmurfMultiShot_DataServer>.NativeClassPtr);
		SmurfMultiShot_DataServer.NativeFieldInfoPtr_NewProjectile = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SmurfMultiShot_DataServer>.NativeClassPtr, "NewProjectile");
		SmurfMultiShot_DataServer.NativeFieldInfoPtr_PrefabGuidForPlacementRules = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SmurfMultiShot_DataServer>.NativeClassPtr, "PrefabGuidForPlacementRules");
		SmurfMultiShot_DataServer.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SmurfMultiShot_DataServer>.NativeClassPtr, "Count");
		SmurfMultiShot_DataServer.NativeFieldInfoPtr_Angle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SmurfMultiShot_DataServer>.NativeClassPtr, "Angle");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SmurfMultiShot_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NewProjectile;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGuidForPlacementRules;
	private static readonly IntPtr NativeFieldInfoPtr_Count;
	private static readonly IntPtr NativeFieldInfoPtr_Angle;

	public PrefabGUID NewProjectile;

	public PrefabGUID PrefabGuidForPlacementRules;

	public int Count;

	public float Angle;
}
```
