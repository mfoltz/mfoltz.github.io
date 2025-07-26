---
nav_exclude: true
search_exclude: true
---

# SmurfProjectile_DataServer

```csharp
public struct SmurfProjectile_DataServer
{
	static SmurfProjectile_DataServer()
	{
		Il2CppClassPointerStore<SmurfProjectile_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "SmurfProjectile_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SmurfProjectile_DataServer>.NativeClassPtr);
		SmurfProjectile_DataServer.NativeFieldInfoPtr_Damage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SmurfProjectile_DataServer>.NativeClassPtr, "Damage");
		SmurfProjectile_DataServer.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SmurfProjectile_DataServer>.NativeClassPtr, "Radius");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SmurfProjectile_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Damage;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;

	public float Damage;

	public float Radius;
}
```
